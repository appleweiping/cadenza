// 曲库聚合器。新增专辑文件后在此 import 并加入 SONGS。

import beginnings from './beginnings.js';
import chinese from './chinese.js';
import classicalVienna from './classical-vienna.js';
import baroque from './baroque.js';
import romantic from './romantic.js';
import balletOpera from './ballet-opera.js';
import waltz from './waltz.js';
import march from './march.js';
import eastAsia from './east-asia.js';
import celtic from './celtic.js';
import americana from './americana.js';
import world from './world.js';
import christmas from './christmas.js';
import virtuoso from './virtuoso.js';

export const SONGS = [
  ...beginnings,
  ...chinese,
  ...classicalVienna,
  ...baroque,
  ...romantic,
  ...balletOpera,
  ...waltz,
  ...march,
  ...eastAsia,
  ...celtic,
  ...americana,
  ...world,
  ...christmas,
  ...virtuoso,
];

export function songById(id) {
  return SONGS.find((s) => s.id === id);
}
