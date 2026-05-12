import { runTest } from './cli/runner';
import { generateResult, formatResult } from './scoring/scorer';

async function main() {
  const args = process.argv.slice(2);
  const shuffle = !args.includes('--no-shuffle');

  let questionsPerCategory = 5;
  const qIdx = args.indexOf('--questions');
  if (qIdx !== -1 && args[qIdx + 1]) {
    questionsPerCategory = parseInt(args[qIdx + 1], 10);
    if (isNaN(questionsPerCategory) || questionsPerCategory < 1) {
      questionsPerCategory = 5;
    }
  }

  try {
    const { answers, questions } = await runTest({
      questionsPerCategory,
      shuffle,
    });

    console.log('  计算结果中...\n');
    const result = generateResult(answers, questions);
    console.log(formatResult(result));
  } catch (err) {
    if (err instanceof Error && err.message.includes('readline')) {
      // 测试模式下的非交互式运行
      console.log('非交互模式，请使用 npm test 运行自动测试');
    } else {
      throw err;
    }
  }
}

main();
