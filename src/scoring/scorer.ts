import {
  Answer, Question, AxisScore, EthicPolarity, EthicStrength,
  TestResult, Ethic, EthicAxis,
} from '../types';
import { governments, defaultGovernment } from './governments';

const AXES: { axis: EthicAxis; left: EthicPolarity; right: EthicPolarity }[] = [
  { axis: 'authority', left: 'authoritarian', right: 'egalitarian' },
  { axis: 'xeno', left: 'xenophobe', right: 'xenophile' },
  { axis: 'militarism', left: 'militarist', right: 'pacifist' },
  { axis: 'spirituality', left: 'spiritualist', right: 'materialist' },
];

/**
 * 计算单个维度得分
 */
export function scoreAxis(
  answers: Answer[],
  questions: Question[],
  axis: EthicAxis,
): AxisScore {
  const def = AXES.find(a => a.axis === axis)!;
  let leftScore = 0;
  let rightScore = 0;

  for (const ans of answers) {
    const q = questions.find(q => q.id === ans.questionId);
    if (!q) continue;
    const option = q.options[ans.optionIndex];
    leftScore += option.scores[def.left] ?? 0;
    rightScore += option.scores[def.right] ?? 0;
  }

  const total = leftScore + rightScore;
  const percentage = total > 0 ? Math.round((Math.max(leftScore, rightScore) / total) * 100) : 50;
  const dominant = leftScore >= rightScore ? def.left : def.right;

  let strength: EthicStrength = 'none';
  if (total > 0) {
    const ratio = Math.max(leftScore, rightScore) / total;
    if (ratio >= 0.75) strength = 'fanatic';
    else if (ratio >= 0.55) strength = 'normal';
  }

  return {
    axis,
    leftPolarity: def.left,
    rightPolarity: def.right,
    leftScore,
    rightScore,
    dominant,
    strength,
    percentage,
  };
}

/**
 * 计算所有维度得分
 */
export function scoreAllAxes(answers: Answer[], questions: Question[]): AxisScore[] {
  return AXES.map(a => scoreAxis(answers, questions, a.axis));
}

/**
 * 检查是否为格式塔意识
 * 通过计算答案中的 gestalt 得分来判定
 */
function isGestalt(axisScores: AxisScore[], answers: Answer[], questions: Question[]): boolean {
  // 计算 gestalt 总分
  let gestaltScore = 0;
  let totalPossible = 0;

  for (const ans of answers) {
    const q = questions.find(q => q.id === ans.questionId);
    if (!q) continue;
    const option = q.options[ans.optionIndex];
    if (option.scores.gestalt) {
      gestaltScore += option.scores.gestalt;
    }
    // 计算所有选项中的最大 gestalt 分
    const maxGestalt = Math.max(
      q.options[0].scores.gestalt ?? 0,
      q.options[1].scores.gestalt ?? 0,
    );
    totalPossible += maxGestalt;
  }

  // 如果 gestalt 得分占比超过 60%，判定为格式塔
  if (totalPossible > 0 && gestaltScore / totalPossible > 0.6) {
    return true;
  }

  // 备选：如果所有维度得分都很低（表示没有明显倾向），也可能是格式塔
  const totalDivergence = axisScores.reduce((sum, s) => {
    const diff = Math.abs(s.leftScore - s.rightScore);
    const total = s.leftScore + s.rightScore;
    return sum + (total > 0 ? diff / total : 0);
  }, 0);

  return totalDivergence / axisScores.length < 0.15;
}

/**
 * 构建意识形态列表
 */
function buildEthics(axisScores: AxisScore[]): Ethic[] {
  const labels: Record<EthicPolarity, { zh: string; en: string }> = {
    authoritarian: { zh: '威权', en: 'Authoritarian' },
    egalitarian: { zh: '平等', en: 'Egalitarian' },
    xenophobe: { zh: '排外', en: 'Xenophobe' },
    xenophile: { zh: '亲外', en: 'Xenophile' },
    militarist: { zh: '军国', en: 'Militarist' },
    pacifist: { zh: '和平', en: 'Pacifist' },
    spiritualist: { zh: '唯心', en: 'Spiritualist' },
    materialist: { zh: '唯物', en: 'Materialist' },
    gestalt: { zh: '格式塔', en: 'Gestalt' },
  };

  return axisScores
    .filter(s => s.strength !== 'none')
    .map(s => ({
      axis: s.axis,
      polarity: s.dominant,
      strength: s.strength,
      label: `${labels[s.dominant].zh}${s.strength === 'fanatic' ? '·极端' : ''}`,
      labelEn: `${s.strength === 'fanatic' ? 'Fanatic ' : ''}${labels[s.dominant].en}`,
    }));
}

/**
 * 匹配政体
 */
function matchGovernment(
  ethics: Ethic[],
  axisScores: AxisScore[],
  gestalt: boolean,
): { government: typeof governments[0]; score: number }[] {
  const ethicMap = new Map<EthicPolarity, EthicStrength>();
  for (const e of ethics) {
    ethicMap.set(e.polarity, e.strength);
  }

  const scores = governments.map(gov => {
    let score = 0;
    let maxScore = 0;

    // 检查格式塔
    if (gov.requirements.gestalt) {
      maxScore += 10;
      if (gestalt) score += 10;
    }

    // 检查意识形态要求
    if (gov.requirements.ethics) {
      for (const [polarity, requiredStrength] of Object.entries(gov.requirements.ethics)) {
        maxScore += requiredStrength === 'fanatic' ? 8 : 5;
        const actualStrength = ethicMap.get(polarity as EthicPolarity);
        if (actualStrength === requiredStrength) {
          score += requiredStrength === 'fanatic' ? 8 : 5;
        } else if (actualStrength === 'normal' && requiredStrength === 'fanatic') {
          score += 3; // 部分匹配
        }
      }
    }

    return {
      government: gov,
      score: maxScore > 0 ? score / maxScore : 0,
    };
  });

  return scores.sort((a, b) => b.score - a.score);
}

/**
 * 生成完整测试结果
 */
export function generateResult(answers: Answer[], questions: Question[]): TestResult {
  const axisScores = scoreAllAxes(answers, questions);
  const gestalt = isGestalt(axisScores, answers, questions);
  const ethics = gestalt
    ? [{ axis: 'authority' as EthicAxis, polarity: 'gestalt' as EthicPolarity, strength: 'fanatic' as EthicStrength, label: '格式塔·极端', labelEn: 'Gestalt Consciousness' }]
    : buildEthics(axisScores);

  const ranked = matchGovernment(ethics, axisScores, gestalt);
  const best = ranked[0] ?? { government: defaultGovernment, score: 0 };

  return {
    ethics,
    axisScores,
    government: best.government,
    governmentId: best.government.id,
    matchScore: Math.round(best.score * 100),
    alternativeGovernments: ranked.slice(1, 4).map(r => ({
      government: r.government,
      score: Math.round(r.score * 100),
    })),
  };
}

/**
 * 格式化结果为显示文本
 */
export function formatResult(result: TestResult): string {
  const lines: string[] = [];
  const gov = result.government;

  lines.push('');
  lines.push('═══════════════════════════════════════════════════════');
  lines.push('          ★ 群星政体测试结果 ★');
  lines.push('═══════════════════════════════════════════════════════');
  lines.push('');
  lines.push(`  ${gov.icon}  你的政体：${gov.name} (${gov.nameEn})`);
  lines.push('');
  lines.push(`  ${gov.description}`);
  lines.push('');
  lines.push(`  「${gov.flavor}」`);
  lines.push('');
  lines.push('───────────────────────────────────────────────────────');
  lines.push('  意识形态构成：');
  lines.push('');

  for (const ethic of result.ethics) {
    lines.push(`    ${ethic.label} (${ethic.labelEn})`);
  }

  lines.push('');
  lines.push('───────────────────────────────────────────────────────');
  lines.push('  维度分析：');
  lines.push('');

  const axisLabels: Record<string, string> = {
    authority: '权威 ↔ 平等',
    xeno: '排外 ↔ 亲外',
    militarism: '军国 ↔ 和平',
    spirituality: '唯心 ↔ 唯物',
  };

  for (const axis of result.axisScores) {
    const label = axisLabels[axis.axis] ?? axis.axis;
    const bar = makeBar(axis.percentage, 20);
    const dominantLabel = axis.dominant === axis.leftPolarity
      ? axis.leftPolarity
      : axis.rightPolarity;
    lines.push(`    ${label}`);
    lines.push(`    ${bar} ${axis.percentage}% ${dominantLabel}`);
    lines.push('');
  }

  lines.push('───────────────────────────────────────────────────────');
  lines.push(`  匹配度：${result.matchScore}%`);
  lines.push('');

  if (result.alternativeGovernments.length > 0) {
    lines.push('  其他可能的政体：');
    for (const alt of result.alternativeGovernments) {
      lines.push(`    ${alt.government.icon} ${alt.government.name} (${alt.score}%)`);
    }
    lines.push('');
  }

  lines.push('═══════════════════════════════════════════════════════');
  lines.push('');

  return lines.join('\n');
}

function makeBar(percentage: number, width: number): string {
  const filled = Math.round((percentage / 100) * width);
  return '█'.repeat(filled) + '░'.repeat(width - filled);
}
