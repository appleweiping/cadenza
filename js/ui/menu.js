// 主菜单:专辑分组的曲目列表 + 顶栏玩家信息。
// 注:所有 innerHTML 插值均来自本仓库内的静态数据(曲名/文案),无用户输入。

import { COLLECTIONS } from '../data/collections.js';
import { SONGS } from '../data/songs/index.js';
import { store } from '../storage.js';
import { i18n, t } from '../i18n.js';

function songCard(song, col, onSelect) {
  const rec = store.song(song.id);
  const el = document.createElement('div');
  el.className = 'song-card';
  const dots = Array.from({ length: 5 }, (_, i) =>
    `<span class="diff-dot${i < song.difficulty ? ' on' : ''}"></span>`).join('');
  const stars = Array.from({ length: 3 }, (_, i) =>
    `<span class="${i < rec.stars ? '' : 'off'}">★</span>`).join('');
  el.innerHTML = `
    <div class="song-info">
      <div class="song-title">${i18n.pick(song.title)}</div>
      <div class="song-composer">${i18n.pick(song.composer)}</div>
      <div class="song-meta"><span class="diff-dots">${dots}</span>${song.pro ? '<span class="pro-badge">PRO</span>' : ''}</div>
    </div>
    <div class="song-right">
      <div class="song-stars">${stars}</div>
      <div class="song-crowns">${rec.crowns > 0 ? '♛'.repeat(rec.crowns) : ''}</div>
      ${rec.best > 0 ? `<div class="song-best">${t('menu.best', { n: rec.best })}</div>` : ''}
    </div>`;
  el.addEventListener('click', () => onSelect(song, col));
  return el;
}

export function renderMenu(onSelect) {
  const root = document.getElementById('collection-list');
  root.innerHTML = '';
  const totalStars = store.totalStars();
  const unlockAll = store.setting('unlockAll');

  for (const col of COLLECTIONS) {
    const songs = SONGS.filter((s) => s.collection === col.id)
      .sort((a, b) => a.difficulty - b.difficulty || i18n.pick(a.title).localeCompare(i18n.pick(b.title)));
    if (songs.length === 0) continue;

    const unlocked = unlockAll || totalStars >= col.unlockStars;
    const sec = document.createElement('section');
    sec.className = 'collection' + (unlocked ? '' : ' locked');
    sec.style.setProperty('--card-accent', col.theme.accent);

    const done = songs.filter((s) => store.song(s.id).crowns > 0).length;
    const head = document.createElement('div');
    head.className = 'collection-head';
    head.innerHTML = `
      <span class="collection-icon">${col.icon}</span>
      <span class="collection-name">${i18n.pick(col.name)}</span>
      ${unlocked
        ? `<span class="collection-progress">${t('menu.songs', { done, total: songs.length })}</span>`
        : `<span class="collection-lock">🔒 ${t('menu.lockNeed', { n: col.unlockStars })}</span>`}`;
    sec.appendChild(head);

    const grid = document.createElement('div');
    grid.className = 'song-grid';
    for (const s of songs) grid.appendChild(songCard(s, col, onSelect));
    sec.appendChild(grid);
    root.appendChild(sec);
  }

  updateHeader();
}

export function updateHeader() {
  const info = store.levelInfo();
  document.getElementById('hud-level').textContent = String(info.level);
  document.getElementById('exp-fill').style.width = `${Math.round((info.cur / info.need) * 100)}%`;
  document.getElementById('total-stars').textContent = String(store.totalStars());
  document.getElementById('total-crowns').textContent = String(store.totalCrowns());
}
