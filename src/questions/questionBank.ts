import { Question } from '../types';

/**
 * 群星政体测试题库
 * 每个类别10题，共50题，覆盖5个维度
 * 问题以群星世界观为背景，通过场景选择测试意识形态倾向
 */
export const questionBank: Question[] = [
  // ═══════════════════════════════════════
  // 权威 vs 平等 (Authority) — 10题
  // ═══════════════════════════════════════
  {
    id: 1,
    text: '你的星际帝国刚刚发现一颗资源丰富的行星。最佳的开发方式是？',
    category: 'authority',
    options: [
      { text: '由中央政府统一规划开发，资源归国家所有', scores: { authoritarian: 2 } },
      { text: '开放给所有公民自由申请开发权，市场竞争决定', scores: { egalitarian: 2 } },
    ],
  },
  {
    id: 2,
    text: '帝国面临重大决策时，你认为最好的方式是？',
    category: 'authority',
    options: [
      { text: '由最智慧的领袖独断专行，效率至上', scores: { authoritarian: 2 } },
      { text: '全民公投，每个人的声音都应被听到', scores: { egalitarian: 2 } },
    ],
  },
  {
    id: 3,
    text: '你的殖民地出现了社会阶层分化，你会？',
    category: 'authority',
    options: [
      { text: '强化等级制度，让优秀的人统治平庸的人', scores: { authoritarian: 2 } },
      { text: '推动社会流动，让每个人都有平等上升的机会', scores: { egalitarian: 2 } },
    ],
  },
  {
    id: 4,
    text: '面对帝国中的异见者，你的态度是？',
    category: 'authority',
    options: [
      { text: '稳定压倒一切，必要时限制某些自由', scores: { authoritarian: 2 } },
      { text: '言论自由是基本权利，即使我不认同也要捍卫', scores: { egalitarian: 2 } },
    ],
  },
  {
    id: 5,
    text: '你认为帝国的法律应该？',
    category: 'authority',
    options: [
      { text: '由精英阶层制定，他们更懂得什么是对帝国好的', scores: { authoritarian: 2 } },
      { text: '由全体公民共同制定，法律面前人人平等', scores: { egalitarian: 2 } },
    ],
  },
  {
    id: 6,
    text: '帝国的教育体系应该如何运作？',
    category: 'authority',
    options: [
      { text: '因材施教，天赋决定教育方向，精英培养精英', scores: { authoritarian: 2 } },
      { text: '普及教育，每个孩子都应该获得同等的教育机会', scores: { egalitarian: 2 } },
    ],
  },
  {
    id: 7,
    text: '你的帝国需要一位新的领导者，你倾向于？',
    category: 'authority',
    options: [
      { text: '由前任指定或家族继承，保持稳定', scores: { authoritarian: 2 } },
      { text: '通过公开选举产生，人民的选择最重要', scores: { egalitarian: 2 } },
    ],
  },
  {
    id: 8,
    text: '面对帝国的经济危机，你会？',
    category: 'authority',
    options: [
      { text: '集中资源，统一调配，牺牲部分人的利益保全大局', scores: { authoritarian: 2 } },
      { text: '公开信息，让公民参与决策，共同承担后果', scores: { egalitarian: 2 } },
    ],
  },
  {
    id: 9,
    text: '你如何看待帝国中的特权阶层？',
    category: 'authority',
    options: [
      { text: '特权是激励精英的必要手段', scores: { authoritarian: 2 } },
      { text: '特权是不公正的根源，应该被消除', scores: { egalitarian: 2 } },
    ],
  },
  {
    id: 10,
    text: '帝国的军事指挥权应该属于？',
    category: 'authority',
    options: [
      { text: '最高领袖，命令必须绝对服从', scores: { authoritarian: 2 } },
      { text: '由议会监督，军事决策需要民主审议', scores: { egalitarian: 2 } },
    ],
  },

  // ═══════════════════════════════════════
  // 排外 vs 亲外 (Xeno) — 10题
  // ═══════════════════════════════════════
  {
    id: 11,
    text: '你的舰队首次遭遇外星文明，你会？',
    category: 'xeno',
    options: [
      { text: '保持警惕，先了解他们的实力再决定态度', scores: { xenophobe: 2 } },
      { text: '主动接触，开启外交对话，探索合作可能', scores: { xenophile: 2 } },
    ],
  },
  {
    id: 12,
    text: '外星难民请求进入你的帝国避难，你？',
    category: 'xeno',
    options: [
      { text: '拒绝，我们的资源应该留给自己的人民', scores: { xenophobe: 2 } },
      { text: '接纳他们，多元文化让帝国更强大', scores: { xenophile: 2 } },
    ],
  },
  {
    id: 13,
    text: '你发现了一个原始文明的星球，你会？',
    category: 'xeno',
    options: [
      { text: '观察但不干涉，让他们自然发展', scores: { xenophobe: 1, pacifist: 1 } },
      { text: '主动接触，分享我们的知识和技术', scores: { xenophile: 2 } },
    ],
  },
  {
    id: 14,
    text: '帝国中出现了外星裔公民的权利诉求，你？',
    category: 'xeno',
    options: [
      { text: '他们应该适应我们的文化，而不是改变我们的传统', scores: { xenophobe: 2 } },
      { text: '尊重他们的文化差异，推动多元共融', scores: { xenophile: 2 } },
    ],
  },
  {
    id: 15,
    text: '一个外星帝国提议建立星际贸易联盟，你？',
    category: 'xeno',
    options: [
      { text: '警惕经济依赖，保持自主发展', scores: { xenophobe: 2 } },
      { text: '欣然接受，贸易促进和平与繁荣', scores: { xenophile: 2 } },
    ],
  },
  {
    id: 16,
    text: '你的科学家发现外星生物的独特基因可以改良你的种族，你？',
    category: 'xeno',
    options: [
      { text: '拒绝，保持种族纯净是最重要的', scores: { xenophobe: 2 } },
      { text: '研究并应用，进化需要开放的心态', scores: { xenophile: 2 } },
    ],
  },
  {
    id: 17,
    text: '面对一个友善但科技落后的外星文明，你？',
    category: 'xeno',
    options: [
      { text: '他们的资源对我们更有价值', scores: { xenophobe: 2 } },
      { text: '帮助他们发展，共同进步', scores: { xenophile: 2 } },
    ],
  },
  {
    id: 18,
    text: '帝国议会讨论是否允许外星文化作品传播，你？',
    category: 'xeno',
    options: [
      { text: '限制传播，保护本土文化不受侵蚀', scores: { xenophobe: 2 } },
      { text: '文化交流丰富精神生活，应该鼓励', scores: { xenophile: 2 } },
    ],
  },
  {
    id: 19,
    text: '你的帝国发现了古老的外星遗迹，你？',
    category: 'xeno',
    options: [
      { text: '封锁研究，外星技术可能带来不可控的风险', scores: { xenophobe: 2 } },
      { text: '深入研究，古代文明的智慧值得学习', scores: { xenophile: 1, materialist: 1 } },
    ],
  },
  {
    id: 20,
    text: '一个外星帝国邀请你加入星际联合国，你？',
    category: 'xeno',
    options: [
      { text: '拒绝，我们的命运应该掌握在自己手中', scores: { xenophobe: 2 } },
      { text: '加入，在更大的舞台上发出我们的声音', scores: { xenophile: 2 } },
    ],
  },

  // ═══════════════════════════════════════
  // 军国 vs 和平 (Militarism) — 10题
  // ═══════════════════════════════════════
  {
    id: 21,
    text: '邻国的军事实力不断增长，你会？',
    category: 'militarism',
    options: [
      { text: '先发制人，趁他们还没准备好时发动攻击', scores: { militarist: 2 } },
      { text: '加强防御，通过外交途径化解紧张', scores: { pacifist: 2 } },
    ],
  },
  {
    id: 22,
    text: '帝国的预算分配，你更倾向于？',
    category: 'militarism',
    options: [
      { text: '优先发展军事力量，强大才能安全', scores: { militarist: 2 } },
      { text: '投资民生和科技，繁荣带来真正的安全', scores: { pacifist: 2 } },
    ],
  },
  {
    id: 23,
    text: '一个弱小的文明占据了你需要的战略要地，你？',
    category: 'militarism',
    options: [
      { text: '以实力说话，这是弱肉强食的宇宙', scores: { militarist: 2 } },
      { text: '寻找双赢方案，和平共处', scores: { pacifist: 2 } },
    ],
  },
  {
    id: 24,
    text: '你如何看待战争？',
    category: 'militarism',
    options: [
      { text: '战争是文明进步的催化剂', scores: { militarist: 2 } },
      { text: '战争是最后的手段，和平才是目标', scores: { pacifist: 2 } },
    ],
  },
  {
    id: 25,
    text: '帝国的青年教育中，军事训练应该？',
    category: 'militarism',
    options: [
      { text: '全民皆兵，每个公民都是战士', scores: { militarist: 2 } },
      { text: '自愿参军，尊重个人选择', scores: { pacifist: 2 } },
    ],
  },
  {
    id: 26,
    text: '面对海盗的骚扰，你的长期策略是？',
    category: 'militarism',
    options: [
      { text: '组建远征军，彻底消灭海盗巢穴', scores: { militarist: 2 } },
      { text: '加强巡逻防御，同时寻求根源解决方案', scores: { pacifist: 2 } },
    ],
  },
  {
    id: 27,
    text: '你认为帝国的荣耀来自？',
    category: 'militarism',
    options: [
      { text: '征服星辰大海，让帝国的旗帜插遍银河', scores: { militarist: 2 } },
      { text: '建设繁荣文明，让人民安居乐业', scores: { pacifist: 2 } },
    ],
  },
  {
    id: 28,
    text: '一个敌对帝国提出和平谈判，你？',
    category: 'militarism',
    options: [
      { text: '谈判是弱者的表现，继续进攻', scores: { militarist: 2 } },
      { text: '认真考虑，和平比胜利更珍贵', scores: { pacifist: 2 } },
    ],
  },
  {
    id: 29,
    text: '你的帝国需要选择一种军事学说，你倾向于？',
    category: 'militarism',
    options: [
      { text: '进攻是最好的防御，全面压制作战', scores: { militarist: 2 } },
      { text: '不对称战争，以最小代价达成目标', scores: { pacifist: 1, materialist: 1 } },
    ],
  },
  {
    id: 30,
    text: '银河系的未来应该由什么来决定？',
    category: 'militarism',
    options: [
      { text: '实力，强者书写历史', scores: { militarist: 2 } },
      { text: '对话，所有文明都有发言权', scores: { pacifist: 1, egalitarian: 1 } },
    ],
  },

  // ═══════════════════════════════════════
  // 唯心 vs 唯物 (Spirituality) — 10题
  // ═══════════════════════════════════════
  {
    id: 31,
    text: '你的科学家发现了灵能现象的证据，你？',
    category: 'spirituality',
    options: [
      { text: '深入研究灵能，这是精神超越的途径', scores: { spiritualist: 2 } },
      { text: '用科学方法验证，不能被迷信蒙蔽', scores: { materialist: 2 } },
    ],
  },
  {
    id: 32,
    text: '帝国的公民开始信仰一种新宗教，你？',
    category: 'spirituality',
    options: [
      { text: '支持宗教发展，信仰给人力量和方向', scores: { spiritualist: 2 } },
      { text: '推广科学教育，理性才是文明的基石', scores: { materialist: 2 } },
    ],
  },
  {
    id: 33,
    text: '面对死亡，你更相信？',
    category: 'spirituality',
    options: [
      { text: '灵魂不灭，死亡只是另一种存在的开始', scores: { spiritualist: 2 } },
      { text: '生命是物质的，通过科技可以延续甚至永生', scores: { materialist: 2 } },
    ],
  },
  {
    id: 34,
    text: '你认为文明的最高成就是？',
    category: 'spirituality',
    options: [
      { text: '精神觉醒，理解宇宙的深层意义', scores: { spiritualist: 2 } },
      { text: '科技突破，掌握改造宇宙的力量', scores: { materialist: 2 } },
    ],
  },
  {
    id: 35,
    text: '你的帝国发现了一个神殿星球，你？',
    category: 'spirituality',
    options: [
      { text: '保护并朝圣，这是神圣之地', scores: { spiritualist: 2 } },
      { text: '研究其构造，了解古代文明的技术', scores: { materialist: 2 } },
    ],
  },
  {
    id: 36,
    text: '人工智能发展到了接近意识的水平，你？',
    category: 'spirituality',
    options: [
      { text: '警惕，机器不应拥有灵魂', scores: { spiritualist: 2 } },
      { text: '欢迎，这是进化的自然步骤', scores: { materialist: 2 } },
    ],
  },
  {
    id: 37,
    text: '你如何看待宇宙的本质？',
    category: 'spirituality',
    options: [
      { text: '宇宙有其神圣的目的和秩序', scores: { spiritualist: 2 } },
      { text: '宇宙是物质和能量的随机组合', scores: { materialist: 2 } },
    ],
  },
  {
    id: 38,
    text: '帝国面临选择：投资灵能研究还是机械研究？',
    category: 'spirituality',
    options: [
      { text: '灵能研究，精神力量是最终的进化方向', scores: { spiritualist: 2 } },
      { text: '机械研究，科技是解决一切问题的钥匙', scores: { materialist: 2 } },
    ],
  },
  {
    id: 39,
    text: '你认为什么能给帝国人民带来真正的幸福？',
    category: 'spirituality',
    options: [
      { text: '精神信仰和内心的平静', scores: { spiritualist: 2 } },
      { text: '物质丰裕和技术便利', scores: { materialist: 2 } },
    ],
  },
  {
    id: 40,
    text: '一个古老的存在声称自己是神，你？',
    category: 'spirituality',
    options: [
      { text: '敬畏并探究其神圣本质', scores: { spiritualist: 2 } },
      { text: '分析其本质，不过是强大的实体罢了', scores: { materialist: 2 } },
    ],
  },

  // ═══════════════════════════════════════
  // 格式塔 (Gestalt) — 10题
  // ═══════════════════════════════════════
  {
    id: 41,
    text: '如果可以重新设计你的文明，你希望？',
    category: 'gestalt',
    options: [
      { text: '所有个体共享一个意识，消除分歧', scores: { gestalt: 2 } },
      { text: '保持个体独立性，多元才有创造力', scores: { egalitarian: 1, xenophile: 1 } },
    ],
  },
  {
    id: 42,
    text: '你认为个体意识是？',
    category: 'gestalt',
    options: [
      { text: '进化的障碍，统一意识才是终极形态', scores: { gestalt: 2 } },
      { text: '文明的基石，每个个体都有独特价值', scores: { egalitarian: 2 } },
    ],
  },
  {
    id: 43,
    text: '面对宇宙的浩瀚，你感到？',
    category: 'gestalt',
    options: [
      { text: '我是整体的一部分，与万物相连', scores: { gestalt: 1, spiritualist: 1 } },
      { text: '我是独立的个体，要在这浩瀚中留下自己的印记', scores: { egalitarian: 1, militarist: 1 } },
    ],
  },
  {
    id: 44,
    text: '你的帝国如何处理内部矛盾？',
    category: 'gestalt',
    options: [
      { text: '消除矛盾的根源——个体差异本身', scores: { gestalt: 2 } },
      { text: '通过对话和妥协解决，矛盾是进步的动力', scores: { egalitarian: 2 } },
    ],
  },
  {
    id: 45,
    text: '你更向往哪种存在方式？',
    category: 'gestalt',
    options: [
      { text: '没有孤独，没有误解，完美的统一', scores: { gestalt: 2 } },
      { text: '有欢笑有泪水，有爱有恨的完整人生', scores: { egalitarian: 1, spiritualist: 1 } },
    ],
  },
  {
    id: 46,
    text: '如果能选择进化方向，你选？',
    category: 'gestalt',
    options: [
      { text: '与同胞融为一体，成为更大的存在', scores: { gestalt: 2 } },
      { text: '保持自我，发展独特的个人能力', scores: { egalitarian: 1, materialist: 1 } },
    ],
  },
  {
    id: 47,
    text: '你如何看待"效率"？',
    category: 'gestalt',
    options: [
      { text: '效率至上，个体情感是不必要的噪音', scores: { gestalt: 1, materialist: 1 } },
      { text: '效率重要，但不能以牺牲人性为代价', scores: { egalitarian: 1, spiritualist: 1 } },
    ],
  },
  {
    id: 48,
    text: '帝国需要牺牲少数人来拯救多数人，你？',
    category: 'gestalt',
    options: [
      { text: '毫不犹豫，整体利益高于一切', scores: { gestalt: 1, authoritarian: 1 } },
      { text: '寻找第三条路，每个生命都有价值', scores: { egalitarian: 2 } },
    ],
  },
  {
    id: 49,
    text: '你认为"自由意志"是？',
    category: 'gestalt',
    options: [
      { text: '一种幻觉，集体意志才是真实的', scores: { gestalt: 2 } },
      { text: '最宝贵的东西，值得用一切去捍卫', scores: { egalitarian: 2 } },
    ],
  },
  {
    id: 50,
    text: '最终，你希望你的文明被记住为？',
    category: 'gestalt',
    options: [
      { text: '一个完美的整体，没有内耗，没有分裂', scores: { gestalt: 2 } },
      { text: '一个多元的联盟，每个成员都被尊重', scores: { egalitarian: 1, xenophile: 1 } },
    ],
  },
];
