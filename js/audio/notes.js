// 音名 ↔ 频率。科学音高记谱:C4 = 中央 C,A4 = 440Hz。支持升号 # 与降号 b。

export const NOTE_RE = /^([A-G])(#|b)?([0-8])$/;

const SEMITONE = { C: 0, D: 2, E: 4, F: 5, G: 7, A: 9, B: 11 };

/** 'C#4' → MIDI 编号(C4=60);非法音名抛异常 */
export function noteToMidi(name) {
  const m = NOTE_RE.exec(name);
  if (!m) throw new Error(`Invalid note name: "${name}"`);
  let s = SEMITONE[m[1]];
  if (m[2] === '#') s += 1;
  else if (m[2] === 'b') s -= 1;
  return 12 * (Number(m[3]) + 1) + s;
}

/** 'A4' → 440 */
export function noteToFreq(name) {
  return 440 * Math.pow(2, (noteToMidi(name) - 69) / 12);
}

export function isValidNote(name) {
  return NOTE_RE.test(name);
}
