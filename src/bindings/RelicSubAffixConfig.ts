export type Property =
  | "MaxHP"
  | "Attack"
  | "Defence"
  | "Speed"
  | "CriticalChance"
  | "CriticalDamage"
  | "BreakDamageAddedRatio"
  | "BreakDamageAddedRatioBase"
  | "HealRatio"
  | "MaxSP"
  | "SPRatio"
  | "StatusProbability"
  | "StatusResistance"
  | "CriticalChanceBase"
  | "CriticalDamageBase"
  | "HealRatioBase"
  | "StanceBreakAddedRatio"
  | "SPRatioBase"
  | "StatusProbabilityBase"
  | "StatusResistanceBase"
  | "PhysicalAddedRatio"
  | "PhysicalResistance"
  | "FireAddedRatio"
  | "FireResistance"
  | "IceAddedRatio"
  | "IceResistance"
  | "ThunderAddedRatio"
  | "ThunderResistance"
  | "WindAddedRatio"
  | "WindResistance"
  | "QuantumAddedRatio"
  | "QuantumResistance"
  | "ImaginaryAddedRatio"
  | "ImaginaryResistance"
  | "BaseHP"
  | "HPDelta"
  | "HPAddedRatio"
  | "BaseAttack"
  | "AttackDelta"
  | "AttackAddedRatio"
  | "BaseDefence"
  | "DefenceDelta"
  | "DefenceAddedRatio"
  | "BaseSpeed"
  | "HealTakenRatio"
  | "PhysicalResistanceDelta"
  | "FireResistanceDelta"
  | "IceResistanceDelta"
  | "ThunderResistanceDelta"
  | "WindResistanceDelta"
  | "QuantumResistanceDelta"
  | "ImaginaryResistanceDelta"
  | "SpeedDelta"
  | "SpeedAddedRatio"
  | "AllDamageTypeAddedRatio";

export interface RelicSubAffixConfig {
  affix_id: number;
  base_value: number;
  group_id: number;
  property: Property;
  step_num: number;
  step_value: number;
}