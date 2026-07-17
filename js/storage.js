// 本地存档(localStorage)。带版本号,后续格式变更可在 load() 里做迁移。

import { CONFIG } from './config.js';

const KEY = 'cadenza.save.v1';

const DEFAULTS = () => ({
  ver: 1,
  songs: {},          // id → {best, stars, crowns, plays}
  exp: 0,
  ach: [],            // 已解锁成就 id
  stats: { plays: 0, taps: 0, perfects: 0, maxCombo: 0, maxLap: 1, playMs: 0, fullCrowns: 0 },
  settings: { volume: 0.9, lang: null, particles: true, revive: true, unlockAll: false },
});

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return DEFAULTS();
    const data = JSON.parse(raw);
    // 深合并默认值,保证新增字段存在
    const d = DEFAULTS();
    return {
      ...d, ...data,
      stats: { ...d.stats, ...(data.stats || {}) },
      settings: { ...d.settings, ...(data.settings || {}) },
      songs: data.songs || {},
      ach: Array.isArray(data.ach) ? data.ach : [],
    };
  } catch {
    return DEFAULTS();
  }
}

export const store = {
  state: load(),

  persist() {
    try { localStorage.setItem(KEY, JSON.stringify(this.state)); } catch { /* 隐私模式等 */ }
  },

  reset() {
    this.state = DEFAULTS();
    this.persist();
  },

  // ── 歌曲成绩 ──
  song(id) {
    return this.state.songs[id] || { best: 0, stars: 0, crowns: 0, plays: 0 };
  },

  /** 记录一局结果,返回 {newBest} */
  recordResult(id, { score, stars, crowns }) {
    const cur = this.song(id);
    const newBest = score > cur.best;
    this.state.songs[id] = {
      best: Math.max(cur.best, score),
      stars: Math.max(cur.stars, stars),
      crowns: Math.max(cur.crowns, crowns),
      plays: cur.plays + 1,
    };
    this.persist();
    return { newBest };
  },

  totalStars() {
    return Object.values(this.state.songs).reduce((s, x) => s + (x.stars || 0), 0);
  },
  totalCrowns() {
    return Object.values(this.state.songs).reduce((s, x) => s + (x.crowns || 0), 0);
  },

  // ── 经验 / 等级:升到 L+1 级需 LEVEL_STEP × L 经验 ──
  addExp(score) {
    this.state.exp += score * CONFIG.EXP_PER_SCORE;
    this.persist();
  },
  levelInfo() {
    let exp = this.state.exp;
    let level = 1;
    while (exp >= CONFIG.LEVEL_STEP * level) {
      exp -= CONFIG.LEVEL_STEP * level;
      level++;
    }
    return { level, cur: exp, need: CONFIG.LEVEL_STEP * level };
  },

  // ── 统计 ──
  bumpStats(patch) {
    const s = this.state.stats;
    for (const [k, v] of Object.entries(patch)) {
      if (k === 'maxCombo' || k === 'maxLap') s[k] = Math.max(s[k] || 0, v);
      else s[k] = (s[k] || 0) + v;
    }
    this.persist();
  },

  // ── 成就 ──
  hasAch(id) { return this.state.ach.includes(id); },
  unlockAch(id) {
    if (this.hasAch(id)) return false;
    this.state.ach.push(id);
    this.persist();
    return true;
  },

  // ── 设置 ──
  setting(k) { return this.state.settings[k]; },
  setSetting(k, v) {
    this.state.settings[k] = v;
    this.persist();
  },
};
