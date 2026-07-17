// 专辑「维也纳古典」:海顿、莫扎特、贝多芬、舒伯特(全部公有领域),作者自制转谱。

export default [
  {
    id: 'ode-to-joy', collection: 'classical-vienna', difficulty: 1, bpm: 116,
    title: { zh: '欢乐颂', en: 'Ode to Joy' }, composer: 'L. v. Beethoven',
    score: `
      E4/4 E4/4 F4/4 G4/4 | G4/4 F4/4 E4/4 D4/4 | C4/4 C4/4 D4/4 E4/4 | E4/4. D4/8 D4/2~
      E4/4 E4/4 F4/4 G4/4 | G4/4 F4/4 E4/4 D4/4 | C4/4 C4/4 D4/4 E4/4 | D4/4. C4/8 C4/2~
      D4/4 D4/4 E4/4 C4/4 | D4/4 E4/8 F4/8 E4/4 C4/4 | D4/4 E4/8 F4/8 E4/4 D4/4 | C4/4 D4/4 G3/2~
      E4/4 E4/4 F4/4 G4/4 | G4/4 F4/4 E4/4 D4/4 | C4/4 C4/4 D4/4 E4/4 | D4/4. C4/8 (C4,C3)/2~
    `,
  },
  {
    id: 'fur-elise', collection: 'classical-vienna', difficulty: 3, bpm: 80, vb: 3.4,
    title: { zh: '致爱丽丝', en: 'Für Elise' }, composer: 'L. v. Beethoven',
    score: `
      E5/16 D#5/16 E5/16 D#5/16 E5/16 B4/16 D5/16 C5/16 A4/8 r/16 C4/16 E4/16 A4/16
      B4/8 r/16 E4/16 G#4/16 B4/16 C5/8 r/16 E4/16
      E5/16 D#5/16 E5/16 D#5/16 E5/16 B4/16 D5/16 C5/16 A4/8 r/16 C4/16 E4/16 A4/16
      B4/8 r/16 E4/16 C5/16 B4/16 A4/4
      B4/16 C5/16 D5/16 E5/8. G4/16 F5/16 E5/16 D5/8. F4/16 E5/16 D5/16 C5/8. E4/16 D5/16 C5/16 B4/8 r/16 E4/16
      E5/16 D#5/16 E5/16 D#5/16 E5/16 B4/16 D5/16 C5/16 A4/8 r/16 C4/16 E4/16 A4/16
      B4/8 r/16 E4/16 G#4/16 B4/16 C5/8 r/16 E4/16
      E5/16 D#5/16 E5/16 D#5/16 E5/16 B4/16 D5/16 C5/16 A4/8 r/16 C4/16 E4/16 A4/16
      B4/8 r/16 E4/16 C5/16 B4/16 (A4,A3)/4~
    `,
  },
  {
    id: 'turkish-march', collection: 'classical-vienna', difficulty: 4, bpm: 116, vb: 3.2,
    title: { zh: '土耳其进行曲', en: 'Rondo alla Turca' }, composer: 'W. A. Mozart',
    score: `
      B4/16 A4/16 G#4/16 A4/16 C5/8 r/8 | D5/16 C5/16 B4/16 C5/16 E5/8 r/8
      F5/16 E5/16 D#5/16 E5/16 B5/16 A5/16 G#5/16 A5/16 B5/16 A5/16 G#5/16 A5/16 C6/4
      A5/8 C6/8 B5/8 A5/8 G#5/8 A5/8
      B4/16 A4/16 G#4/16 A4/16 C5/8 r/8 | D5/16 C5/16 B4/16 C5/16 E5/8 r/8
      F5/16 E5/16 D#5/16 E5/16 B5/16 A5/16 G#5/16 A5/16 B5/16 A5/16 G#5/16 A5/16 C6/4
      C5/16 D5/16 C5/16 B4/16 C5/16 E5/16 D5/16 C5/16 B4/16 C5/16 B4/16 A4/16 G#4/8 E4/8
      A4/8 C5/8 B4/8 A4/8 G#4/8 B4/8 E5/8 D5/8 | C5/8 B4/8 A4/8 G#4/8 A4/4 E4/4
      B4/16 A4/16 G#4/16 A4/16 C5/8 r/8 | D5/16 C5/16 B4/16 C5/16 E5/8 r/8
      F5/16 E5/16 D#5/16 E5/16 B5/16 A5/16 G#5/16 A5/16 B5/16 A5/16 G#5/16 A5/16 C6/4
      A5/8 B5/16 A5/16 G#5/16 A5/16 B5/16 A5/16 G#5/16 A5/16 (A5,A4)/4~
    `,
  },
  {
    id: 'eine-kleine', collection: 'classical-vienna', difficulty: 3, bpm: 120,
    title: { zh: '小夜曲', en: 'Eine kleine Nachtmusik' }, composer: 'W. A. Mozart',
    score: `
      G4/4 r/8 D4/8 G4/4 r/8 D4/8 | G4/8 D4/8 G4/8 B4/8 D5/2
      C5/4 r/8 A4/8 C5/4 r/8 A4/8 | C5/8 A4/8 F#4/8 A4/8 D4/2
      G4/4. B4/16 A4/16 G4/4 G4/8 F#4/8 | F#4/4. A4/16 G4/16 F#4/4 F#4/8 E4/8
      E4/4 A4/4 C5/8 B4/8 A4/8 G4/8 | G4/8 F#4/8 E4/8 F#4/8 (G4,G3)/2~
    `,
  },
  {
    id: 'symphony-40', collection: 'classical-vienna', difficulty: 3, bpm: 108, vb: 3.4,
    title: { zh: '第四十号交响曲', en: 'Symphony No. 40' }, composer: 'W. A. Mozart',
    score: `
      Eb5/8 D5/8 D5/4 Eb5/8 D5/8 D5/4 | Eb5/8 D5/8 D5/8 Bb5/4 Bb5/8
      Bb5/8 A5/8 G5/4 G5/8 F5/8 Eb5/4 | Eb5/8 D5/8 C5/4 C5/8 D5/8 D5/2
      Eb5/8 D5/8 D5/4 Eb5/8 D5/8 D5/4 | Eb5/8 D5/8 D5/8 C6/4 C6/8
      C6/8 Bb5/8 A5/4 A5/8 G5/8 F5/4 | F5/8 Eb5/8 D5/4 D5/8 Eb5/8 Eb5/2
      D5/8 C5/8 C5/2~ D5/8 C5/8 C5/2~ | (C5,C4)/1~
    `,
  },
  {
    id: 'surprise-symphony', collection: 'classical-vienna', difficulty: 2, bpm: 96,
    title: { zh: '惊愕交响曲', en: 'Surprise Symphony' }, composer: 'J. Haydn',
    score: `
      C4/4 C4/4 E4/4 E4/4 | G4/4 G4/4 E4/2 | F4/4 F4/4 D4/4 D4/4 | B3/4 B3/4 G3/2
      C4/4 C4/4 E4/4 E4/4 | G4/4 G4/4 E4/2 | F4/4 F4/4 D4/4 D4/4 | B3/4 B3/4 G3/4 [C4+G5]/1
      C4/8 C4/8 E4/8 E4/8 G4/8 G4/8 E4/4 | F4/8 F4/8 D4/8 D4/8 B3/8 B3/8 G3/4
      C4/8 E4/8 G4/8 C5/8 E5/4 D5/8 C5/8 | B4/8 A4/8 G4/8 F4/8 (E4,C4)/2~
    `,
  },
  {
    id: 'military-march', collection: 'classical-vienna', difficulty: 3, bpm: 112,
    title: { zh: '军队进行曲', en: 'Marche Militaire' }, composer: 'F. Schubert',
    score: `
      G4/4 G4/8. A4/16 G4/8 G4/8 C5/4 | C5/8. D5/16 C5/8 C5/8 E5/4 E5/8 E5/8
      D5/8 E5/8 F5/8 D5/8 C5/4 E5/4 | G4/8. A4/16 G4/8 G4/8 D5/2
      G4/4 G4/8. A4/16 G4/8 G4/8 C5/4 | C5/8. D5/16 C5/8 C5/8 E5/4 E5/8 E5/8
      F5/8 E5/8 D5/8 C5/8 B4/8 D5/8 G4/8 B4/8 | (C5,C4)/2 [G4+C5]/2
    `,
  },
  {
    id: 'moonlight-sonata', collection: 'classical-vienna', difficulty: 2, bpm: 60, vb: 3,
    title: { zh: '月光奏鸣曲', en: 'Moonlight Sonata' }, composer: 'L. v. Beethoven',
    score: `
      G#3/8t C#4/8t E4/8t G#3/8t C#4/8t E4/8t G#3/8t C#4/8t E4/8t G#3/8t C#4/8t E4/8t
      A3/8t C#4/8t E4/8t A3/8t C#4/8t E4/8t A3/8t D4/8t F#4/8t A3/8t D4/8t F#4/8t
      G#4/4. G#4/8 G#4/2~ | G#4/4. G#4/8 G#4/2~
      G#4/4 A4/4 G#4/4 F#4/4 | E4/2~ D#4/2~
      G#3/8t C#4/8t E4/8t G#3/8t C#4/8t E4/8t B3/8t E4/8t G#4/8t B3/8t E4/8t G#4/8t
      C#4/8t E4/8t A4/8t C#4/8t E4/8t A4/8t | (G#4,E4)/1~ (C#4,C#3)/1~
    `,
  },
  {
    id: 'pathetique-2nd', collection: 'classical-vienna', difficulty: 2, bpm: 66,
    title: { zh: '悲怆·第二乐章', en: 'Pathétique, 2nd mvt.' }, composer: 'L. v. Beethoven',
    score: `
      E4/4. F4/8 G4/4 C5/4 | B4/8 A4/8 G4/4 F4/4 E4/8 D4/8 | E4/2 D4/2~
      E4/4. F4/8 G4/4 C5/4 | B4/8 A4/8 G4/4 F4/4 E4/8 D4/8 | D4/4 C4/2.~
      G4/4 A4/8 B4/8 C5/4 E4/4 | F4/4 E4/8 D4/8 E4/2 | D4/8 C4/8 B3/4 C4/4 D4/4
      E4/4. F4/8 G4/4 C5/4 | B4/8 A4/8 G4/4 F4/4 E4/8 D4/8 | D4/4 (C4,C3)/2.~
    `,
  },
  {
    id: 'beethoven-5th', collection: 'classical-vienna', difficulty: 3, bpm: 104,
    title: { zh: '命运交响曲', en: 'Symphony No. 5' }, composer: 'L. v. Beethoven',
    score: `
      G4/8 G4/8 G4/8 Eb4/1~ | F4/8 F4/8 F4/8 D4/1~
      G4/8 G4/8 G4/8 Eb4/4 Ab4/8 Ab4/8 Ab4/8 G4/4 | Eb5/8 Eb5/8 Eb5/8 C5/1~
      G4/8 G4/8 G4/8 Eb4/4 F4/8 F4/8 F4/8 D4/4 | G4/8 G4/8 G4/8 [Eb4+G3]/1
      C5/8 C5/8 C5/8 Ab4/4 G4/8 F4/8 Eb4/8 D4/8 | Eb4/8 F4/8 G4/8 F4/8 (Eb4,C4)/2~
    `,
  },
  {
    id: 'ruins-of-athens', collection: 'classical-vienna', difficulty: 3, bpm: 114,
    title: { zh: '雅典废墟·土耳其进行曲', en: 'Turkish March (Ruins of Athens)' }, composer: 'L. v. Beethoven',
    score: `
      D4/8 D4/8 E4/8 F4/8 F4/8 E4/8 D4/8 C4/8 | Bb3/8 Bb3/8 C4/8 D4/8 D4/8. C4/16 C4/4
      D4/8 D4/8 E4/8 F4/8 F4/8 E4/8 D4/8 C4/8 | Bb3/8 Bb3/8 C4/8 D4/8 C4/8. Bb3/16 Bb3/4
      C4/8 C4/8 D4/8 Bb3/8 C4/8 D4/16 E4/16 D4/8 Bb3/8 | C4/8 D4/16 E4/16 D4/8 C4/8 Bb3/8 C4/8 F3/4
      D4/8 D4/8 E4/8 F4/8 F4/8 E4/8 D4/8 C4/8 | Bb3/8 Bb3/8 C4/8 D4/8 C4/8. Bb3/16 (Bb3,Bb2)/2~
    `,
  },
  {
    id: 'sonata-facile', collection: 'classical-vienna', difficulty: 3, bpm: 108,
    title: { zh: '简易奏鸣曲 K.545', en: 'Sonata Facile K.545' }, composer: 'W. A. Mozart',
    score: `
      C5/2 E5/4 G5/4 | B4/4. C5/8 D5/8 C5/8 C5/2
      A5/2 G5/4 C6/4 | G5/4. F5/8 E5/8 F5/8 E5/2
      A4/16 B4/16 C5/16 D5/16 E5/16 F5/16 G5/16 A5/16 G5/8 E5/8 C5/4
      B4/16 C5/16 D5/16 E5/16 F5/16 G5/16 A5/16 B5/16 A5/8 F5/8 D5/4
      C5/16 D5/16 E5/16 F5/16 G5/16 A5/16 B5/16 C6/16 B5/8 G5/8 E5/4
      D5/8 E5/8 D5/8 C5/8 (C5,E4)/2~
    `,
  },
  {
    id: 'papageno', collection: 'classical-vienna', difficulty: 2, bpm: 108,
    title: { zh: '魔笛·捕鸟人之歌', en: "Papageno's Song" }, composer: 'W. A. Mozart',
    score: `
      G4/4 B4/8 B4/8 A4/4 G4/8 A4/8 | B4/4 C5/8 B4/8 A4/4 G4/4
      D4/8 G4/8 B4/8 D5/8 B4/8 G4/8 A4/4 | D4/8 F#4/8 A4/8 C5/8 A4/8 F#4/8 G4/4
      G4/8 A4/8 B4/8 C5/8 D5/2 | G4/8 A4/8 B4/8 C5/8 D5/2
      D5/8 C5/8 B4/8 A4/8 G4/4 B4/4 | A4/8 G4/8 F#4/8 A4/8 (G4,G3)/2~
    `,
  },
  {
    id: 'twinkle-var-k265', collection: 'classical-vienna', difficulty: 3, bpm: 100, vb: 3.4,
    title: { zh: '小星星变奏曲 K.265', en: 'Twinkle Variations K.265' }, composer: 'W. A. Mozart',
    score: `
      C4/16 B3/16 C4/16 D4/16 C4/8 C5/8 G4/16 F#4/16 G4/16 A4/16 G4/8 G4/8
      A4/16 G#4/16 A4/16 B4/16 A4/8 A4/8 G4/4 G4/8 F4/8
      F4/16 E4/16 F4/16 G4/16 F4/8 F4/8 E4/16 D4/16 E4/16 F4/16 E4/8 E4/8
      D4/16 C#4/16 D4/16 E4/16 D4/8 D4/8 C4/4 C4/8 r/8
      G4/16 F4/16 G4/16 A4/16 G4/8 G4/8 F4/16 E4/16 F4/16 G4/16 F4/8 F4/8
      E4/16 D4/16 E4/16 F4/16 E4/8 E4/8 D4/16 C4/16 D4/16 E4/16 D4/8 D4/8
      C4/16 D4/16 E4/16 F4/16 G4/16 A4/16 B4/16 C5/16 (C5,C4)/2~
    `,
  },
];
