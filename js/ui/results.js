// 结算屏:分数、星级动画、判定统计。

import { i18n } from '../i18n.js';

export function showResults(res) {
  const $ = (id) => document.getElementById(id);
  $('res-song-title').textContent = i18n.pick(res.song.title);
  $('res-song-composer').textContent = res.song.composer;
  $('res-score').textContent = String(res.score);
  $('res-crowns').textContent = res.crowns > 0 ? '♛'.repeat(res.crowns) : '—';
  $('res-lap').textContent = String(res.lap);
  $('res-combo').textContent = String(res.maxCombo);
  $('res-perfect').textContent = String(res.counts.perfect);
  $('res-great').textContent = String(res.counts.great);
  $('res-good').textContent = String(res.counts.good);
  $('res-newbest').classList.toggle('hidden', !res.newBest);

  // 星级逐颗点亮
  const starEls = document.querySelectorAll('.res-star');
  starEls.forEach((el) => el.classList.remove('lit'));
  for (let i = 0; i < res.stars; i++) {
    setTimeout(() => starEls[i].classList.add('lit'), 350 + i * 320);
  }
}
