// Web Audio 引擎:惰性创建 AudioContext(浏览器要求首次用户手势后才能出声),
// 信号链:各音符 → master 增益 → 压限器 → 扬声器。压限器防止和弦叠加削波。

let ctx = null;
let master = null;
let volume = 0.9;

export const audio = {
  /** 在任意用户手势里调用,确保 AudioContext 就绪并处于 running */
  ensure() {
    if (!ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      ctx = new AC({ latencyHint: 'interactive' });
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -18;
      comp.knee.value = 24;
      comp.ratio.value = 6;
      comp.attack.value = 0.002;
      comp.release.value = 0.22;
      master = ctx.createGain();
      master.gain.value = volume;
      master.connect(comp);
      comp.connect(ctx.destination);
    }
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  },

  get ctx() { return ctx; },
  /** 音符的输出节点 */
  out() { return master; },
  now() { return ctx ? ctx.currentTime : 0; },

  setVolume(v) {
    volume = Math.min(1, Math.max(0, v));
    if (master) master.gain.setTargetAtTime(volume, ctx.currentTime, 0.03);
  },
  getVolume() { return volume; },
};
