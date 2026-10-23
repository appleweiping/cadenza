// 应用入口:屏幕路由、弹窗管理、模块装配。

import { store } from './storage.js';
import { i18n } from './i18n.js';
import { audio } from './audio/engine.js';
import { playClick } from './audio/piano.js';
import { Game } from './game/game.js';
import { renderMenu, updateHeader } from './ui/menu.js';
import { showResults } from './ui/results.js';
import { initSettings, syncSettings } from './ui/settings.js';
import { renderStats } from './ui/stats.js';
import { evaluateAchievements, renderAchievements, toastAchievements } from './ui/achievements.js';
import { COLLECTIONS, collectionById } from './data/collections.js';
import { SONGS } from './data/songs/index.js';

const $ = (id) => document.getElementById(id);
const achCtx = (last = null) => ({ store, songs: SONGS, collections: COLLECTIONS, last });

// ── 屏幕路由 ──
function showScreen(name) {
  for (const s of document.querySelectorAll('.screen')) s.classList.add('hidden');
  $(`screen-${name}`).classList.remove('hidden');
}

// ── 弹窗 ──
function openModal(id) {
  playClick();
  $('modal-root').classList.remove('hidden');
  for (const m of document.querySelectorAll('.modal')) m.classList.add('hidden');
  $(id).classList.remove('hidden');
}
function closeModals() {
  $('modal-root').classList.add('hidden');
}

// ── 游戏装配 ──
let lastPlayed = null; // {song, theme}

const game = new Game($('game-canvas'), {
  onFinish(res) {
    showScreen('results');
    showResults(res);
    const fresh = evaluateAchievements(achCtx(res));
    toastAchievements(fresh);
  },
});

function startSong(song, col) {
  lastPlayed = { song, theme: col.theme };
  audio.ensure();
  showScreen('game');
  // 等屏幕可见后再初始化(canvas 需要有尺寸)
  requestAnimationFrame(() => game.start(song, col.theme));
}

function backToMenu() {
  renderMenu(startSong);
  showScreen('menu');
}

// ── 结算屏按钮 ──
$('btn-again').addEventListener('click', () => {
  if (!lastPlayed) return backToMenu();
  showScreen('game');
  requestAnimationFrame(() => game.start(lastPlayed.song, lastPlayed.theme));
});
$('btn-back').addEventListener('click', backToMenu);

// ── 顶栏按钮 ──
$('btn-open-settings').addEventListener('click', () => { syncSettings(); openModal('modal-settings'); });
$('btn-open-ach').addEventListener('click', () => {
  evaluateAchievements(achCtx());
  renderAchievements();
  openModal('modal-achievements');
});
$('btn-open-stats').addEventListener('click', () => { renderStats(); openModal('modal-stats'); });
$('btn-lang').addEventListener('click', () => {
  playClick();
  i18n.setLang(i18n.lang === 'zh' ? 'en' : 'zh');
  renderMenu(startSong);
});

for (const btn of document.querySelectorAll('.modal-close')) {
  btn.addEventListener('click', closeModals);
}
$('modal-root').addEventListener('click', (e) => {
  if (e.target === $('modal-root')) closeModals();
});

// ── 设置 ──
initSettings({
  onLangChange() {
    renderMenu(startSong);
  },
  onUnlockChange() {
    renderMenu(startSong);
  },
  onResetConfirm(msg) {
    $('confirm-msg').textContent = msg;
    openModal('modal-confirm');
  },
});
$('btn-confirm-yes').addEventListener('click', () => {
  store.reset();
  audio.setVolume(store.setting('volume'));
  closeModals();
  renderMenu(startSong);
});
$('btn-confirm-no').addEventListener('click', closeModals);

// ── 启动 ──
audio.setVolume(store.setting('volume'));
document.documentElement.lang = i18n.lang === 'zh' ? 'zh-CN' : 'en';
i18n.apply();
renderMenu(startSong);
// 浏览器要求用户手势后才能出声:首次任意按下时解锁
document.addEventListener('pointerdown', () => audio.ensure(), { once: true });

// 调试/自动化句柄(不影响正常游玩)
window.__cadenza = { game, store, SONGS, COLLECTIONS, startSong, backToMenu };
