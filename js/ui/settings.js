// 设置弹窗:控件与存档双向绑定。

import { store } from '../storage.js';
import { audio } from '../audio/engine.js';
import { i18n, t } from '../i18n.js';

/**
 * @param {object} hooks {onLangChange, onUnlockChange, onResetConfirm}
 */
export function initSettings(hooks) {
  const $ = (id) => document.getElementById(id);

  const vol = $('set-volume');
  vol.value = String(Math.round(store.setting('volume') * 100));
  vol.addEventListener('input', () => {
    const v = Number(vol.value) / 100;
    store.setSetting('volume', v);
    audio.setVolume(v);
  });

  const lang = $('set-lang');
  lang.value = i18n.lang;
  lang.addEventListener('change', () => {
    i18n.setLang(lang.value);
    hooks.onLangChange?.();
  });

  const bindToggle = (id, key, after) => {
    const el = $(id);
    el.checked = !!store.setting(key);
    el.addEventListener('change', () => {
      store.setSetting(key, el.checked);
      after?.();
    });
  };
  bindToggle('set-particles', 'particles');
  bindToggle('set-revive', 'revive');
  bindToggle('set-unlockall', 'unlockAll', () => hooks.onUnlockChange?.());

  $('btn-reset-save').addEventListener('click', () => {
    hooks.onResetConfirm?.(t('confirm.resetMsg'));
  });
}

/** 打开设置时同步一次当前值(语言切换后 select 可能过期) */
export function syncSettings() {
  document.getElementById('set-volume').value = String(Math.round(store.setting('volume') * 100));
  document.getElementById('set-lang').value = i18n.lang;
  document.getElementById('set-particles').checked = !!store.setting('particles');
  document.getElementById('set-revive').checked = !!store.setting('revive');
  document.getElementById('set-unlockall').checked = !!store.setting('unlockAll');
}
