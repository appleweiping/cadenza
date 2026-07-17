// 专辑「圆舞曲之夜」:施特劳斯、瓦尔德退费尔、伊凡诺维奇、罗萨斯、莱哈尔(公有领域),作者自制转谱/改编。

export default [
  {
    id: 'blue-danube', collection: 'waltz', difficulty: 2, bpm: 92,
    title: { zh: '蓝色多瑙河', en: 'The Blue Danube' }, composer: 'J. Strauss II',
    score: `
      D4/4 F#4/4 A4/4 | A4/2 F#5/4 | F#5/2 r/4 | D5/4 D5/2 | r/4 D4/4 F#4/4
      A4/4 A4/2 | G5/4 G5/2 | r/4 E5/4 E5/2 | r/4 C#4/4 E4/4
      A4/4 A4/2 | A5/4 A5/2 | r/4 F#5/4 F#5/2 | r/4 D4/4 F#4/4
      A4/4 A4/2 | G5/4 G5/2 | r/4 E5/4 E5/4 F#5/4 | (D5,A4,D4)/2.~
    `,
  },
  {
    id: 'skaters-waltz', collection: 'waltz', difficulty: 2, bpm: 92,
    title: { zh: '溜冰圆舞曲', en: "The Skaters' Waltz" }, composer: 'E. Waldteufel',
    score: `
      B4/2 D5/4 | B4/2 G4/4 | A4/2 B4/4 | A4/2 D4/4
      A4/2 C5/4 | A4/2 F#4/4 | G4/2 A4/4 | G4/2 D4/4
      B4/2 D5/4 | B4/2 G4/4 | A4/2 B4/4 | A4/2 D5/4
      D5/4 C5/4 A4/4 | C5/4 B4/4 G4/4 | A4/4 F#4/4 D4/4 | (G4,D4,G3)/2.~
    `,
  },
  {
    id: 'danube-waves', collection: 'waltz', difficulty: 3, bpm: 96,
    title: { zh: '多瑙河之波', en: 'Waves of the Danube' }, composer: 'I. Ivanovici',
    score: `
      E4/4 A4/4 B4/4 | C5/2 B4/4 | A4/2.~ | E4/4 A4/4 B4/4 | C5/2 B4/4 | A4/2.~
      E4/4 G#4/4 B4/4 | E5/2 D5/4 | C5/2 B4/4 | A4/2.~
      A4/4 C5/4 E5/4 | A5/2 G#5/4 | A5/4 E5/4 C5/4 | B4/2 E4/4
      E4/4 A4/4 B4/4 | C5/2 B4/4 | A4/4 B4/4 C5/4 | (A4,E4,A3)/2.~
    `,
  },
  {
    id: 'over-the-waves', collection: 'waltz', difficulty: 3, bpm: 88,
    title: { zh: '乘风破浪', en: 'Sobre las Olas' }, composer: 'J. Rosas',
    score: `
      D5/2.~ B4/4 G4/4 B4/4 | D5/2.~ B4/4 G4/4 B4/4
      C5/2 A4/4 | F#4/2 A4/4 | C5/4 B4/4 A4/4 | B4/2.~
      D5/2.~ B4/4 G4/4 B4/4 | E5/2.~ C5/4 A4/4 C5/4
      D5/4 C5/4 B4/4 | A4/4 G4/4 F#4/4 | G4/2.~ | (G4,B3,G3)/2.~
    `,
  },
  {
    id: 'estudiantina', collection: 'waltz', difficulty: 2, bpm: 96,
    title: { zh: '女学生圆舞曲', en: 'Estudiantina' }, composer: 'E. Waldteufel',
    score: `
      E4/4 E4/4 E4/4 | D4/4 E4/4 G4/4 | G4/2 F4/4 | E4/2.~
      D4/4 D4/4 D4/4 | C4/4 D4/4 F4/4 | F4/2 E4/4 | D4/2.~
      E4/4 E4/4 E4/4 | D4/4 E4/4 G4/4 | C5/2 B4/4 | A4/2 G4/4
      F4/4 A4/4 G4/4 | F4/4 E4/4 D4/4 | (C4,G3,C3)/2.~
    `,
  },
  {
    id: 'merry-widow', collection: 'waltz', difficulty: 2, bpm: 84,
    title: { zh: '风流寡妇圆舞曲', en: 'Merry Widow Waltz' }, composer: 'F. Lehár',
    score: `
      C5/2 B4/4 | G4/2 E4/4 | A4/2.~ | A4/2 G4/4 | E4/2 C4/4 | D4/2.~
      D5/2 C5/4 | A4/2 F4/4 | B4/2.~ | B4/2 A4/4 | F4/2 D4/4 | (C4,E4,G3)/2.~
      C5/2 B4/4 | G4/2 E4/4 | A4/2.~ | D5/4 C5/4 B4/4 | A4/4 G4/4 D4/4 | (C4,G3,C3)/2.~
    `,
  },
];
