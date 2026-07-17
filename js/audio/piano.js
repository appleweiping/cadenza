// 合成钢琴音色(无采样,零版权风险)。
// 每个音 = 基频 + 微失谐副音 + 2/3 次谐波,指数衰减包络 + 随时间闭合的低通滤波,
// 近似真实钢琴「明亮起音 → 谐波迅速衰减」的听感。低音衰减慢、高音衰减快。

import { audio } from './engine.js';
import { noteToFreq, noteToMidi } from './notes.js';

// [频率倍数, 相对增益, 波形]
const PARTIALS = [
  [1.0, 1.0, 'sine'],
  [1.0035, 0.24, 'sine'],   // 微失谐 → 琴弦合唱感
  [2.001, 0.34, 'sine'],
  [2.999, 0.14, 'sine'],
  [4.01, 0.06, 'sine'],
];

function buildVoice(freq, when, vel) {
  const ctx = audio.ensure();
  const out = audio.out();

  const noteGain = ctx.createGain();
  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.Q.value = 0.6;
  filter.frequency.setValueAtTime(Math.min(freq * 8, 11000), when);
  filter.frequency.exponentialRampToValueAtTime(Math.max(freq * 1.6, 320), when + 1.1);

  noteGain.connect(filter);
  filter.connect(out);

  const oscs = PARTIALS.map(([mult, g, type]) => {
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.value = freq * mult;
    const og = ctx.createGain();
    og.gain.value = g * vel;
    o.connect(og);
    og.connect(noteGain);
    o.start(when);
    return o;
  });

  return { ctx, noteGain, filter, oscs };
}

function stopVoice(v, at) {
  for (const o of v.oscs) {
    try { o.stop(at); } catch { /* already stopped */ }
  }
  // onended 时断开,避免节点泄漏
  v.oscs[0].onended = () => { try { v.noteGain.disconnect(); v.filter.disconnect(); } catch { } };
}

/**
 * 弹奏单音。
 * @param {string} name  音名,如 'C#4'
 * @param {object} opts  {vel: 力度 0~1, dur: 持续秒, when: 相对当前的延迟秒}
 */
export function playNote(name, { vel = 1, dur = 0.9, when = 0 } = {}) {
  const ctx = audio.ensure();
  const t = ctx.currentTime + when;
  const freq = noteToFreq(name);
  // 低音余韵长、高音短
  const midi = noteToMidi(name);
  const decay = Math.min(Math.max(dur, 0.35), 3.2) * (midi < 48 ? 1.35 : midi > 72 ? 0.85 : 1);
  const v = buildVoice(freq, t, 1);

  const peak = 0.32 * vel;
  const g = v.noteGain.gain;
  g.setValueAtTime(0.0001, t);
  g.exponentialRampToValueAtTime(peak, t + 0.006);
  g.exponentialRampToValueAtTime(peak * 0.28, t + Math.min(decay * 0.55, 0.7));
  g.exponentialRampToValueAtTime(0.0001, t + decay);
  stopVoice(v, t + decay + 0.05);
}

/** 和弦:主音全力度,其余音稍弱,带 4ms 琶音让声部清晰 */
export function playChord(names, opts = {}) {
  names.forEach((n, i) => {
    playNote(n, { ...opts, vel: (opts.vel ?? 1) * (i === 0 ? 1 : 0.62), when: (opts.when ?? 0) + i * 0.004 });
  });
}

/**
 * 长按持续音:起音后维持,release() 时自然衰减。
 * 返回 { release() }。
 */
export function startSustain(name, { vel = 1 } = {}) {
  const ctx = audio.ensure();
  const t = ctx.currentTime;
  const freq = noteToFreq(name);
  const v = buildVoice(freq, t, 1);

  const peak = 0.30 * vel;
  const sustainLevel = peak * 0.42;
  const g = v.noteGain.gain;
  g.setValueAtTime(0.0001, t);
  g.exponentialRampToValueAtTime(peak, t + 0.006);
  g.exponentialRampToValueAtTime(sustainLevel, t + 0.5);
  // 长按时滤波保持较亮
  v.filter.frequency.cancelScheduledValues(t);
  v.filter.frequency.setValueAtTime(Math.min(freq * 8, 11000), t);
  v.filter.frequency.exponentialRampToValueAtTime(Math.max(freq * 2.4, 500), t + 1.4);

  let released = false;
  return {
    release() {
      if (released) return;
      released = true;
      const now = ctx.currentTime;
      g.cancelScheduledValues(now);
      g.setValueAtTime(Math.max(g.value, 0.0001), now);
      g.exponentialRampToValueAtTime(0.0001, now + 0.35);
      stopVoice(v, now + 0.4);
    },
  };
}

/** 点空 / 失误音:低频不和谐嗡声 */
export function playWrong() {
  const ctx = audio.ensure();
  const t = ctx.currentTime;
  const out = audio.out();
  const g = ctx.createGain();
  const f = ctx.createBiquadFilter();
  f.type = 'lowpass';
  f.frequency.value = 420;
  g.connect(f); f.connect(out);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.34, t + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.5);
  for (const freq of [110, 116.5]) {   // 小二度拍频 → 刺耳
    const o = ctx.createOscillator();
    o.type = 'square';
    o.frequency.value = freq;
    o.connect(g);
    o.start(t);
    o.stop(t + 0.55);
  }
}

/** UI 轻点音 */
export function playClick() {
  const ctx = audio.ensure();
  const t = ctx.currentTime;
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = 'sine';
  o.frequency.setValueAtTime(1250, t);
  o.frequency.exponentialRampToValueAtTime(700, t + 0.07);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(0.12, t + 0.005);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);
  o.connect(g); g.connect(audio.out());
  o.start(t); o.stop(t + 0.1);
}
