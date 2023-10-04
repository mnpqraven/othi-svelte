export type ParameterizedDescription = string[];

export type AssetPath = string;

export interface AvatarRankConfig {
  desc: ParameterizedDescription;
  icon_path: AssetPath;
  name: string;
  param: string[];
  rank: number;
  rank_ability: string[];
  rank_id: number;
  skill_add_level_list: SkillAddLevelList;
  trigger: string;
  unlock_cost: MiniItem[];
}

export interface SkillAddLevelList {
  [k: string]: number;
}

export interface MiniItem {
  item_id: number;
  item_num: number;
}