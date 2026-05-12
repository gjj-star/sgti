/** 意识形态轴 */
export type EthicAxis = 'authority' | 'xeno' | 'militarism' | 'spirituality';

/** 意识形态极性 */
export type EthicPolarity = 'authoritarian' | 'egalitarian'
  | 'xenophobe' | 'xenophile'
  | 'militarist' | 'pacifist'
  | 'spiritualist' | 'materialist'
  | 'gestalt';

/** 意识形态强度 */
export type EthicStrength = 'none' | 'normal' | 'fanatic';

/** 单个意识形态 */
export interface Ethic {
  axis: EthicAxis;
  polarity: EthicPolarity;
  strength: EthicStrength;
  label: string;
  labelEn: string;
}

/** 选项 */
export interface Option {
  text: string;
  scores: Partial<Record<EthicPolarity, number>>;
}

/** 问题 */
export interface Question {
  id: number;
  text: string;
  category: string;
  options: [Option, Option];
}

/** 答案 */
export interface Answer {
  questionId: number;
  optionIndex: 0 | 1;
}

/** 维度得分 */
export interface AxisScore {
  axis: EthicAxis;
  leftPolarity: EthicPolarity;
  rightPolarity: EthicPolarity;
  leftScore: number;
  rightScore: number;
  dominant: EthicPolarity;
  strength: EthicStrength;
  percentage: number;
}

/** 政体 */
export interface Government {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  flavor: string;
  requirements: {
    ethics?: Partial<Record<EthicPolarity, EthicStrength>>;
    gestalt?: boolean;
  };
  icon: string;
}

/** 测试结果 */
export interface TestResult {
  ethics: Ethic[];
  axisScores: AxisScore[];
  government: Government;
  governmentId: string;
  matchScore: number;
  alternativeGovernments: { government: Government; score: number }[];
}

/** 测试配置 */
export interface TestConfig {
  questionsPerCategory: number;
  shuffle: boolean;
}
