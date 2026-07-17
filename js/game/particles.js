// 命中粒子:轻量对象池,Canvas 上直接绘制小方片飞散。

export class ParticleSystem {
  constructor() { this.list = []; }

  spawn(x, y, color, n = 12) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2;
      const sp = 120 + Math.random() * 380;
      this.list.push({
        x, y,
        vx: Math.cos(a) * sp,
        vy: Math.sin(a) * sp - 160,
        size: 3 + Math.random() * 5,
        life: 1,
        decay: 1.8 + Math.random() * 1.4,
        color,
        rot: Math.random() * Math.PI,
        vr: (Math.random() - 0.5) * 10,
      });
    }
    if (this.list.length > 400) this.list.splice(0, this.list.length - 400);
  }

  update(dt) {
    const g = 900;
    for (const p of this.list) {
      p.life -= p.decay * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += g * dt;
      p.rot += p.vr * dt;
    }
    this.list = this.list.filter((p) => p.life > 0);
  }

  draw(ctx) {
    for (const p of this.list) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, p.life);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
      ctx.restore();
    }
  }
}
