// 谱面编译与轨道分配。
// compileChart:DSL → 带起始拍的 tick 序列 + 单圈满分 + 星级阈值。
// assignLanes:按 (songId, lap) 播种的确定性随机分配轨道,保证可玩性约束。

import { parseScore } from './parser.js';
import { seededRng } from '../rng.js';
import { CONFIG } from '../config.js';

/**
 * @param {object} song 歌曲定义(见 data/songs/*.js)
 * @returns 编译结果,供 Game 与校验工具使用
 */
export function compileChart(song) {
  const { ticks, lead } = parseScore(song.score);

  let beat = lead;
  let maxLapScore = 0;
  for (const tk of ticks) {
    tk.startBeat = beat;
    beat += tk.beats;
    if (tk.type === 'double') maxLapScore += CONFIG.SCORE.PERFECT * 2;
    else if (tk.type === 'hold') maxLapScore += CONFIG.SCORE.PERFECT + CONFIG.SCORE.HOLD_PER_BEAT * tk.holdBeats;
    else maxLapScore += CONFIG.SCORE.PERFECT;
  }

  const totalBeats = beat;
  const stars = CONFIG.STAR_FACTORS.map((f) => Math.round(maxLapScore * f));
  const vb = song.vb || CONFIG.VB_BY_DIFF[song.difficulty] || 3.6;

  return { song, ticks, totalBeats, maxLapScore, stars, vb };
}

/**
 * 为某一圈分配轨道。规则:
 *  - 单块/长按:不与上一 tick 的任何轨道重叠(避免原地连点误判);
 *  - 双押:两条互不相同的轨道,且第一条避开上一 tick。
 * 每圈换种子 → 每圈图案不同,但同一 (歌, 圈) 永远一致。
 * @returns {number[][]} 每个 tick 的轨道数组(单块 1 个,双押 2 个)
 */
export function assignLanes(compiled, lap) {
  const rng = seededRng(`${compiled.song.id}#lap${lap}`);
  const L = CONFIG.LANES;
  const lanes = [];
  let prev = [];

  const pick = (exclude) => {
    const options = [];
    for (let i = 0; i < L; i++) if (!exclude.includes(i)) options.push(i);
    return options[Math.floor(rng() * options.length)];
  };

  for (const tk of compiled.ticks) {
    if (tk.type === 'double') {
      const a = pick(prev);
      const b = pick([a]);
      lanes.push([a, b]);
      prev = [a, b];
    } else {
      const a = pick(prev);
      lanes.push([a]);
      prev = [a];
    }
  }
  return lanes;
}
