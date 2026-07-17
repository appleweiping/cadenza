// 专辑「巴洛克」:巴赫、亨德尔、维瓦尔第、帕赫贝尔等(公有领域),作者自制转谱/改编。

export default [
  {
    id: 'canon-in-d', collection: 'baroque', difficulty: 3, bpm: 96,
    title: { zh: '卡农', en: 'Canon in D' }, composer: 'J. Pachelbel',
    score: `
      (F#5,D4)/4 E5/4 (D5,B3)/4 C#5/4 | (B4,G3)/4 A4/4 (B4,G3)/4 C#5/4
      (D5,D4)/4 C#5/4 (B4,B3)/4 A4/4 | (G4,G3)/4 F#4/4 (G4,G3)/4 E4/4
      D4/8 F#4/8 A4/8 G4/8 F#4/8 D4/8 F#4/8 E4/8 | D4/8 B3/8 D4/8 A4/8 G4/8 B4/8 A4/8 G4/8
      F#4/8 D4/8 E4/8 C#5/8 D5/8 F#5/8 A5/8 A4/8 | B4/8 G4/8 A4/8 F#4/8 D5/8 D5/16 C#5/16 D5/4
      D5/16 C#5/16 B4/16 C#5/16 D5/16 E5/16 F#5/16 G5/16 A5/8 F#5/8 D5/4
      G5/16 F#5/16 E5/16 F#5/16 G5/16 A5/16 B5/16 G5/16 F#5/8 D5/8 (D5,D4)/2~
    `,
  },
  {
    id: 'minuet-in-g', collection: 'baroque', difficulty: 2, bpm: 116,
    title: { zh: 'G大调小步舞曲', en: 'Minuet in G' }, composer: 'C. Petzold',
    score: `
      D5/4 G4/8 A4/8 B4/8 C5/8 | D5/4 G4/4 G4/4 | E5/4 C5/8 D5/8 E5/8 F#5/8 | G5/4 G4/4 G4/4
      C5/4 D5/8 C5/8 B4/8 A4/8 | B4/4 C5/8 B4/8 A4/8 G4/8 | F#4/4 G4/8 A4/8 B4/8 G4/8 | B4/4 A4/2
      D5/4 G4/8 A4/8 B4/8 C5/8 | D5/4 G4/4 G4/4 | E5/4 C5/8 D5/8 E5/8 F#5/8 | G5/4 G4/4 G4/4
      C5/4 D5/8 C5/8 B4/8 A4/8 | B4/4 C5/8 B4/8 A4/8 G4/8 | A4/4 B4/8 A4/8 G4/8 F#4/8 | (G4,G3)/2.~
    `,
  },
  {
    id: 'bourree-bach', collection: 'baroque', difficulty: 3, bpm: 108,
    title: { zh: 'E小调布列舞曲', en: 'Bourrée in E minor' }, composer: 'J. S. Bach',
    score: `
      E4/8 F#4/8 G4/4 F#4/8 E4/8 | D#4/4 E4/8 F#4/8 B3/4 F#4/8 G4/8
      A4/4 G4/8 F#4/8 G4/4 F#4/8 E4/8 | F#4/4 E4/8 D4/8 E4/2
      E4/8 F#4/8 G4/4 F#4/8 E4/8 | D#4/4 E4/8 F#4/8 B3/4 F#4/8 G4/8
      A4/4 G4/8 F#4/8 G4/4 F#4/8 E4/8 | D#4/4 F#4/8 D#4/8 (E4,E3)/2~
      B4/8 C5/8 D5/4 C5/8 B4/8 | A4/4 B4/8 C5/8 F#4/4 C5/8 B4/8
      A4/4 B4/8 A4/8 G4/4 F#4/8 E4/8 | F#4/4 D#4/8 F#4/8 (E4,B3)/2~
    `,
  },
  {
    id: 'prelude-in-c', collection: 'baroque', difficulty: 3, bpm: 72, vb: 3.2,
    title: { zh: 'C大调前奏曲', en: 'Prelude in C' }, composer: 'J. S. Bach',
    score: `
      C4/16 E4/16 G4/16 C5/16 E5/16 G4/16 C5/16 E5/16 C4/16 E4/16 G4/16 C5/16 E5/16 G4/16 C5/16 E5/16
      C4/16 D4/16 A4/16 D5/16 F5/16 A4/16 D5/16 F5/16 C4/16 D4/16 A4/16 D5/16 F5/16 A4/16 D5/16 F5/16
      B3/16 D4/16 G4/16 D5/16 F5/16 G4/16 D5/16 F5/16 B3/16 D4/16 G4/16 D5/16 F5/16 G4/16 D5/16 F5/16
      C4/16 E4/16 G4/16 C5/16 E5/16 G4/16 C5/16 E5/16 C4/16 E4/16 G4/16 C5/16 E5/16 G4/16 C5/16 E5/16
      A3/16 C4/16 E4/16 A4/16 C5/16 E4/16 A4/16 C5/16 D3/16 A3/16 D4/16 F#4/16 C5/16 D4/16 F#4/16 C5/16
      G3/16 B3/16 D4/16 G4/16 B4/16 D4/16 G4/16 B4/16 (C4,C3)/1~
    `,
  },
  {
    id: 'air-on-g', collection: 'baroque', difficulty: 2, bpm: 60, vb: 3.4,
    title: { zh: 'G弦上的咏叹调', en: 'Air on the G String' }, composer: 'J. S. Bach',
    score: `
      F#5/2~ D5/4. E5/16 F#5/16 | B4/2~ B4/4 r/4
      G5/2~ E5/4. F#5/16 G5/16 | C#5/2~ C#5/4 r/4
      D5/8 C#5/8 B4/8 A#4/8 B4/4 G5/4 | E5/8 D5/8 C#5/8 B4/8 A4/2
      D5/4 G4/8 A4/8 B4/8 C#5/8 D5/8 E5/8 | F#5/4 A4/4 (D5,D4)/2~
    `,
  },
  {
    id: 'badinerie', collection: 'baroque', difficulty: 4, bpm: 104, vb: 3.2,
    title: { zh: '嬉游曲', en: 'Badinerie' }, composer: 'J. S. Bach',
    score: `
      B4/8 A#4/16 B4/16 D5/8 B4/8 F#4/8 B4/8 F#5/8 D5/8
      B4/8 A#4/16 B4/16 D5/8 B4/8 F#4/8 D4/8 B3/4
      C#5/8 B4/16 C#5/16 E5/8 C#5/8 A4/8 C#5/8 A5/8 E5/8
      C#5/8 B4/16 C#5/16 E5/8 C#5/8 A4/8 E4/8 C#4/4
      B4/16 C#5/16 D5/16 E5/16 F#5/16 G5/16 F#5/16 E5/16 D5/16 E5/16 F#5/16 D5/16 B4/8 F#4/8
      G4/16 A4/16 B4/16 C#5/16 D5/16 E5/16 D5/16 C#5/16 B4/16 C#5/16 D5/16 B4/16 F#4/8 D4/8
      B3/16 C#4/16 D4/16 E4/16 F#4/16 G4/16 A#4/16 B4/16 C#5/8 A#4/8 (B4,B3)/2~
    `,
  },
  {
    id: 'jesu-joy', collection: 'baroque', difficulty: 3, bpm: 88,
    title: { zh: '耶稣,世人仰望的喜悦', en: "Jesu, Joy of Man's Desiring" }, composer: 'J. S. Bach',
    score: `
      G4/8t A4/8t B4/8t D5/8t C5/8t C5/8t E5/8t D5/8t D5/8t G5/8t F#5/8t G5/8t
      D5/8t B4/8t G4/8t A4/8t B4/8t C5/8t D5/8t E5/8t D5/8t C5/8t B4/8t A4/8t
      B4/8t G4/8t A4/8t B4/8t G4/8t F#4/8t G4/8t A4/8t F#4/8t G4/4.~
      G4/8t A4/8t B4/8t D5/8t C5/8t C5/8t E5/8t D5/8t D5/8t G5/8t F#5/8t G5/8t
      D5/8t B4/8t G4/8t A4/8t B4/8t C5/8t D5/8t E5/8t D5/8t C5/8t B4/8t A4/8t
      B4/8t G4/8t A4/8t B4/8t D4/8t F#4/8t A4/8t C5/8t F#4/8t (G4,G3)/4.~
    `,
  },
  {
    id: 'toccata-dm', collection: 'baroque', difficulty: 3, bpm: 76, vb: 3.6,
    title: { zh: 'D小调托卡塔', en: 'Toccata in D minor' }, composer: 'J. S. Bach',
    score: `
      A5/16 G5/16 A5/2~ r/8 G5/16 F5/16 E5/16 D5/16 C#5/8 D5/2~
      A4/16 G4/16 A4/2~ r/8 E4/8 F4/8 C#4/8 D4/2~
      A3/16 G3/16 A3/2~ r/8 G3/16 F3/16 E3/16 D3/16 C#3/8 D3/2~
      D4/16 E4/16 F4/16 G4/16 A4/16 Bb4/16 C#5/16 D5/16 E5/16 F5/16 E5/16 D5/16 C#5/8 A4/8
      D5/16 C#5/16 D5/16 E5/16 F5/16 E5/16 F5/16 G5/16 A5/8 [D5+F5]/4 [C#5+E5]/4 (D5,D4,A3)/1~
    `,
  },
  {
    id: 'spring-vivaldi', collection: 'baroque', difficulty: 3, bpm: 100,
    title: { zh: '四季·春', en: 'Spring (La Primavera)' }, composer: 'A. Vivaldi',
    score: `
      E5/8 G#5/8 G#5/8 G#5/8 F#5/8 E5/8 B5/4~ B5/8 A5/8 G#5/8 F#5/8 E5/4
      E5/8 G#5/8 G#5/8 G#5/8 F#5/8 E5/8 B5/4~ B5/8 A5/8 G#5/8 F#5/8 E5/4
      B5/8 C#6/16 B5/16 A5/8 G#5/8 A5/8 B5/8 G#5/4 | B5/8 C#6/16 B5/16 A5/8 G#5/8 F#5/8 G#5/8 E5/4
      E5/16 F#5/16 G#5/16 A5/16 B5/8 B5/8 A5/8 G#5/8 F#5/8 E5/8 | (E5,E4,B3)/2~
    `,
  },
  {
    id: 'solfeggietto', collection: 'baroque', difficulty: 5, bpm: 112, vb: 3,
    title: { zh: '快速练习曲', en: 'Solfeggietto' }, composer: 'C. P. E. Bach',
    score: `
      C4/16 Eb4/16 D4/16 C4/16 G4/16 C5/16 Eb5/16 D5/16 C5/16 G4/16 C5/16 Eb4/16 D4/16 C4/16 B3/16 D4/16
      G3/16 B3/16 D4/16 F4/16 Eb4/16 D4/16 C4/16 B3/16 C4/16 G4/16 Eb4/16 C4/16 G3/8 r/8
      Ab4/16 G4/16 F4/16 Eb4/16 D4/16 C4/16 B3/16 C4/16 F4/16 Eb4/16 D4/16 C4/16 B3/16 A3/16 G3/16 B3/16
      C4/16 Eb4/16 G4/16 C5/16 Eb5/16 D5/16 C5/16 B4/16 C5/16 G4/16 Eb4/16 C4/16 D4/8 B3/8
      C4/16 Eb4/16 D4/16 C4/16 G4/16 C5/16 Eb5/16 D5/16 C5/16 G4/16 C5/16 Eb4/16 D4/16 C4/16 B3/16 D4/16
      G3/16 B3/16 D4/16 F4/16 Eb4/16 D4/16 C4/16 B3/16 C4/16 G4/16 Eb4/16 C4/16 G3/8 r/8
      Ab4/16 G4/16 F4/16 Eb4/16 D4/16 C4/16 B3/16 C4/16 F4/16 Eb4/16 D4/16 C4/16 B3/16 A3/16 G3/16 B3/16
      C4/16 Eb4/16 G4/16 C5/16 Eb5/16 D5/16 C5/16 B4/16 C5/16 G4/16 Eb4/16 C4/16 D4/8 B3/8
      C4/16 G3/16 Eb3/16 G3/16 C4/16 Eb4/16 G4/16 C5/16 (C5,Eb5)/4 [C4+G4]/4 (C4,C3)/2~
    `,
  },
  {
    id: 'sarabande-handel', collection: 'baroque', difficulty: 2, bpm: 66,
    title: { zh: '萨拉班德舞曲', en: 'Sarabande' }, composer: 'G. F. Handel',
    score: `
      (A4,D4,D3)/2 (A4,E4)/4 | (Bb4,D4,Bb2)/2 (A4,C#4,A2)/4 | (F4,D4)/2 (G4,Bb3)/4 | (A4,C#4,A2)/2.~
      (D5,D4)/2 (C5,A3)/4 | (Bb4,G3)/2 (A4,F3)/4 | (G4,Bb3)/4 (F4,D4)/4 (E4,C#4)/4 | (D4,D3)/2.~
      D5/4 C#5/8 D5/8 E5/4 | F5/4 E5/8 D5/8 C#5/4 | Bb4/4 A4/8 G4/8 A4/4 | (A4,C#4,A2)/2.~
      (A4,D4,D3)/2 (Bb4,G3)/4 | (A4,F3)/4 (G4,E3)/4 (F4,D3)/4 | (E4,A2)/2 (C#4,A2)/4 | (D4,D3,D2)/2.~
    `,
  },
  {
    id: 'hallelujah-handel', collection: 'baroque', difficulty: 3, bpm: 100,
    title: { zh: '哈利路亚', en: 'Hallelujah Chorus' }, composer: 'G. F. Handel',
    score: `
      D5/8. D5/16 D5/8 D5/8 r/8 D5/16 D5/16 E5/8 D5/8 r/4
      D5/8. D5/16 D5/8 D5/8 r/8 D5/16 D5/16 E5/8 D5/8 r/4
      A5/8. A5/16 A5/8 A5/8 r/8 B5/16 A5/16 G5/8 A5/8 r/4
      F#5/8 G5/8 A5/8 A5/8 G5/8 F#5/8 E5/8 D5/8
      (D5,F#4)/2~ (E5,G4)/2~ | (F#5,A4)/2~ [D5+A4]/4 [E5+G4]/4 | (D5,F#4,D4)/1~
    `,
  },
];
