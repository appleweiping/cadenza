// 专辑「芭蕾与歌剧」:柴可夫斯基、比才、威尔第、瓦格纳、奥芬巴赫等(公有领域),作者自制转谱/改编。

export default [
  {
    id: 'swan-lake', collection: 'ballet-opera', difficulty: 2, bpm: 76,
    title: { zh: '天鹅湖', en: 'Swan Lake Theme' }, composer: 'P. I. Tchaikovsky',
    score: `
      E5/2.~ A4/8 B4/8 | C5/8 D5/8 E5/4. F5/8 | E5/4 C5/4 A4/2~
      E5/2.~ A4/8 B4/8 | C5/8 D5/8 E5/4. F5/8 | E5/4 C5/4 A4/2~
      F5/4. E5/8 D5/4. C5/8 | B4/4 E5/4 E4/2 | F4/4. G4/8 A4/4 B4/4 | C5/4 D5/4 E5/2
      F5/4. E5/8 D5/4. C5/8 | B4/4 E5/4 E4/2 | A4/8 B4/8 C5/8 D5/8 E5/4 B4/4 | (A4,E4,A3)/1~
    `,
  },
  {
    id: 'sugar-plum', collection: 'ballet-opera', difficulty: 3, bpm: 100,
    title: { zh: '糖梅仙子之舞', en: 'Dance of the Sugar Plum Fairy' }, composer: 'P. I. Tchaikovsky',
    score: `
      E5/8 r/8 G5/16 F#5/16 E5/8 r/8 B4/8 r/8 | E5/8 r/8 G5/16 F#5/16 E5/8 r/8 B4/8 r/8
      C5/16 B4/16 A4/16 G4/16 F#4/8 A4/8 D#5/8 r/8 | E5/16 D#5/16 C5/16 B4/16 A#4/8 C5/8 E4/8 r/8
      E5/8 r/8 G5/16 F#5/16 E5/8 r/8 B4/8 r/8 | E5/8 r/8 G5/16 F#5/16 E5/8 r/8 B4/8 r/8
      C5/16 B4/16 A4/16 G4/16 F#4/8 A4/8 D#5/8 F#5/8 | E5/16 F#5/16 G5/16 A5/16 B5/8 r/8 (E5,B4,E4)/2~
    `,
  },
  {
    id: 'waltz-of-flowers', collection: 'ballet-opera', difficulty: 3, bpm: 84,
    title: { zh: '花之圆舞曲', en: 'Waltz of the Flowers' }, composer: 'P. I. Tchaikovsky',
    score: `
      A4/4 | D5/2 C#5/4 | D5/2 F#5/4 | E5/2 A4/4 | C#5/2 A4/4
      B4/2 C#5/4 | D5/2 E5/4 | F#5/2.~ | E5/2 A4/4
      D5/2 C#5/4 | D5/2 F#5/4 | A5/2 G5/4 | F#5/2 E5/4
      F#5/4 G5/4 A5/4 | B5/2 A5/4 | G5/4 F#5/4 E5/4 | (D5,F#4,D4)/2.~
    `,
  },
  {
    id: 'nutcracker-march', collection: 'ballet-opera', difficulty: 2, bpm: 112,
    title: { zh: '胡桃夹子进行曲', en: 'Nutcracker March' }, composer: 'P. I. Tchaikovsky',
    score: `
      G4/8 B4/8 D5/4 D5/8 C5/8 B4/8 A4/8 | G4/8 B4/8 D5/4 D5/8 C5/8 B4/8 A4/8
      G4/8 A4/8 B4/8 C5/8 D5/8 E5/8 F#5/8 G5/8 | F#5/8 E5/8 D5/4 A4/4 F#4/4
      G4/8 B4/8 D5/4 D5/8 C5/8 B4/8 A4/8 | G4/8 B4/8 D5/4 D5/8 C5/8 B4/8 A4/8
      E5/8 D5/8 C5/8 B4/8 A4/8 G4/8 F#4/8 E4/8 | D4/8 F#4/8 A4/8 C5/8 (B4,G4,G3)/2~
    `,
  },
  {
    id: 'trepak', collection: 'ballet-opera', difficulty: 4, bpm: 126,
    title: { zh: '俄罗斯舞曲', en: 'Trepak (Russian Dance)' }, composer: 'P. I. Tchaikovsky',
    score: `
      G4/8 A4/8 B4/8 C5/8 D5/8 D5/8 D5/8 D5/8 | E5/8 D5/8 C5/8 B4/8 A4/8 G4/8 A4/8 B4/8
      C5/8 B4/8 A4/8 G4/8 F#4/8 G4/8 A4/8 F#4/8 | G4/8 B4/8 D5/8 B4/8 G4/4 D4/4
      G4/8 A4/8 B4/8 C5/8 D5/8 D5/8 D5/8 D5/8 | E5/8 D5/8 C5/8 B4/8 A4/8 G4/8 A4/8 B4/8
      C5/8 A4/8 B4/8 G4/8 A4/8 F#4/8 G4/8 E4/8 | D4/8 F#4/8 A4/8 C5/8 [B4+D5]/4 [A4+C5]/4 [G4+B4]/2
    `,
  },
  {
    id: 'habanera', collection: 'ballet-opera', difficulty: 3, bpm: 84,
    title: { zh: '哈巴涅拉', en: 'Habanera' }, composer: 'G. Bizet',
    score: `
      D5/8. C#5/16 C5/8 C5/8 | C5/8 Bb4/16 A4/16 Bb4/8 A4/8 | A4/8. Ab4/16 G4/8 G4/8 | G4/8 F4/16 E4/16 F4/8 E4/8
      D4/8 E4/8 F4/8 G4/8 A4/4 F4/8 A4/8 | D5/4. C5/8 A4/4 F4/8 A4/8 | D5/4 C5/8 Bb4/8 A4/8 G4/8 F4/8 E4/8 | (D4,A3,D3)/2~
      F4/8 A4/8 C5/8 F5/8 E5/4 C5/8 A4/8 | F5/4. E5/8 C5/4 A4/8 C5/8 | F5/4 E5/8 D5/8 C5/8 Bb4/8 A4/8 G4/8 | (F4,C4,F3)/2~
    `,
  },
  {
    id: 'toreador', collection: 'ballet-opera', difficulty: 3, bpm: 108,
    title: { zh: '斗牛士之歌', en: 'Toreador Song' }, composer: 'G. Bizet',
    score: `
      C5/4. B4/8 C5/8 A4/8 F4/4 | A4/4. G4/8 A4/8 F4/8 G4/4
      G4/8 A4/8 Bb4/4 A4/8 G4/8 F4/4 | E4/8 F4/8 G4/4 F4/8 E4/8 D4/4
      C5/4. B4/8 C5/8 A4/8 F4/4 | A4/4. G4/8 A4/8 F4/8 G4/4
      G4/8 A4/8 Bb4/4 A4/8 G4/8 F4/8 A4/8 | C5/4 A4/8 F4/8 (F4,C4,F3)/2~
    `,
  },
  {
    id: 'la-donna-e-mobile', collection: 'ballet-opera', difficulty: 3, bpm: 104,
    title: { zh: '女人善变', en: 'La donna è mobile' }, composer: 'G. Verdi',
    score: `
      D5/8 D5/8 D5/8 E5/8 F#5/8 F#5/8 | F#5/8 E5/8 F#5/8 G5/4 E5/8
      C5/8 C5/8 C5/8 D5/8 E5/8 E5/8 | E5/8 D5/8 E5/8 F#5/4 D5/8
      D5/8 D5/8 D5/8 E5/8 F#5/8 F#5/8 | F#5/8 E5/8 F#5/8 G5/4 E5/8
      A5/8. G5/16 F#5/8 E5/8 D5/8 C#5/8 | D5/8 E5/8 C#5/8 D5/4 A4/8
      D5/8 D5/8 D5/8 E5/8 F#5/8 F#5/8 | F#5/8 E5/8 F#5/8 G5/4 E5/8
      C5/8 C5/8 C5/8 D5/8 E5/8 E5/8 | E5/8 D5/8 E5/8 F#5/4 D5/8
      A5/8. G5/16 F#5/8 E5/8 D5/8 C#5/8 | D5/8 E5/8 C#5/8 (D5,A4,D4)/2~
    `,
  },
  {
    id: 'ride-valkyries', collection: 'ballet-opera', difficulty: 4, bpm: 96, vb: 3.4,
    title: { zh: '女武神的骑行', en: 'Ride of the Valkyries' }, composer: 'R. Wagner',
    score: `
      F#4/8. B4/16 B4/4 B4/8. D5/16 D5/4 | D5/8. F#5/16 F#5/4 F#5/8 D5/8 F#5/4
      B4/8. D5/16 D5/4 D5/8. F#5/16 F#5/4 | F#5/8. A5/16 A5/4 A5/8 F#5/8 A5/4
      A5/8. B5/16 B5/2~ F#5/8. D5/16 | F#5/8. A5/16 A5/2~ D5/8. F#5/16
      F#5/8. B5/16 B5/2~ A5/8 F#5/8 | [B5+F#5]/4 [A5+F#5]/4 (B5,F#5,B4)/2~
    `,
  },
  {
    id: 'bridal-chorus', collection: 'ballet-opera', difficulty: 1, bpm: 80,
    title: { zh: '婚礼合唱', en: 'Bridal Chorus' }, composer: 'R. Wagner',
    score: `
      G4/4 C5/4. C5/8 C5/2 | G4/4 D5/4. B4/8 C5/2 | G4/4 C5/4. E5/8 E5/2 | D5/4. C5/8 D5/2~
      G4/4 C5/4. C5/8 C5/2 | G4/4 D5/4. B4/8 C5/2 | C5/4 F5/4. E5/8 D5/2 | (C5,E4,C4)/2.~
    `,
  },
  {
    id: 'wedding-march', collection: 'ballet-opera', difficulty: 3, bpm: 104,
    title: { zh: '婚礼进行曲', en: 'Wedding March' }, composer: 'F. Mendelssohn',
    score: `
      G4/8 G4/8 G4/8 C5/4 E5/4 G5/2 | F5/4 D5/4 B4/4 C5/4 | E5/4 C5/4 G4/2
      G4/8 G4/8 G4/8 C5/4 E5/4 G5/2 | A5/4 F5/4 D5/4 E5/4 | [C5+E5]/2 [G4+C5]/2
      C5/4 E5/8 G5/8 C6/4 B5/8 A5/8 | G5/4 E5/4 C5/4 G4/4 | A4/8 B4/8 C5/4 D5/4 G4/4 | (C5,G4,C4)/1~
    `,
  },
  {
    id: 'can-can', collection: 'ballet-opera', difficulty: 4, bpm: 132,
    title: { zh: '康康舞曲', en: 'Can-Can (Galop Infernal)' }, composer: 'J. Offenbach',
    score: `
      D5/8 D5/8 E5/8 C#5/8 D5/8 A4/8 A4/8 D5/8 | E5/8 C#5/8 D5/8 A4/8 A4/8 D5/8 E5/8 C#5/8
      D5/8 D5/8 F#5/8 E5/8 D5/8 C#5/8 B4/8 A4/8 | G4/8 A4/8 B4/8 C#5/8 D5/4 A4/4
      D5/8 D5/8 E5/8 C#5/8 D5/8 A4/8 A4/8 D5/8 | E5/8 C#5/8 D5/8 A4/8 A4/8 D5/8 E5/8 C#5/8
      F#5/8 G5/8 A5/8 F#5/8 E5/8 D5/8 C#5/8 B4/8 | A4/8 B4/8 C#5/8 E5/8 D5/4 A4/4
      A4/8 A4/8 B4/8 G4/8 A4/8 F#4/8 F#4/8 A4/8 | B4/8 G4/8 A4/8 F#4/8 F#4/8 A4/8 B4/8 G4/8
      A4/8 A4/8 C#5/8 B4/8 A4/8 G4/8 F#4/8 E4/8 | D4/8 E4/8 F#4/8 G4/8 A4/4 A4/4
      F#5/8 G5/8 A5/8 F#5/8 E5/8 D5/8 C#5/8 B4/8 | A4/8 B4/8 C#5/8 E5/8 [D5+F#5]/2
    `,
  },
  {
    id: 'barcarolle', collection: 'ballet-opera', difficulty: 2, bpm: 76,
    title: { zh: '船歌', en: 'Barcarolle' }, composer: 'J. Offenbach',
    score: `
      A4/4. B4/8 A4/4. D5/8 | C#5/2.~ | B4/4. C#5/8 B4/4. E5/8 | D5/2.~
      D5/4 C#5/4 D5/4 E5/4 | F#5/2 E5/8 D5/8 | E5/4 D5/4 E5/4 F#5/4 | G5/2.~
      A5/4. G5/8 F#5/4 E5/4 | D5/2 F#5/4 A4/4 | B4/4 D5/4 C#5/4 B4/4 | (A4,E4,A3)/1~
    `,
  },
  {
    id: 'flower-duet', collection: 'ballet-opera', difficulty: 3, bpm: 80,
    title: { zh: '花之二重唱', en: 'Flower Duet' }, composer: 'L. Delibes',
    score: `
      (E5,C5)/4. (F#5,D5)/8 (G5,E5)/4 (F#5,D5)/4 | (E5,C5)/4 (D5,B4)/8 (C5,A4)/8 (B4,G4)/2
      E5/8 F#5/8 G5/4 F#5/8 E5/8 D5/4 | E5/8 G5/8 F#5/8 E5/8 (D5,B4)/2~
      (E5,C5)/4. (F#5,D5)/8 (G5,E5)/4 (A5,F#5)/4 | (G5,E5)/4 (F#5,D5)/8 (E5,C5)/8 (D5,B4)/2
      G5/8 F#5/8 E5/8 D5/8 C5/8 B4/8 A4/8 G4/8 | (G4,E4,C4)/1~
    `,
  },
];
