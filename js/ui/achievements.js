// 成就系统。check(ctx) 返回 true 即解锁;ctx = { store, songs, collections, last }
// last = 刚结束一局的结果(可为 null,菜单打开时也会全量评估一次)。

import { store } from '../storage.js';
import { i18n, t } from '../i18n.js';

export const ACHIEVEMENTS = [
  { id: 'first-play', icon: '🎹', name: { zh: '初试琴声', en: 'First Notes' }, desc: { zh: '完成第一局演奏', en: 'Finish your first run' },
    check: (c) => c.store.state.stats.plays >= 1 },
  { id: 'first-star', icon: '⭐', name: { zh: '摘星', en: 'Star Catcher' }, desc: { zh: '任意曲目获得 1 星', en: 'Earn a star on any song' },
    check: (c) => c.store.totalStars() >= 1 },
  { id: 'first-crown', icon: '♛', name: { zh: '加冕', en: 'Coronation' }, desc: { zh: '获得第一顶皇冠', en: 'Earn your first crown' },
    check: (c) => c.store.totalCrowns() >= 1 },
  { id: 'triple-crown', icon: '👑', name: { zh: '三冠王', en: 'Triple Crown' }, desc: { zh: '单曲集满 3 顶皇冠', en: 'Get 3 crowns on one song' },
    check: (c) => Object.values(c.store.state.songs).some((s) => s.crowns >= 3) },
  { id: 'stars-10', icon: '✨', name: { zh: '小有名气', en: 'Rising Star' }, desc: { zh: '累计 10 星', en: 'Collect 10 stars' },
    check: (c) => c.store.totalStars() >= 10 },
  { id: 'stars-50', icon: '🌟', name: { zh: '琴房常客', en: 'Concert Regular' }, desc: { zh: '累计 50 星', en: 'Collect 50 stars' },
    check: (c) => c.store.totalStars() >= 50 },
  { id: 'stars-150', icon: '💫', name: { zh: '星光大道', en: 'Walk of Fame' }, desc: { zh: '累计 150 星', en: 'Collect 150 stars' },
    check: (c) => c.store.totalStars() >= 150 },
  { id: 'combo-50', icon: '🔥', name: { zh: '行云流水', en: 'In the Flow' }, desc: { zh: '单局 50 连击', en: '50 combo in one run' },
    check: (c) => c.store.state.stats.maxCombo >= 50 },
  { id: 'combo-100', icon: '⚡', name: { zh: '十指如飞', en: 'Lightning Hands' }, desc: { zh: '单局 100 连击', en: '100 combo in one run' },
    check: (c) => c.store.state.stats.maxCombo >= 100 },
  { id: 'combo-200', icon: '🌪️', name: { zh: '人琴合一', en: 'One With the Piano' }, desc: { zh: '单局 200 连击', en: '200 combo in one run' },
    check: (c) => c.store.state.stats.maxCombo >= 200 },
  { id: 'taps-1k', icon: '👆', name: { zh: '千锤百炼', en: 'Thousand Taps' }, desc: { zh: '累计点击 1,000 次', en: 'Tap 1,000 tiles' },
    check: (c) => c.store.state.stats.taps >= 1000 },
  { id: 'taps-10k', icon: '🖐️', name: { zh: '万次触键', en: 'Ten Thousand' }, desc: { zh: '累计点击 10,000 次', en: 'Tap 10,000 tiles' },
    check: (c) => c.store.state.stats.taps >= 10000 },
  { id: 'taps-100k', icon: '🏔️', name: { zh: '十万雷动', en: 'Hundred Thousand' }, desc: { zh: '累计点击 100,000 次', en: 'Tap 100,000 tiles' },
    check: (c) => c.store.state.stats.taps >= 100000 },
  { id: 'perfect-5k', icon: '🎯', name: { zh: '完美主义', en: 'Perfectionist' }, desc: { zh: '累计 5,000 个 PERFECT', en: '5,000 PERFECTs total' },
    check: (c) => c.store.state.stats.perfects >= 5000 },
  { id: 'lap-5', icon: '🌀', name: { zh: '风驰电掣', en: 'Speed Demon' }, desc: { zh: '单局达到第 5 圈', en: 'Reach lap 5 in one run' },
    check: (c) => c.store.state.stats.maxLap >= 5 },
  { id: 'lap-8', icon: '☄️', name: { zh: '超越极限', en: 'Beyond Limits' }, desc: { zh: '单局达到第 8 圈', en: 'Reach lap 8 in one run' },
    check: (c) => c.store.state.stats.maxLap >= 8 },
  { id: 'songs-20', icon: '📚', name: { zh: '博览群曲', en: 'Well Read' }, desc: { zh: '玩过 20 首不同曲目', en: 'Play 20 different songs' },
    check: (c) => Object.keys(c.store.state.songs).length >= 20 },
  { id: 'songs-60', icon: '🗺️', name: { zh: '环游曲库', en: 'Grand Tour' }, desc: { zh: '玩过 60 首不同曲目', en: 'Play 60 different songs' },
    check: (c) => Object.keys(c.store.state.songs).length >= 60 },
  { id: 'crowns-30', icon: '🏰', name: { zh: '皇冠收藏家', en: 'Crown Collector' }, desc: { zh: '累计 30 顶皇冠', en: 'Collect 30 crowns' },
    check: (c) => c.store.totalCrowns() >= 30 },
  { id: 'album-clear', icon: '💿', name: { zh: '专辑制霸', en: 'Album Master' }, desc: { zh: '一个专辑内所有曲目均获皇冠', en: 'Crown every song in one album' },
    check: (c) => c.collections.some((col) => {
      const songs = c.songs.filter((s) => s.collection === col.id);
      return songs.length > 0 && songs.every((s) => c.store.song(s.id).crowns >= 1);
    }) },
  { id: 'score-5k', icon: '💎', name: { zh: '高分猎手', en: 'Score Hunter' }, desc: { zh: '单局得分 5,000+', en: 'Score 5,000+ in one run' },
    check: (c) => c.last?.score >= 5000 || Object.values(c.store.state.songs).some((s) => s.best >= 5000) },
  { id: 'pro-clear', icon: '🎖️', name: { zh: '职业选手', en: 'Going Pro' }, desc: { zh: '任意 Pro 谱面获得皇冠', en: 'Crown any Pro chart' },
    check: (c) => c.songs.some((s) => s.pro && c.store.song(s.id).crowns >= 1) },
  { id: 'level-10', icon: '🚀', name: { zh: '崭露头角', en: 'Taking Off' }, desc: { zh: '达到 10 级', en: 'Reach level 10' },
    check: (c) => c.store.levelInfo().level >= 10 },
  { id: 'level-25', icon: '🏆', name: { zh: '演奏大师', en: 'Maestro' }, desc: { zh: '达到 25 级', en: 'Reach level 25' },
    check: (c) => c.store.levelInfo().level >= 25 },
];

/** 全量评估,返回本次新解锁的成就列表 */
export function evaluateAchievements(ctx) {
  const fresh = [];
  for (const a of ACHIEVEMENTS) {
    if (store.hasAch(a.id)) continue;
    let ok = false;
    try { ok = a.check(ctx); } catch { ok = false; }
    if (ok && store.unlockAch(a.id)) fresh.push(a);
  }
  return fresh;
}

/** 渲染成就弹窗内容 */
export function renderAchievements() {
  const grid = document.getElementById('ach-grid');
  grid.innerHTML = '';
  for (const a of ACHIEVEMENTS) {
    const got = store.hasAch(a.id);
    const el = document.createElement('div');
    el.className = 'ach-card' + (got ? '' : ' locked');
    el.innerHTML = `
      <div class="ach-icon">${a.icon}</div>
      <div><div class="ach-name">${i18n.pick(a.name)}</div>
      <div class="ach-desc">${i18n.pick(a.desc)}</div></div>
      ${got ? '<div class="ach-done">✔</div>' : ''}`;
    grid.appendChild(el);
  }
}

/** 成就解锁 Toast */
export function toastAchievements(list) {
  const root = document.getElementById('toast-root');
  for (const a of list) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.innerHTML = `<span class="t-icon">${a.icon}</span><span>${t('ach.unlocked')} · <b>${i18n.pick(a.name)}</b></span>`;
    root.appendChild(el);
    setTimeout(() => el.remove(), 4000);
  }
}
