// 谱面 DSL 编译器。把紧凑记谱字符串编译成 tick 数组。
//
// 记法(空白分隔,`|` 小节线仅供人类阅读会被忽略):
//   E5/8        单击块,八分音符
//   A4/2~       长按块,二分音符时值
//   (C4,E4)/4   单击块奏和弦(第一个音为主旋律音)
//   [C4+E4]/4   双押:同一排两个块,各奏一音;任一侧可用逗号写和弦,如 [C3,C4+E4]
//   r/8         休止:时值并入前一个块(方块之间留出空隙)
//   时值:/1 全音符(4拍) /2 /4 /8 /16 /32;附点加 `.`(×1.5);三连音加 `t`(×2/3)
//
// 每个 tick 输出:{ type:'tap'|'hold'|'double', notes:[..], notes2?:[..], beats, holdBeats? }

import { isValidNote } from '../audio/notes.js';

const DUR = { 1: 4, 2: 2, 4: 1, 8: 0.5, 16: 0.25, 32: 0.125 };
const TOKEN_RE = /^(.+?)\/(\d+)(\.?)(t?)(~?)$/;

function parsePitches(body, tok) {
  const list = body.split(',').map((s) => s.trim());
  for (const p of list) {
    if (!isValidNote(p)) throw new Error(`Bad note "${p}" in token "${tok}"`);
  }
  if (list.length === 0) throw new Error(`Empty note group in token "${tok}"`);
  return list;
}

/**
 * @param {string} src 谱面字符串
 * @returns {{ticks: Array, lead: number}} lead = 开头休止拍数
 */
export function parseScore(src) {
  const ticks = [];
  let lead = 0;
  const tokens = src.split(/\s+/).filter((t) => t && t !== '|');

  for (const tok of tokens) {
    const m = TOKEN_RE.exec(tok);
    if (!m) throw new Error(`Bad token "${tok}"`);
    const [, body, den, dot, trip, holdFlag] = m;
    const base = DUR[den];
    if (base === undefined) throw new Error(`Bad duration /${den} in token "${tok}"`);
    let beats = base * (dot ? 1.5 : 1) * (trip ? 2 / 3 : 1);

    if (body === 'r' || body === 'R') {
      if (holdFlag) throw new Error(`Rest cannot hold: "${tok}"`);
      if (ticks.length === 0) lead += beats;
      else ticks[ticks.length - 1].beats += beats;
      continue;
    }

    if (body.startsWith('[') && body.endsWith(']')) {
      // 双押
      if (holdFlag) throw new Error(`Double tile cannot hold: "${tok}"`);
      const sides = body.slice(1, -1).split('+');
      if (sides.length !== 2) throw new Error(`Double tile needs exactly 2 sides: "${tok}"`);
      ticks.push({
        type: 'double',
        notes: parsePitches(sides[0], tok),
        notes2: parsePitches(sides[1], tok),
        beats,
      });
      continue;
    }

    let notes;
    if (body.startsWith('(') && body.endsWith(')')) {
      notes = parsePitches(body.slice(1, -1), tok);
    } else {
      notes = parsePitches(body, tok);
    }

    if (holdFlag) {
      ticks.push({ type: 'hold', notes, beats, holdBeats: beats });
    } else {
      ticks.push({ type: 'tap', notes, beats });
    }
  }

  if (ticks.length === 0) throw new Error('Empty score');
  return { ticks, lead };
}
