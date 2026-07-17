// 专辑(曲包)。unlockStars = 解锁所需的累计星星数;theme 决定该专辑歌曲的游戏内配色。

export const COLLECTIONS = [
  { id: 'beginnings',      icon: '🌱', name: { zh: '启程', en: 'Beginnings' },                unlockStars: 0,  theme: { bg: ['#173a2e', '#0a1410'], accent: '#4ade80' } },
  { id: 'chinese',         icon: '🏮', name: { zh: '中国旋律', en: 'Chinese Melodies' },       unlockStars: 0,  theme: { bg: ['#4a1420', '#150507'], accent: '#f87171' } },
  { id: 'classical-vienna',icon: '🎻', name: { zh: '维也纳古典', en: 'Classical Vienna' },     unlockStars: 2,  theme: { bg: ['#2b2410', '#120e04'], accent: '#facc15' } },
  { id: 'baroque',         icon: '⛪', name: { zh: '巴洛克', en: 'Baroque' },                  unlockStars: 6,  theme: { bg: ['#1e2a4a', '#0a0e1c'], accent: '#93c5fd' } },
  { id: 'romantic',        icon: '🌹', name: { zh: '浪漫主义', en: 'Romantic Era' },           unlockStars: 10, theme: { bg: ['#3b1535', '#140510'], accent: '#f472b6' } },
  { id: 'ballet-opera',    icon: '🩰', name: { zh: '芭蕾与歌剧', en: 'Ballet & Opera' },       unlockStars: 15, theme: { bg: ['#2c1b3f', '#0e0716'], accent: '#c084fc' } },
  { id: 'waltz',           icon: '💫', name: { zh: '圆舞曲之夜', en: 'Waltz Night' },          unlockStars: 20, theme: { bg: ['#123642', '#04121a'], accent: '#22d3ee' } },
  { id: 'march',           icon: '🥁', name: { zh: '进行曲', en: 'Marches' },                  unlockStars: 26, theme: { bg: ['#3a2a12', '#140d04'], accent: '#fb923c' } },
  { id: 'east-asia',       icon: '🌸', name: { zh: '东方之韵', en: 'Eastern Echoes' },         unlockStars: 32, theme: { bg: ['#3f1f2e', '#140812'], accent: '#fda4af' } },
  { id: 'celtic',          icon: '🍀', name: { zh: '凯尔特与不列颠', en: 'Celtic & British Isles' }, unlockStars: 38, theme: { bg: ['#14321f', '#040f08'], accent: '#34d399' } },
  { id: 'americana',       icon: '🤠', name: { zh: '美洲民谣', en: 'Americana' },              unlockStars: 45, theme: { bg: ['#33291a', '#100c06'], accent: '#fbbf24' } },
  { id: 'world',           icon: '🌍', name: { zh: '世界之声', en: 'Around the World' },       unlockStars: 52, theme: { bg: ['#0f3438', '#031012'], accent: '#2dd4bf' } },
  { id: 'christmas',       icon: '🎄', name: { zh: '圣诞颂歌', en: 'Christmas Carols' },       unlockStars: 60, theme: { bg: ['#25123a', '#0a0414'], accent: '#a5b4fc' } },
  { id: 'virtuoso',        icon: '🔥', name: { zh: '炫技巅峰', en: 'Virtuoso' },               unlockStars: 70, theme: { bg: ['#3d0d0d', '#160404'], accent: '#ff5d73' } },
];

export function collectionById(id) {
  return COLLECTIONS.find((c) => c.id === id);
}
