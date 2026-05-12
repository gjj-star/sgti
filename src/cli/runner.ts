import * as readline from 'readline';
import { Answer, Question, TestConfig } from '../types';
import { questionBank } from '../questions/questionBank';

/**
 * 运行交互式测试
 */
export async function runTest(config: TestConfig): Promise<{ answers: Answer[]; questions: Question[] }> {
  let questions = [...questionBank];

  if (config.shuffle) {
    questions = shuffleArray(questions);
  }

  // 每个类别取指定数量
  const categories = [...new Set(questions.map(q => q.category))];
  const selected: Question[] = [];
  for (const cat of categories) {
    const catQuestions = questions.filter(q => q.category === cat);
    const count = Math.min(config.questionsPerCategory, catQuestions.length);
    selected.push(...catQuestions.slice(0, count));
  }

  // 打乱顺序
  if (config.shuffle) {
    shuffleArray(selected);
  }

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const ask = (q: string): Promise<string> =>
    new Promise(resolve => rl.question(q, resolve));

  console.log('');
  console.log('═══════════════════════════════════════════════════════');
  console.log('          ★ 群星政体测试 (Stellaris Government Quiz) ★');
  console.log('═══════════════════════════════════════════════════════');
  console.log('');
  console.log('  回答以下问题，找出你在群星宇宙中的政体归属。');
  console.log('  每题选择 1 或 2，没有对错之分。');
  console.log('');

  const answers: Answer[] = [];

  for (let i = 0; i < selected.length; i++) {
    const q = selected[i];
    console.log(`───────────────────────────────────────────────────────`);
    console.log(`  问题 ${i + 1}/${selected.length}`);
    console.log('');
    console.log(`  ${q.text}`);
    console.log('');
    console.log(`    [1] ${q.options[0].text}`);
    console.log(`    [2] ${q.options[1].text}`);
    console.log('');

    let valid = false;
    while (!valid) {
      const input = await ask('  你的选择 (1/2): ');
      const trimmed = input.trim();
      if (trimmed === '1' || trimmed === '2') {
        answers.push({
          questionId: q.id,
          optionIndex: trimmed === '1' ? 0 : 1,
        });
        valid = true;
      } else {
        console.log('  ⚠ 请输入 1 或 2');
      }
    }
    console.log('');
  }

  rl.close();

  return { answers, questions: selected };
}

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
