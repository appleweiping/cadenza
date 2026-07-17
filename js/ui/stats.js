// 统计弹窗。

import { store } from '../storage.js';
import { t } from '../i18n.js';
import { SONGS } from '../data/songs/index.js';

export function renderStats() {
  const s = store.state.stats;
  const fullCrowns = Object.values(store.state.songs).filter((x) => x.crowns >= 3).length;
  const rows = [
    ['stats.level', `Lv.${store.levelInfo().level}`],
    ['stats.plays', s.plays],
    ['stats.taps', s.taps],
    ['stats.perfects', s.perfects],
    ['stats.maxCombo', s.maxCombo],
    ['stats.maxLap', s.maxLap],
    ['stats.playTime', t('unit.minutes', { n: Math.round(s.playMs / 60000) })],
    ['stats.songsPlayed', Object.keys(store.state.songs).length],
    ['stats.totalSongs', SONGS.length],
    ['stats.fullCrowns', fullCrowns],
  ];
  const root = document.getElementById('stats-list');
  root.innerHTML = '';
  for (const [key, val] of rows) {
    const el = document.createElement('div');
    el.className = 'res-row';
    const label = document.createElement('span');
    label.textContent = t(key);
    const b = document.createElement('b');
    b.textContent = String(val);
    el.append(label, b);
    root.appendChild(el);
  }
}
