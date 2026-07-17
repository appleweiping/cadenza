#!/usr/bin/env node
// 谱面校验工具(CI 也跑这个)。
// 用法:node tools/validate-charts.mjs
// 校验:元数据完整、DSL 可编译、tick 数下限、时值合理、双押占比、id 唯一、专辑引用有效。

import { SONGS } from '../js/data/songs/index.js';
import { COLLECTIONS } from '../js/data/collections.js';
import { compileChart } from '../js/chart/chart.js';

const errors = [];
const warnings = [];
const ids = new Set();
const colIds = new Set(COLLECTIONS.map((c) => c.id));

for (const song of SONGS) {
  const tag = `[${song.id ?? '???'}]`;
  const err = (m) => errors.push(`${tag} ${m}`);
  const warn = (m) => warnings.push(`${tag} ${m}`);

  if (!song.id || !/^[a-z0-9-]+$/.test(song.id)) err('id 缺失或不合规(小写连字符)');
  if (ids.has(song.id)) err('id 重复');
  ids.add(song.id);
  if (!song.title?.zh || !song.title?.en) err('缺少双语标题');
  if (!song.composer) err('缺少作曲家');
  if (!(song.bpm >= 40 && song.bpm <= 220)) err(`bpm 异常: ${song.bpm}`);
  if (!(song.difficulty >= 1 && song.difficulty <= 5)) err(`难度异常: ${song.difficulty}`);
  if (!colIds.has(song.collection)) err(`专辑不存在: ${song.collection}`);
  if (song.vb !== undefined && !(song.vb >= 2 && song.vb <= 6)) err(`vb 异常: ${song.vb}`);

  let compiled;
  try {
    compiled = compileChart(song);
  } catch (e) {
    err(`谱面编译失败: ${e.message}`);
    continue;
  }

  const n = compiled.ticks.length;
  if (n < 20) err(`tick 太少 (${n}),不足以成曲`);
  if (compiled.totalBeats < 12) err(`总拍数太少 (${compiled.totalBeats})`);

  let doubles = 0;
  for (const tk of compiled.ticks) {
    if (tk.beats <= 0) err('存在非正时值 tick');
    if (tk.beats > 6.5) warn(`存在超长 tick (${tk.beats} 拍)`);
    if (tk.type === 'double') doubles++;
    if (tk.type === 'hold' && tk.holdBeats < 0.75) warn(`过短的长按 (${tk.holdBeats} 拍)`);
  }
  if (doubles / n > 0.5 && song.id !== 'chopsticks') warn(`双押占比过高 (${Math.round((doubles / n) * 100)}%)`);

  // 秒级时长(第一圈):太短不成曲
  const secs = (compiled.totalBeats * 60) / song.bpm;
  if (secs < 15) err(`第一圈仅 ${secs.toFixed(1)}s,太短`);
  if (secs > 150) warn(`第一圈长达 ${secs.toFixed(1)}s`);
}

// ── 统计 ──
const byCol = {};
const byDiff = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
let totalTicks = 0;
for (const s of SONGS) {
  byCol[s.collection] = (byCol[s.collection] || 0) + 1;
  byDiff[s.difficulty] = (byDiff[s.difficulty] || 0) + 1;
  try { totalTicks += compileChart(s).ticks.length; } catch { /* 已在上面报错 */ }
}

console.log('════════ Cadenza 曲库校验 ════════');
console.log(`曲目总数: ${SONGS.length}   方块总数: ${totalTicks}`);
console.log('难度分布:', Object.entries(byDiff).map(([d, c]) => `${'★'.repeat(+d)}=${c}`).join('  '));
console.log('专辑分布:');
for (const c of COLLECTIONS) {
  if (byCol[c.id]) console.log(`  ${c.id.padEnd(18)} ${byCol[c.id]} 首`);
}
if (warnings.length) {
  console.log(`\n⚠ 警告 ${warnings.length} 条:`);
  for (const w of warnings) console.log('  ' + w);
}
if (errors.length) {
  console.error(`\n✘ 错误 ${errors.length} 条:`);
  for (const e of errors) console.error('  ' + e);
  process.exit(1);
}
console.log('\n✔ 校验通过');
