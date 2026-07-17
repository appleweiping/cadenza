// 专辑「浪漫主义」:肖邦、勃拉姆斯、舒曼、德沃夏克、萨蒂等(公有领域),作者自制转谱/改编。

export default [
  {
    id: 'nocturne-9-2', collection: 'romantic', difficulty: 3, bpm: 63, vb: 3.4,
    title: { zh: '夜曲 Op.9 No.2', en: 'Nocturne Op.9 No.2' }, composer: 'F. Chopin',
    score: `
      Bb4/4 G5/2~ F5/8 G5/8 | F5/4 Eb5/2~ Bb4/4
      G5/4 C6/4 Bb5/4 Ab5/8 G5/8 | F5/4 G5/8 F5/8 Eb5/2
      Bb4/4 G5/2~ F5/8 G5/8 | F5/4 Eb5/2~ Bb4/4
      G5/4 C6/4 Bb5/4 G5/8 Eb5/8 | F5/8 Eb5/8 D5/8 Eb5/8 (Eb5,G4,Eb4)/2~
      Eb5/8 D5/8 Db5/8 C5/8 Bb4/4 G4/4 | Ab4/8 Bb4/8 C5/8 D5/8 Eb5/2
      F5/8 G5/8 Ab5/8 Bb5/8 G5/4 Eb5/4 | F5/8 Eb5/8 D5/8 F5/8 (Eb5,Bb4,Eb4)/2~
    `,
  },
  {
    id: 'minute-waltz', collection: 'romantic', difficulty: 4, bpm: 138, vb: 3.2,
    title: { zh: '小狗圆舞曲', en: 'Minute Waltz' }, composer: 'F. Chopin',
    score: `
      G4/8 A4/8 G4/8 F#4/8 G4/8 A4/8 G4/8 F#4/8 G4/8 B4/8 D5/8 G5/8
      E5/8 D5/8 C5/8 B4/8 C5/8 E5/8 D5/8 C5/8 B4/8 A4/8 B4/8 D5/8
      C5/8 B4/8 A4/8 G4/8 A4/8 C5/8 B4/8 A4/8 G4/8 F#4/8 G4/8 B4/8
      A4/8 G4/8 F#4/8 E4/8 F#4/8 A4/8 G4/4 D5/4 B4/4 G4/4
      G4/8 A4/8 G4/8 F#4/8 G4/8 A4/8 G4/8 F#4/8 G4/8 B4/8 D5/8 G5/8
      E5/8 D5/8 C5/8 B4/8 C5/8 E5/8 D5/8 C5/8 B4/8 A4/8 B4/8 D5/8
      G5/4 F#5/8 E5/8 D5/8 C5/8 B4/8 A4/8 (G4,D4,G3)/2.~
    `,
  },
  {
    id: 'funeral-march', collection: 'romantic', difficulty: 2, bpm: 63,
    title: { zh: '葬礼进行曲', en: 'Funeral March' }, composer: 'F. Chopin',
    score: `
      Bb3/2~ Bb3/8. Bb3/16 Bb3/2~ | Db4/4 C4/8. C4/16 C4/4 Bb3/8. Bb3/16 | Bb3/2~ Bb3/4
      Bb3/2~ Bb3/8. Bb3/16 Bb3/2~ | Db4/4 C4/8. C4/16 C4/4 Bb3/8. Bb3/16 | Bb3/2.~
      Gb4/2 F4/4 | Eb4/4 F4/8. Eb4/16 Db4/4 | Eb4/2 F4/4 | Gb4/2.~
      Bb3/2~ Bb3/8. Bb3/16 Bb3/2~ | Db4/4 C4/8. C4/16 C4/4 Bb3/8. Bb3/16 | (Bb3,Bb2)/2.~
    `,
  },
  {
    id: 'hungarian-dance-5', collection: 'romantic', difficulty: 4, bpm: 116,
    title: { zh: '匈牙利舞曲第五号', en: 'Hungarian Dance No. 5' }, composer: 'J. Brahms',
    score: `
      D5/4 Bb5/4. A5/8 G5/8 A5/8 | D5/4 D5/4 r/4 D5/8 E5/8
      F#5/8 G5/8 A5/8 F#5/8 D5/4 A4/8 Bb4/8 | C5/8 A4/8 F#4/8 A4/8 G4/2
      D5/4 Bb5/4. A5/8 G5/8 A5/8 | D5/4 D5/4 r/4 D5/8 E5/8
      F#5/8 G5/8 A5/8 F#5/8 D5/4 A4/8 C5/8 | Bb4/8 A4/8 F#4/8 A4/8 (G4,G3)/2~
      G5/8. F#5/16 F#5/4 A5/8. G5/16 G5/4 | Bb5/8 A5/8 G5/8 F#5/8 G5/4 D5/4
      G5/8. F#5/16 F#5/4 A5/8. G5/16 G5/4 | Bb5/8 A5/8 G5/8 A5/8 [G5+G4]/2
    `,
  },
  {
    id: 'brahms-lullaby', collection: 'romantic', difficulty: 1, bpm: 76,
    title: { zh: '摇篮曲', en: "Brahms' Lullaby" }, composer: 'J. Brahms',
    score: `
      E4/8 E4/8 G4/4.~ E4/8 E4/8 G4/4.~ | E4/8 G4/8 C5/4 B4/4. A4/8 A4/4 G4/4
      D4/8 E4/8 F4/4 D4/8 E4/8 F4/4 | D4/8 F4/8 B4/4 A4/8 G4/8 B4/4 C5/2~
      C4/8 C4/8 C5/2 A4/8 F4/8 G4/2 | E4/8 C4/8 F4/4 G4/4 A4/4 G4/2
      C4/8 C4/8 C5/2 A4/8 F4/8 G4/2 | E4/8 C4/8 G4/4 F4/4 E4/4 D4/4 (C4,G3)/2~
    `,
  },
  {
    id: 'liebestraum-3', collection: 'romantic', difficulty: 3, bpm: 76, vb: 3.4,
    title: { zh: '爱之梦', en: 'Liebestraum No. 3' }, composer: 'F. Liszt',
    score: `
      C5/4. Bb4/8 Ab4/4 C5/4 | Eb5/2~ Eb5/4 F5/8 Eb5/8 | Db5/4. C5/8 Bb4/4 Db5/4 | C5/2.~
      Ab4/8 Bb4/8 C5/8 Db5/8 Eb5/4 F5/4 | G5/2~ Ab5/4 G5/8 F5/8 | Eb5/4 C5/4 Db5/8 C5/8 Bb4/8 Ab4/8 | (Ab4,Eb4,Ab3)/2.~
      C5/4. Bb4/8 Ab4/4 C5/4 | Eb5/2~ Eb5/4 F5/8 Ab5/8 | G5/4. F5/8 Eb5/4 Db5/4 | (C5,Ab4,Eb4)/2.~
    `,
  },
  {
    id: 'traumerei', collection: 'romantic', difficulty: 2, bpm: 66, vb: 3.4,
    title: { zh: '梦幻曲', en: 'Träumerei' }, composer: 'R. Schumann',
    score: `
      C4/4 F4/2.~ E4/4 F4/4 A4/4 C5/4 | A5/2~ A5/4 G5/8 F5/8 E5/4 C5/4
      D5/4 E5/8 F5/8 D5/4 G4/4 | C5/2.~ C4/4
      F4/2.~ E4/4 F4/4 A4/4 C5/4 | Bb4/2 D5/4 C5/8 Bb4/8 A4/4 F4/4
      G4/4 A4/8 Bb4/8 G4/4 C4/4 | (F4,C4,F3)/1~
    `,
  },
  {
    id: 'happy-farmer', collection: 'romantic', difficulty: 2, bpm: 108,
    title: { zh: '快乐的农夫', en: 'The Happy Farmer' }, composer: 'R. Schumann',
    score: `
      C4/8 F4/8 A4/8 C5/8 A4/4. F4/8 | D5/8 C5/8 A4/8 F4/8 C5/4. C4/8
      C4/8 F4/8 A4/8 C5/8 A4/4. F4/8 | C5/8 A4/8 G4/8 Bb4/8 F4/4.~ C4/8
      C5/4 C5/8 A4/8 D5/4 D5/8 Bb4/8 | C5/8 A4/8 F4/8 A4/8 G4/4 C4/4
      C4/8 F4/8 A4/8 C5/8 A4/4. F4/8 | C5/8 A4/8 G4/8 Bb4/8 (F4,F3)/2~
    `,
  },
  {
    id: 'humoresque', collection: 'romantic', difficulty: 3, bpm: 84,
    title: { zh: '幽默曲', en: 'Humoresque' }, composer: 'A. Dvořák',
    score: `
      G4/8 A4/8 B4/8 G4/8 E5/8 E5/8 D5/4 | E5/8 F#5/8 E5/8 D5/8 B4/8 B4/8 A4/4
      G4/8 A4/8 B4/8 G4/8 E5/8 E5/8 D5/8 E5/8 | G5/8 F#5/8 E5/8 D5/8 (G4,B3)/2
      G4/8 A4/8 B4/8 G4/8 E5/8 E5/8 D5/4 | E5/8 F#5/8 E5/8 D5/8 B4/8 B4/8 A4/4
      G4/8 A4/8 B4/8 G4/8 E5/8 E5/8 D5/8 E5/8 | G5/8 F#5/8 A5/8 F#5/8 (G5,G4)/2~
      B4/8 C5/8 D5/8 E5/8 D5/4 G5/4 | F#5/8 E5/8 D5/8 C5/8 B4/4 A4/4
      B4/8 C5/8 D5/8 E5/8 D5/8 C5/8 B4/8 A4/8 | G4/8 B4/8 D5/8 B4/8 (G4,D4,G3)/2~
    `,
  },
  {
    id: 'salut-damour', collection: 'romantic', difficulty: 3, bpm: 80, vb: 3.4,
    title: { zh: '爱的致意', en: "Salut d'Amour" }, composer: 'E. Elgar',
    score: `
      B4/4. E5/8 G#5/4 F#5/4 | E5/2~ B4/2~ | C#5/4. D#5/8 E5/4 F#5/4 | B4/2.~ B4/4
      B4/4. E5/8 G#5/4 F#5/4 | E5/2~ G#5/2~ | A5/4 G#5/8 F#5/8 G#5/4 B4/4 | (E5,B4,E4)/2.~
      G#5/4 F#5/8 E5/8 F#5/4 A5/4 | G#5/4 E5/8 C#5/8 B4/2 | C#5/8 D#5/8 E5/4 F#5/8 G#5/8 A5/4 | (G#5,E5,B4)/2.~
    `,
  },
  {
    id: 'the-swan', collection: 'romantic', difficulty: 2, bpm: 66, vb: 3.4,
    title: { zh: '天鹅', en: 'The Swan' }, composer: 'C. Saint-Saëns',
    score: `
      B4/2 D5/4 G5/4 | F#5/2.~ E5/4 | D5/2 B4/4 G4/4 | A4/2.~ B4/4
      C5/4 B4/8 A4/8 B4/4 E5/4 | D5/2 B4/2 | A4/4 G4/8 F#4/8 G4/4 B4/4 | (G4,D4,G3)/2.~
      B4/2 D5/4 G5/4 | B5/2.~ A5/4 | G5/2 D5/4 B4/4 | (G4,B3,G3)/1~
    `,
  },
  {
    id: 'gymnopedie-1', collection: 'romantic', difficulty: 2, bpm: 72,
    title: { zh: '裸体歌舞第一号', en: 'Gymnopédie No. 1' }, composer: 'E. Satie',
    score: `
      G3/4 (B4,D4)/2 D3/4 (A4,D4)/2 | G3/4 (B4,D4)/2 D3/4 (A4,D4)/2
      F#5/4 A5/4 G5/4 | F#5/4 C#5/4 B4/4 | C#5/4 D5/4 A4/4 | F#4/2.~
      G3/4 (B4,D4)/2 D3/4 (A4,D4)/2 | F#5/4 A5/4 G5/4 | F#5/4 C#5/4 B4/4
      C#5/4 D5/4 A4/4 | C#5/2.~ | (D5,F#4,D4)/2.~
    `,
  },
  {
    id: 'clair-de-lune', collection: 'romantic', difficulty: 3, bpm: 60, vb: 3.2,
    title: { zh: '月光', en: 'Clair de Lune' }, composer: 'C. Debussy',
    score: `
      (F5,Ab4)/2 (F5,Ab4)/4. Ab4/8 | (Eb5,Gb4)/4. (Db5,F4)/8 (Eb5,Gb4)/2
      (Db5,F4)/4. (C5,Eb4)/8 (Bb4,Db4)/2~ | (C5,Eb4)/4. (Db5,F4)/8 (Ab4,C4)/2~
      Db4/8 F4/8 Ab4/8 Db5/8 F5/4 Eb5/8 Db5/8 | Eb4/8 Gb4/8 Bb4/8 Eb5/8 Gb5/4 F5/8 Eb5/8
      F4/8 Ab4/8 Db5/8 F5/8 Ab5/2~ | Gb5/8 F5/8 Eb5/8 Db5/8 (Db5,Ab4,Db4)/1~
    `,
  },
  {
    id: 'entertainer', collection: 'romantic', difficulty: 3, bpm: 92,
    title: { zh: '演艺人', en: 'The Entertainer' }, composer: 'S. Joplin',
    score: `
      D4/16 D#4/16 E4/16 C5/8 E4/16 C5/8 E4/16 C5/4.~
      C5/16 D5/16 D#5/16 E5/16 C5/16 D5/16 E5/8 B4/16 D5/8 C5/4.~
      D4/16 D#4/16 E4/16 C5/8 E4/16 C5/8 E4/16 C5/4.~
      A4/16 G4/16 F#4/16 A4/16 C5/8 E5/16 D5/8 C5/16 A4/8 (D5,D4)/4.~
      D4/16 D#4/16 E4/16 C5/8 E4/16 C5/8 E4/16 C5/4.~
      C5/16 D5/16 D#5/16 E5/16 C5/16 D5/16 E5/8 B4/16 D5/8 C5/4.~
      C5/8 D5/16 D#5/16 E5/8 C5/8 D5/8 E5/8 C5/8 D5/8 C5/8 E5/8 C5/8 D5/8 E5/8 C5/8 D5/16 C5/16 (C5,G4,C4)/2~
    `,
  },
  {
    id: 'tchaikovsky-pc1', collection: 'romantic', difficulty: 3, bpm: 92,
    title: { zh: '第一钢琴协奏曲', en: 'Piano Concerto No. 1' }, composer: 'P. I. Tchaikovsky',
    score: `
      [Db4+Ab4]/4 [Db4+Ab4]/4 [Db4+Ab4]/2 | F5/4. Eb5/8 Db5/4 Ab4/4
      Bb4/4 C5/8 Db5/8 Bb4/4 Gb4/4 | Ab4/2.~ Ab4/4
      F5/4. Eb5/8 Db5/4 Ab4/4 | Bb4/4 C5/8 Db5/8 Bb4/4 Gb4/4 | Ab4/2.~ Ab4/4
      Db5/4 Eb5/8 F5/8 Gb5/4 F5/8 Eb5/8 | F5/4 Db5/4 Eb5/2 | Db5/8 Eb5/8 F5/8 Gb5/8 Ab5/4 Gb5/8 F5/8 | (Eb5,Ab4)/2 (Db5,Ab4,Db4)/2~
    `,
  },
];
