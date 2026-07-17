// 核心玩法。坐标约定:
//   拍→像素:事件在拍 τ 时,其屏幕 y = H - (τ - cb) * ppb(cb=当前拍,ppb=每拍像素)。
//   方块底边 = 音符起拍位置,方块高度 = 时值 × ppb(长音=长块,快串=短块)。
//   cb 越过方块起拍即方块底边滑出屏幕;超过宽限拍数仍未点中 → 漏块失败。
// 音乐由点击驱动:点中方块才发声(《钢琴块2》的核心手感)。

import { CONFIG } from '../config.js';
import { compileChart, assignLanes } from '../chart/chart.js';
import { playNote, playChord, startSustain, playWrong } from '../audio/piano.js';
import { audio } from '../audio/engine.js';
import { ParticleSystem } from './particles.js';
import { store } from '../storage.js';
import { t, i18n } from '../i18n.js';

const GRADE_COLOR = { perfect: '#ffd166', great: '#38bdf8', good: '#c8cbe8' };

export class Game {
  /**
   * @param {HTMLCanvasElement} canvas
   * @param {{onFinish: (result)=>void}} hooks 结算回调(主流程切到结算屏)
   */
  constructor(canvas, hooks) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.hooks = hooks;
    this.particles = new ParticleSystem();
    this.status = 'idle';
    this.raf = 0;

    // HUD / 覆盖层 DOM
    this.$ = (id) => document.getElementById(id);
    this.elScore = this.$('hud-score');
    this.elCrowns = this.$('hud-crowns');

    this._onPointerDown = (e) => { audio.ensure(); this.tapAt(e.clientX, `p${e.pointerId}`); };
    this._onPointerUp = (e) => this.release(`p${e.pointerId}`);
    this._onKeyDown = (e) => {
      if (e.repeat) return;
      if (e.code === 'Escape') { this.togglePause(); return; }
      const lane = CONFIG.KEYS[e.code];
      if (lane !== undefined) { audio.ensure(); this.tap(lane, `k${e.code}`); }
    };
    this._onKeyUp = (e) => {
      const lane = CONFIG.KEYS[e.code];
      if (lane !== undefined) this.release(`k${e.code}`);
    };
    this._onResize = () => this.resize();
    this._onVis = () => { if (document.hidden && this.status === 'playing') this.pause(); };

    // 覆盖层按钮
    this.$('btn-pause').addEventListener('click', () => this.pause());
    this.$('btn-resume').addEventListener('click', () => this.beginCountdown());
    this.$('btn-restart').addEventListener('click', () => this.start(this.songRef, this.theme));
    this.$('btn-quit').addEventListener('click', () => this.finishRun());
    this.$('btn-revive').addEventListener('click', () => this.revive());
    this.$('btn-retry').addEventListener('click', () => this.start(this.songRef, this.theme));
    this.$('btn-exit').addEventListener('click', () => this.finishRun());
  }

  // ══════════ 生命周期 ══════════

  start(song, theme) {
    this.stopLoop();
    this.songRef = song;
    this.theme = theme || { bg: ['#1b2340', '#0e1226'], accent: '#7c5cff' };
    this.compiled = compileChart(song);
    this.lap = 1;
    this.speedMult = 1;
    this.crowns = 0;
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.counts = { perfect: 0, great: 0, good: 0 };
    this.taps = 0;
    this.reviveUsed = false;
    this.playMs = 0;
    this.banner = null;          // {text, sub, t}
    this.floaters = [];          // {text, color, x, y, t}
    this.wrongFlash = null;      // {lane, y, t}
    this.activeHolds = new Map(); // srcId → {idx, accrued, handles:[{release}]}
    this.resetLap();
    this.cb = this.compiled.ticks[0].startBeat - 0.25 * this.compiled.vb;
    this.status = 'ready';

    this.hideOverlays();
    this.resize();
    this.updateHud();
    this.bind();
    this.lastT = performance.now();
    this.loop();
  }

  /** 重置本圈的方块命中状态并重新分配轨道 */
  resetLap() {
    const n = this.compiled.ticks.length;
    this.lanes = assignLanes(this.compiled, this.lap);
    this.hitMask = new Array(n).fill(0);   // 双押用位掩码:1=第一条轨已点 2=第二条
    this.hitInfo = new Array(n).fill(null); // {t, grade, lanes:[..]} 用于淡出动画
    this.expected = 0;
    this.drawFrom = 0;
  }

  bind() {
    if (this.bound) return;
    this.bound = true;
    this.canvas.addEventListener('pointerdown', this._onPointerDown);
    window.addEventListener('pointerup', this._onPointerUp);
    window.addEventListener('pointercancel', this._onPointerUp);
    window.addEventListener('keydown', this._onKeyDown);
    window.addEventListener('keyup', this._onKeyUp);
    window.addEventListener('resize', this._onResize);
    document.addEventListener('visibilitychange', this._onVis);
  }

  destroy() {
    this.stopLoop();
    this.status = 'idle';
    if (!this.bound) return;
    this.bound = false;
    this.canvas.removeEventListener('pointerdown', this._onPointerDown);
    window.removeEventListener('pointerup', this._onPointerUp);
    window.removeEventListener('pointercancel', this._onPointerUp);
    window.removeEventListener('keydown', this._onKeyDown);
    window.removeEventListener('keyup', this._onKeyUp);
    window.removeEventListener('resize', this._onResize);
    document.removeEventListener('visibilitychange', this._onVis);
  }

  stopLoop() { if (this.raf) { cancelAnimationFrame(this.raf); this.raf = 0; } }

  resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const r = this.canvas.getBoundingClientRect();
    this.W = r.width; this.H = r.height;
    this.canvas.width = Math.round(r.width * dpr);
    this.canvas.height = Math.round(r.height * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.laneW = this.W / CONFIG.LANES;
    this.ppb = this.H / this.compiled.vb;
  }

  hideOverlays() {
    for (const id of ['overlay-countdown', 'overlay-pause', 'overlay-fail']) {
      this.$(id).classList.add('hidden');
    }
  }

  // ══════════ 输入 ══════════

  tapAt(clientX, srcId) {
    const lane = Math.min(CONFIG.LANES - 1, Math.max(0, Math.floor((clientX / this.W) * CONFIG.LANES)));
    this.tap(lane, srcId);
  }

  tap(lane, srcId) {
    if (this.status === 'ready') {
      const first = this.lanes[0];
      if (first.includes(lane)) {
        this.status = 'playing';
        this.hit(lane, srcId);
      }
      return; // 开始前点其它轨道不惩罚
    }
    if (this.status !== 'playing') return;

    const i = this.expected;
    const tk = this.compiled.ticks[i];
    if (!tk) { this.fail('wrong', lane); return; } // 圈间空档点击

    const laneList = this.lanes[i];
    const side = laneList.indexOf(lane);
    const already = this.hitMask[i] & (1 << side);
    if (side === -1 || already) { this.fail('wrong', lane); return; }

    // 方块还远在屏幕上方 → 视为点空
    const yBot = this.tickYBot(i);
    if (yBot < CONFIG.MIN_TAP_ZONE * this.H) { this.fail('wrong', lane); return; }

    this.hit(lane, srcId, side);
  }

  hit(lane, srcId, side = 0) {
    const i = this.expected;
    const tk = this.compiled.ticks[i];
    const yBot = this.tickYBot(i);
    const frac = yBot / this.H;
    const grade = frac >= CONFIG.PERFECT_ZONE ? 'perfect' : frac >= CONFIG.GREAT_ZONE ? 'great' : 'good';

    // 计分
    const pts = CONFIG.SCORE[grade.toUpperCase()] * this.lap;
    this.score += pts;
    this.counts[grade]++;
    this.taps++;
    if (grade === 'perfect') { this.combo++; this.maxCombo = Math.max(this.maxCombo, this.combo); }
    else this.combo = 0;

    // 发声:双押每侧奏各自的音;附点/长音余韵按当前速度换算
    const effSec = 60 / (this.compiled.song.bpm * this.speedMult);
    const vel = grade === 'perfect' ? 1 : grade === 'great' ? 0.9 : 0.8;
    const notes = tk.type === 'double' && side === 1 ? tk.notes2 : tk.notes;

    if (tk.type === 'hold') {
      const handles = notes.map((n, idx) => startSustain(n, { vel: vel * (idx === 0 ? 1 : 0.6) }));
      this.activeHolds.set(srcId, { idx: i, accrued: 0, bonus: 0, handles });
    } else if (notes.length > 1) {
      playChord(notes, { vel, dur: tk.beats * effSec * 2.2 });
    } else {
      playNote(notes[0], { vel, dur: tk.beats * effSec * 2.2 });
    }

    // 命中记录 + 推进
    this.hitMask[i] |= (1 << side);
    const complete = tk.type === 'double' ? this.hitMask[i] === 3 : true;
    if (!this.hitInfo[i]) this.hitInfo[i] = { t: performance.now(), grade, lanes: [] };
    this.hitInfo[i].lanes.push(lane);
    if (complete) this.expected++;

    // 特效
    const x = (lane + 0.5) * this.laneW;
    const y = Math.min(yBot, this.H - 30) - 14;
    if (store.setting('particles')) this.particles.spawn(x, y, this.theme.accent, grade === 'perfect' ? 16 : 9);
    this.floaters.push({ text: t(`judge.${grade}`), color: GRADE_COLOR[grade], x, y: y - 24, t: performance.now() });

    this.updateHud();
  }

  release(srcId) {
    const h = this.activeHolds.get(srcId);
    if (!h) return;
    for (const hd of h.handles) hd.release();
    this.activeHolds.delete(srcId);
  }

  releaseAllHolds() {
    for (const [, h] of this.activeHolds) for (const hd of h.handles) hd.release();
    this.activeHolds.clear();
  }

  // ══════════ 失败 / 复活 / 暂停 ══════════

  fail(kind, lane) {
    if (this.status !== 'playing') return;
    this.status = 'failed';
    this.releaseAllHolds();
    playWrong();
    this.combo = 0;
    this.wrongFlash = { lane: lane ?? (this.lanes[this.expected] || [1])[0], t: performance.now(), kind };

    const canRevive = !this.reviveUsed && store.setting('revive');
    setTimeout(() => {
      if (this.status !== 'failed') return;
      this.$('fail-reason').textContent = t(kind === 'wrong' ? 'fail.wrong' : 'fail.miss');
      const rb = this.$('btn-revive');
      rb.textContent = t('fail.revive');
      rb.classList.toggle('hidden', !canRevive);
      this.$('overlay-fail').classList.remove('hidden');
    }, 550);
  }

  revive() {
    if (this.reviveUsed) return;
    this.reviveUsed = true;
    // 失败 tick 保持未命中;若双押点了一半则清掉半个
    this.hitMask[this.expected] = 0;
    if (this.hitInfo[this.expected]) this.hitInfo[this.expected] = null;
    this.cb = this.compiled.ticks[this.expected].startBeat - CONFIG.REVIVE_REWIND_VB * this.compiled.vb;
    this.wrongFlash = null;
    this.beginCountdown();
  }

  pause() {
    if (this.status !== 'playing' && this.status !== 'ready') return;
    this.releaseAllHolds();
    this.prevStatus = this.status;
    this.status = 'paused';
    this.$('overlay-pause').classList.remove('hidden');
  }

  togglePause() {
    if (this.status === 'paused') this.beginCountdown();
    else this.pause();
  }

  /** 从暂停/复活回到游戏:3-2-1 倒计时 */
  beginCountdown() {
    this.hideOverlays();
    if (this.prevStatus === 'ready' && this.status === 'paused') {
      this.status = 'ready'; // 还没开始就暂停 → 直接回到待开始
      this.prevStatus = null;
      return;
    }
    this.prevStatus = null;
    this.status = 'countdown';
    this.countdownLeft = 3;
    this.$('overlay-countdown').classList.remove('hidden');
    this.$('countdown-num').textContent = '3';
    this.countdownTimer = setInterval(() => {
      this.countdownLeft--;
      if (this.countdownLeft <= 0) {
        clearInterval(this.countdownTimer);
        this.$('overlay-countdown').classList.add('hidden');
        if (this.status === 'countdown') this.status = 'playing';
      } else {
        this.$('countdown-num').textContent = String(this.countdownLeft);
      }
    }, 800);
  }

  /** 结束本局(失败退出 / 暂停退出),记账并交给结算屏 */
  finishRun() {
    this.releaseAllHolds();
    this.stopLoop();
    this.hideOverlays();
    const c = this.compiled;
    const score = Math.floor(this.score);
    let stars = 0;
    for (const th of c.stars) if (score >= th) stars++;
    const { newBest } = store.recordResult(c.song.id, { score, stars, crowns: this.crowns });
    store.addExp(score);
    store.bumpStats({
      plays: 1, taps: this.taps,
      perfects: this.counts.perfect,
      maxCombo: this.maxCombo, maxLap: this.lap,
      playMs: this.playMs,
    });
    this.status = 'idle';
    this.destroy();
    this.hooks.onFinish({
      song: c.song, score, stars, crowns: this.crowns, lap: this.lap,
      maxCombo: this.maxCombo, counts: this.counts, newBest,
    });
  }

  // ══════════ 主循环 ══════════

  tickYBot(i) {
    return this.H + (this.cb - this.compiled.ticks[i].startBeat) * this.ppb;
  }

  loop() {
    this.raf = requestAnimationFrame(() => this.loop());
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.lastT) / 1000);
    this.lastT = now;

    const c = this.compiled;
    if (this.status === 'playing') {
      this.playMs += dt * 1000;
      this.cb += dt * (c.song.bpm / 60) * this.speedMult;

      // 长按积分累积
      for (const [src, h] of this.activeHolds) {
        const tk = c.ticks[h.idx];
        const acc = Math.min(Math.max(this.cb - tk.startBeat, 0), tk.holdBeats);
        if (acc > h.accrued) {
          const gain = (acc - h.accrued) * CONFIG.SCORE.HOLD_PER_BEAT * this.lap;
          this.score += gain;
          h.bonus += gain;
          h.accrued = acc;
          this.updateHud();
        }
        if (h.accrued >= tk.holdBeats) { // 按满,自动收音
          const lane = this.lanes[h.idx][0];
          this.floaters.push({
            text: `+${Math.round(h.bonus)}`, color: '#ffd166',
            x: (lane + 0.5) * this.laneW, y: this.H * 0.55, t: now,
          });
          this.release(src);
        }
      }

      // 漏块判定
      if (this.expected < c.ticks.length) {
        const tk = c.ticks[this.expected];
        if (this.cb > tk.startBeat + CONFIG.MISS_GRACE_BEATS) this.fail('miss');
      } else {
        // 一圈打完:等新一圈首块该从顶部进入时无缝接上
        const wrapAt = c.totalBeats + CONFIG.LAP_GAP_BEATS + c.ticks[0].startBeat - c.vb;
        if (this.cb >= wrapAt) this.completeLap();
      }
    }

    this.render(now);
  }

  completeLap() {
    const finished = this.lap;
    if (finished <= CONFIG.MAX_CROWNS) this.crowns = finished;
    this.lap++;
    this.speedMult *= CONFIG.SPEED_STEP;
    this.cb -= this.compiled.totalBeats + CONFIG.LAP_GAP_BEATS;
    this.resetLap();
    this.banner = {
      text: t('game.lap', { n: this.lap }),
      sub: t('game.speed', { n: this.speedMult.toFixed(2) }) + (finished <= CONFIG.MAX_CROWNS ? '  ♛' : ''),
      t: performance.now(),
    };
    this.updateHud();
  }

  updateHud() {
    this.elScore.textContent = String(Math.floor(this.score));
    this.elCrowns.textContent = this.crowns > 0 ? '♛'.repeat(this.crowns) : '';
  }

  // ══════════ 渲染 ══════════

  render(now) {
    const { ctx, W, H } = this;
    const c = this.compiled;

    // 背景
    const bg = ctx.createLinearGradient(0, 0, 0, H);
    bg.addColorStop(0, this.theme.bg[0]);
    bg.addColorStop(1, this.theme.bg[1]);
    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, W, H);

    // 缓慢漂浮的光晕
    const drift = now / 1000;
    for (let k = 0; k < 2; k++) {
      const gx = W * (0.25 + 0.5 * k) + Math.sin(drift * 0.21 + k * 2.6) * W * 0.16;
      const gy = H * (0.3 + 0.35 * k) + Math.cos(drift * 0.17 + k) * H * 0.12;
      const rad = ctx.createRadialGradient(gx, gy, 0, gx, gy, W * 0.4);
      rad.addColorStop(0, 'rgba(255,255,255,0.045)');
      rad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = rad;
      ctx.fillRect(0, 0, W, H);
    }

    // 轨道分隔线
    ctx.strokeStyle = 'rgba(255,255,255,0.07)';
    ctx.lineWidth = 1;
    for (let l = 1; l < CONFIG.LANES; l++) {
      ctx.beginPath();
      ctx.moveTo(l * this.laneW, 0);
      ctx.lineTo(l * this.laneW, H);
      ctx.stroke();
    }

    // 点空的红闪
    if (this.wrongFlash && now - this.wrongFlash.t < 700) {
      const a = 0.55 * (1 - (now - this.wrongFlash.t) / 700) * (Math.sin(now / 55) * 0.3 + 0.7);
      ctx.fillStyle = `rgba(255,60,80,${a.toFixed(3)})`;
      ctx.fillRect(this.wrongFlash.lane * this.laneW, 0, this.laneW, H);
    }

    // 方块
    while (this.drawFrom < c.ticks.length && this.tickYBot(this.drawFrom) > H + 3 * this.ppb) this.drawFrom++;
    for (let i = this.drawFrom; i < c.ticks.length; i++) {
      const tk = c.ticks[i];
      const yBot = this.tickYBot(i);
      const hTile = tk.beats * this.ppb - CONFIG.TILE_GAP;
      if (yBot - hTile > H + 40) { /* 已过屏(淡出中) */ }
      if (yBot < -this.ppb * 0.5) break; // 后面的更高,不必再画
      this.drawTile(i, tk, yBot, hTile, now);
    }

    this.particles.update(Math.min(0.05, (now - (this._pT || now)) / 1000) || 0.016);
    this._pT = now;
    this.particles.draw(ctx);

    // 判定文字浮层
    this.floaters = this.floaters.filter((f) => now - f.t < 650);
    for (const f of this.floaters) {
      const p = (now - f.t) / 650;
      ctx.globalAlpha = 1 - p;
      ctx.fillStyle = f.color;
      ctx.font = '800 20px "Segoe UI", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(f.text, f.x, f.y - p * 46);
      ctx.globalAlpha = 1;
    }

    // 连击
    if (this.combo >= 3) {
      ctx.textAlign = 'center';
      ctx.fillStyle = 'rgba(255,255,255,0.92)';
      ctx.font = '800 44px "Segoe UI", sans-serif';
      ctx.shadowColor = this.theme.accent;
      ctx.shadowBlur = 24;
      ctx.fillText(String(this.combo), W / 2, H * 0.2);
      ctx.shadowBlur = 0;
      ctx.font = '700 15px "Segoe UI", sans-serif';
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.fillText(t('combo.text'), W / 2, H * 0.2 + 24);
    }

    // 圈数横幅
    if (this.banner && now - this.banner.t < 1600) {
      const p = (now - this.banner.t) / 1600;
      ctx.globalAlpha = p < 0.15 ? p / 0.15 : p > 0.75 ? (1 - p) / 0.25 : 1;
      ctx.textAlign = 'center';
      ctx.fillStyle = '#fff';
      ctx.font = '800 40px "Segoe UI", sans-serif';
      ctx.fillText(this.banner.text, W / 2, H * 0.4);
      ctx.font = '700 20px "Segoe UI", sans-serif';
      ctx.fillStyle = '#ffd166';
      ctx.fillText(this.banner.sub, W / 2, H * 0.4 + 34);
      ctx.globalAlpha = 1;
    }
  }

  drawTile(i, tk, yBot, hTile, now) {
    const { ctx } = this;
    const info = this.hitInfo[i];
    const lanesHere = this.lanes[i];
    const isFailTile = this.status === 'failed' && this.wrongFlash?.kind === 'miss' && i === this.expected;

    for (let s = 0; s < lanesHere.length; s++) {
      const lane = lanesHere[s];
      const hitThis = (this.hitMask[i] & (1 << s)) !== 0;
      let alpha = 1;
      if (hitThis && info) {
        const p = (now - info.t) / 260;
        if (p >= 1) continue;
        alpha = 0.45 * (1 - p);
      }
      const x = lane * this.laneW + 3;
      const w = this.laneW - 6;
      const yTop = yBot - hTile;

      ctx.globalAlpha = alpha;
      // 主体
      const grad = ctx.createLinearGradient(0, yTop, 0, yBot);
      if (isFailTile) {
        const pulse = Math.sin(now / 90) * 0.25 + 0.6;
        grad.addColorStop(0, `rgba(255,70,90,${pulse})`);
        grad.addColorStop(1, 'rgba(160,20,40,0.95)');
      } else if (hitThis) {
        grad.addColorStop(0, this.theme.accent);
        grad.addColorStop(1, '#ffffff');
      } else {
        grad.addColorStop(0, '#20222e');
        grad.addColorStop(1, '#07080d');
      }
      ctx.fillStyle = grad;
      this.rr(x, yTop, w, hTile, 7);
      ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,0.10)';
      ctx.lineWidth = 1;
      this.rr(x, yTop, w, hTile, 7);
      ctx.stroke();

      // 长按块:中央轨道 + 进度
      if (tk.type === 'hold' && !hitThis) {
        const cx = x + w / 2;
        ctx.strokeStyle = 'rgba(255,255,255,0.25)';
        ctx.lineWidth = 6;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(cx, yTop + 14);
        ctx.lineTo(cx, yBot - 14);
        ctx.stroke();
      }
      if (tk.type === 'hold') {
        let held = null;
        for (const [, hh] of this.activeHolds) if (hh.idx === i) held = hh;
        if (held) {
          const frac = held.accrued / tk.holdBeats;
          const cx = x + w / 2;
          ctx.strokeStyle = this.theme.accent;
          ctx.lineWidth = 6;
          ctx.lineCap = 'round';
          ctx.globalAlpha = 0.95;
          ctx.beginPath();
          ctx.moveTo(cx, yBot - 14);
          ctx.lineTo(cx, yBot - 14 - (hTile - 28) * frac);
          ctx.stroke();
        }
      }

      // 起始块文字
      if (i === 0 && this.status === 'ready' && !hitThis) {
        ctx.globalAlpha = 1;
        ctx.fillStyle = '#fff';
        ctx.font = '800 17px "Segoe UI", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(t('game.start'), x + w / 2, yBot - hTile / 2 + 6);
      }
      ctx.globalAlpha = 1;
    }
  }

  /** 圆角矩形路径 */
  rr(x, y, w, h, r) {
    const ctx = this.ctx;
    const rr = Math.max(0, Math.min(r, h / 2, w / 2));
    ctx.beginPath();
    ctx.moveTo(x + rr, y);
    ctx.arcTo(x + w, y, x + w, y + h, rr);
    ctx.arcTo(x + w, y + h, x, y + h, rr);
    ctx.arcTo(x, y + h, x, y, rr);
    ctx.arcTo(x, y, x + w, y, rr);
    ctx.closePath();
  }
}
