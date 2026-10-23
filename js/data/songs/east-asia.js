// 专辑「东方之韵」:日本、朝鲜半岛传统旋律与公有领域作品(作曲家逝世均超 70 年),作者自制转谱/改编。

export default [
  {
    id: 'sakura', collection: 'east-asia', difficulty: 2, bpm: 80,
    title: { zh: '樱花', en: 'Sakura Sakura' }, composer: 'Trad. Japanese',
    score: `
      A4/4 A4/4 B4/2 | A4/4 A4/4 B4/2 | A4/4 B4/4 C5/4 B4/4 | A4/4 B4/8 A4/8 F4/2
      E4/4 C4/4 E4/4 F4/4 | E4/4 E4/8 C4/8 B3/2 | A4/4 B4/4 C5/4 B4/4 | A4/4 B4/8 A4/8 F4/2
      E4/4 C4/4 E4/4 F4/4 | E4/4 E4/8 C4/8 B3/2 | A4/4 A4/4 B4/2 | A4/4 A4/4 B4/2
      F4/4 B4/4 A4/4 F4/4 | (E4,A3,E3)/1~
    `,
  },
  {
    id: 'kojo-no-tsuki', collection: 'east-asia', difficulty: 2, bpm: 72,
    title: { zh: '荒城之月', en: 'Moon over the Ruined Castle' }, composer: { zh: '滝廉太郎', en: 'Rentarō Taki' },
    score: `
      A4/4 A4/4 D5/4 D5/4 | E5/8 F5/8 E5/4 D5/2 | C5/4 C5/4 F5/4 E5/4 | D5/4 C#5/8 D5/8 A4/2
      A4/4 A4/4 D5/4 D5/4 | E5/8 F5/8 E5/4 D5/2 | C5/4 A4/4 D5/4 C#5/4 | (D5,A4,D4)/1~
      F5/4 E5/4 D5/4 F5/4 | E5/4 D5/4 C#5/2 | A4/4 A4/4 D5/4 E5/4 | F5/4 E5/8 D5/8 (D5,A4,D4)/2~
    `,
  },
  {
    id: 'furusato', collection: 'east-asia', difficulty: 1, bpm: 84,
    title: { zh: '故乡', en: 'Furusato' }, composer: { zh: '岡野貞一', en: 'Teiichi Okano' },
    score: `
      C4/4 C4/4 C4/4 D4/4 | E4/4 E4/4 D4/2 | E4/4 E4/4 F4/4 G4/4 | A4/2.~ r/4
      A4/4 A4/4 G4/4 G4/4 | C5/4 C5/4 A4/2 | G4/4 G4/4 A4/4 G4/4 | E4/4 C4/4 D4/2
      C4/4 D4/4 E4/4 G4/4 | A4/4 A4/4 G4/2 | E4/4 G4/4 D4/4 E4/4 | (C4,G3,C3)/1~
    `,
  },
  {
    id: 'hamabe-no-uta', collection: 'east-asia', difficulty: 2, bpm: 76,
    title: { zh: '海滨之歌', en: 'Song of the Seashore' }, composer: { zh: '成田為三', en: 'Tamezō Narita' },
    score: `
      C4/4. D4/8 E4/4 | G4/4. A4/8 G4/4 | E4/4. G4/8 C5/4 | A4/2.~
      G4/4. A4/8 C5/4 | E5/4. D5/8 C5/4 | A4/4 C5/4 G4/4 | E4/2.~
      C4/4. D4/8 E4/4 | G4/4. A4/8 G4/4 | E4/4. G4/8 C5/4 | D5/2.~
      E5/4 D5/8 C5/8 A4/4 | G4/4 E4/4 D4/4 | (C4,G3,C3)/2.~
    `,
  },
  {
    id: 'arirang', collection: 'east-asia', difficulty: 2, bpm: 76,
    title: { zh: '阿里郎', en: 'Arirang' }, composer: 'Trad. Korean',
    score: `
      C4/4. D4/8 C4/8 D4/8 | E4/4. F4/8 E4/8 D4/8 | E4/4 G4/2~ | G4/4 A4/8 G4/8 E4/8 G4/8 | G4/2.~
      G4/4. A4/8 G4/8 E4/8 | G4/4 C5/2~ | C5/4 A4/8 G4/8 A4/8 C5/8 | A4/4 G4/8 E4/8 D4/8 C4/8 | D4/2.~
      C4/4. D4/8 C4/8 D4/8 | E4/4. F4/8 E4/8 D4/8 | E4/4 G4/8 E4/8 D4/8 C4/8 | (C4,G3)/2.~
    `,
  },
  {
    id: 'doraji', collection: 'east-asia', difficulty: 2, bpm: 88,
    title: { zh: '桔梗谣', en: 'Doraji' }, composer: 'Trad. Korean',
    score: `
      E4/4 E4/8 D4/8 E4/4 | G4/4 G4/8 A4/8 G4/4 | E4/4 G4/8 E4/8 D4/4 | C4/4 D4/8 E4/8 D4/2
      E4/4 G4/8 A4/8 C5/4 | A4/4 G4/8 A4/8 G4/4 | E4/4 G4/8 E4/8 D4/4 | C4/4 D4/8 C4/8 (C4,G3)/2~
      A4/4 A4/8 G4/8 A4/4 | C5/4 C5/8 D5/8 C5/4 | A4/4 C5/8 A4/8 G4/4 | E4/4 G4/8 E4/8 (D4,A3)/2~
    `,
  },
];
