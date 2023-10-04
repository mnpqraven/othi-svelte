export interface AvatarPromotionConfig {
  attack_add: number[];
  attack_base: number[];
  avatar_id: number;
  base_aggro: number;
  critical_chance: number;
  critical_damage: number;
  defence_add: number[];
  defence_base: number[];
  hpadd: number[];
  hpbase: number[];
  max_level: number[];
  player_level_require: number;
  promotion: number[];
  promotion_cost_list: MiniItem[][];
  speed_base: number;
}

export interface MiniItem {
  item_id: number;
  item_num: number;
}