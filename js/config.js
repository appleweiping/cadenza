// 全局常量。所有可调参数集中在这里,便于平衡性调整。
export const CONFIG = {
  LANES: 4,

  // 判定区(以「点击瞬间方块底边 / 屏幕高度」的比值划分,越接近底部越准)
  PERFECT_ZONE: 0.70,   // 底边位于屏幕下方 30% 区域(或已越过底边)→ PERFECT
  GREAT_ZONE: 0.42,     // 底边位于 42%~70% → GREAT,其余可点区域 → GOOD
  MIN_TAP_ZONE: 0.10,   // 底边还没进入屏幕上方 10% 时点击该轨 = 点空(失败)

  // 计分
  SCORE: { PERFECT: 3, GREAT: 2, GOOD: 1, HOLD_PER_BEAT: 2 },
  STAR_FACTORS: [1.0, 3.0, 5.0],  // 星级阈值 = 系数 × 单圈满分

  // 圈数 / 加速(与《钢琴块2》一致:每圈提速,前三圈发皇冠,之后无限刷分)
  SPEED_STEP: 1.16,
  MAX_CROWNS: 3,
  LAP_GAP_BEATS: 2,       // 两圈之间的空拍
  MISS_GRACE_BEATS: 0.25, // 方块底边越过屏幕底部多少拍后仍未点中 → 判定漏块

  // 复活
  REVIVE_REWIND_VB: 1.0,  // 复活时回退整整一屏的拍数

  // 视觉
  TILE_GAP: 5,            // 方块之间的像素间隙
  VB_BY_DIFF: { 1: 4.2, 2: 4.0, 3: 3.6, 4: 3.2, 5: 2.9 }, // 难度→一屏可见拍数(未指定 vb 时)

  // 键位(4 轨)
  KEYS: { KeyD: 0, KeyF: 1, KeyJ: 2, KeyK: 3 },

  // 经验:exp = score × EXP_PER_SCORE;升到 L+1 级需要 LEVEL_STEP × L 经验
  EXP_PER_SCORE: 0.02,
  LEVEL_STEP: 150,
};
