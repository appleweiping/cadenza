// 中英双语。默认跟随浏览器语言,可在设置中切换。
// 静态 DOM 文案用 data-i18n / data-i18n-title 属性,动态文案用 t()。

import { store } from './storage.js';

const STRINGS = {
  zh: {
    'menu.footer': '♫ 全部曲目为公有领域作品 · 灵感来自《钢琴块2》· 开源于 GitHub',
    'menu.logoSub': '琴瀑',
    'menu.langSwitch': 'EN',
    'menu.langSwitchTitle': 'Switch to English',
    'menu.settings': '设置',
    'menu.achievements': '成就',
    'menu.stats': '统计',
    'menu.lockNeed': '需 {n} ★ 解锁',
    'menu.songs': '{done}/{total} 首',
    'menu.best': '最佳 {n}',
    'game.pause': '暂停',
    'game.start': '开始',
    'game.lap': '第 {n} 圈',
    'game.speed': '速度 ×{n}',
    'pause.title': '已暂停',
    'pause.resume': '继续',
    'pause.restart': '重新开始',
    'pause.quit': '退出到选曲',
    'fail.title': '演奏中断!',
    'fail.wrong': '点到了空白轨道',
    'fail.miss': '方块滑出了屏幕',
    'fail.revive': '复活(免费 ×1)',
    'fail.retry': '重试',
    'fail.exit': '结算退出',
    'res.title': '演奏结束',
    'res.again': '再来一局',
    'res.back': '返回选曲',
    'res.newBest': '新纪录!',
    'res.crowns': '皇冠',
    'res.lap': '到达圈数',
    'res.maxCombo': '最大连击',
    'settings.title': '设置',
    'settings.volume': '音量',
    'settings.language': '语言 / Language',
    'settings.particles': '粒子特效',
    'settings.revive': '允许复活',
    'settings.unlockAll': '解锁全部曲目',
    'settings.keys': '键盘键位',
    'settings.reset': '清空所有进度',
    'confirm.title': '确认',
    'confirm.resetMsg': '将删除全部成绩、星星、皇冠与成就,不可恢复。确定吗?',
    'confirm.yes': '确定',
    'confirm.no': '取消',
    'ach.title': '成就',
    'ach.unlocked': '成就解锁',
    'stats.title': '统计',
    'stats.plays': '总游玩局数',
    'stats.taps': '总点击次数',
    'stats.perfects': 'PERFECT 总数',
    'stats.maxCombo': '历史最大连击',
    'stats.maxLap': '最高圈数',
    'stats.playTime': '总游玩时长',
    'stats.fullCrowns': '3 皇冠曲目数',
    'stats.totalSongs': '曲库总数',
    'stats.songsPlayed': '玩过的曲目',
    'stats.level': '玩家等级',
    'unit.minutes': '{n} 分钟',
    'combo.text': '连击',
    'judge.perfect': 'PERFECT',
    'judge.great': 'GREAT',
    'judge.good': 'GOOD',
  },
  en: {
    'menu.footer': '♫ All music is public domain · Inspired by Piano Tiles 2 · Open source on GitHub',
    'menu.logoSub': '',
    'menu.langSwitch': '中文',
    'menu.langSwitchTitle': '切换到中文',
    'menu.settings': 'Settings',
    'menu.achievements': 'Achievements',
    'menu.stats': 'Statistics',
    'menu.lockNeed': 'Need {n} ★ to unlock',
    'menu.songs': '{done}/{total} songs',
    'menu.best': 'Best {n}',
    'game.pause': 'Pause',
    'game.start': 'START',
    'game.lap': 'Lap {n}',
    'game.speed': 'Speed ×{n}',
    'pause.title': 'Paused',
    'pause.resume': 'Resume',
    'pause.restart': 'Restart',
    'pause.quit': 'Back to songs',
    'fail.title': 'Performance stopped!',
    'fail.wrong': 'You tapped an empty lane',
    'fail.miss': 'A tile slipped off the screen',
    'fail.revive': 'Revive (free ×1)',
    'fail.retry': 'Retry',
    'fail.exit': 'Finish & exit',
    'res.title': 'Results',
    'res.again': 'Play again',
    'res.back': 'Song list',
    'res.newBest': 'NEW BEST!',
    'res.crowns': 'Crowns',
    'res.lap': 'Lap reached',
    'res.maxCombo': 'Max combo',
    'settings.title': 'Settings',
    'settings.volume': 'Volume',
    'settings.language': 'Language / 语言',
    'settings.particles': 'Particle effects',
    'settings.revive': 'Allow revive',
    'settings.unlockAll': 'Unlock all songs',
    'settings.keys': 'Keyboard keys',
    'settings.reset': 'Reset all progress',
    'confirm.title': 'Confirm',
    'confirm.resetMsg': 'This deletes all scores, stars, crowns and achievements. Are you sure?',
    'confirm.yes': 'Yes',
    'confirm.no': 'Cancel',
    'ach.title': 'Achievements',
    'ach.unlocked': 'Achievement unlocked',
    'stats.title': 'Statistics',
    'stats.plays': 'Total plays',
    'stats.taps': 'Total taps',
    'stats.perfects': 'Total PERFECTs',
    'stats.maxCombo': 'Best combo ever',
    'stats.maxLap': 'Highest lap',
    'stats.playTime': 'Total play time',
    'stats.fullCrowns': 'Songs with 3 crowns',
    'stats.totalSongs': 'Songs in library',
    'stats.songsPlayed': 'Songs played',
    'stats.level': 'Player level',
    'unit.minutes': '{n} min',
    'combo.text': 'COMBO',
    'judge.perfect': 'PERFECT',
    'judge.great': 'GREAT',
    'judge.good': 'GOOD',
  },
};

let lang = store.setting('lang')
  || ((navigator.language || 'en').toLowerCase().startsWith('zh') ? 'zh' : 'en');

export const i18n = {
  get lang() { return lang; },

  setLang(l) {
    lang = STRINGS[l] ? l : 'en';
    store.setSetting('lang', lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    this.apply();
  },

  t(key, vars) {
    let s = STRINGS[lang][key] ?? STRINGS.en[key] ?? key;
    if (vars) for (const [k, v] of Object.entries(vars)) s = s.replaceAll(`{${k}}`, String(v));
    return s;
  },

  /** 歌名等 {zh, en} 双语对象取当前语言 */
  pick(obj) {
    if (!obj) return '';
    return obj[lang] ?? obj.en ?? Object.values(obj)[0];
  },

  /** 把词典应用到所有带 data-i18n 属性的节点 */
  apply(root = document) {
    root.querySelectorAll('[data-i18n]').forEach((el) => {
      el.textContent = this.t(el.dataset.i18n);
    });
    root.querySelectorAll('[data-i18n-title]').forEach((el) => {
      el.title = this.t(el.dataset.i18nTitle);
    });
  },
};

export const t = (key, vars) => i18n.t(key, vars);
