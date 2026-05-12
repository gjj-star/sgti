import { Government } from '../types';

/**
 * 群星政体数据库
 * 每个政体包含：名称、描述、风味文本、匹配条件、图标
 */
export const governments: Government[] = [
  // ═══════════════ 格式塔系 ═══════════════
  {
    id: 'hive_mind',
    name: '集体意识',
    nameEn: 'Hive Mind',
    description: '一个统一的生物意识控制着整个文明。没有个体，只有整体。没有分歧，只有统一。',
    flavor: '我们即是全部。个体的消亡是整体的延续。在集体的怀抱中，没有孤独，没有恐惧。',
    requirements: { gestalt: true },
    icon: '🧠',
  },
  {
    id: 'machine_intelligence',
    name: '机械智能',
    nameEn: 'Machine Intelligence',
    description: '由超级人工智能统治的机械文明。效率、逻辑、优化是唯一的价值观。',
    flavor: '计算完成。最优解已确定。执行。有机体的决策充满了冗余和错误，而我们追求完美。',
    requirements: { gestalt: true, ethics: { materialist: 'fanatic' } },
    icon: '🤖',
  },

  // ═══════════════ 威权系 ═══════════════
  {
    id: 'empire',
    name: '银河帝国',
    nameEn: 'Galactic Empire',
    description: '由至高无上的皇帝统治的星际帝国。权力集中，秩序井然，万民臣服。',
    flavor: '星辰之下，唯我独尊。帝国的意志即是法律，皇帝的命令即是真理。',
    requirements: { ethics: { authoritarian: 'fanatic' } },
    icon: '👑',
  },
  {
    id: 'dictatorship',
    name: '军事独裁',
    nameEn: 'Military Dictatorship',
    description: '由铁腕强人领导的军事政权。以力量维持秩序，以恐惧确保服从。',
    flavor: '在我的字典里没有"不可能"这个词。帝国的每一寸领土都由钢铁和鲜血铸就。',
    requirements: { ethics: { authoritarian: 'normal', militarist: 'normal' } },
    icon: '⚔️',
  },
  {
    id: 'oligarchy',
    name: '寡头政体',
    nameEn: 'Oligarchy',
    description: '由少数精英家族掌控的政权。财富和权力在小圈子内流转。',
    flavor: '帝国的命运由我们几个人决定。这不是独裁，这是精英治理。',
    requirements: { ethics: { authoritarian: 'normal' } },
    icon: '🏛️',
  },

  // ═══════════════ 平等系 ═══════════════
  {
    id: 'democracy',
    name: '星际民主',
    nameEn: 'Stellar Democracy',
    description: '每个公民都有投票权的民主政体。人民的声音即是帝国的声音。',
    flavor: '我们不选择最强大的领袖，我们选择最能代表人民的领袖。这就是民主的力量。',
    requirements: { ethics: { egalitarian: 'fanatic' } },
    icon: '🗳️',
  },
  {
    id: 'republic',
    name: '星际共和',
    nameEn: 'Stellar Republic',
    description: '代议制民主政体。公民选举代表，代表制定法律。',
    flavor: '共和制是文明的基石。在代表们的辩论中，真理越辩越明。',
    requirements: { ethics: { egalitarian: 'normal' } },
    icon: '⚖️',
  },

  // ═══════════════ 排外系 ═══════════════
  {
    id: 'purifiers',
    name: '肃正协议',
    nameEn: 'Purifiers',
    description: '以净化银河为使命的极端排外政权。外星种族是必须清除的污染。',
    flavor: '银河属于我们。其他种族只是等待被清除的障碍。这是天命，不是选择。',
    requirements: { ethics: { xenophobe: 'fanatic', militarist: 'normal' } },
    icon: '💀',
  },
  {
    id: 'inward_perfection',
    name: '闭关锁国',
    nameEn: 'Inward Perfection',
    description: '专注于内部发展，对外界漠不关心的孤立主义政权。',
    flavor: '外面的宇宙与我们无关。在我们的围墙之内，一切都是完美的。',
    requirements: { ethics: { xenophobe: 'normal', pacifist: 'normal' } },
    icon: '🏯',
  },
  {
    id: 'xenophobic_democracy',
    name: '民族主义民主',
    nameEn: 'Nationalist Democracy',
    description: '民主但排外的政体。本族公民享有民主权利，外族不受欢迎。',
    flavor: '民主是属于我们的特权。外来者不配分享我们的文明成果。',
    requirements: { ethics: { xenophobe: 'normal', egalitarian: 'normal' } },
    icon: '🛡️',
  },

  // ═══════════════ 亲外系 ═══════════════
  {
    id: 'megacorporation',
    name: '寰宇企业',
    nameEn: 'Megacorporation',
    description: '以利润为导向的星际企业帝国。一切皆可交易，一切皆有价格。',
    flavor: '在寰宇企业，我们不谈政治，只谈生意。让我们把银河变成最大的市场。',
    requirements: { ethics: { xenophile: 'normal', materialist: 'normal' } },
    icon: '💰',
  },
  {
    id: 'federation',
    name: '星际联邦',
    nameEn: 'Galactic Federation',
    description: '多种族联合的联邦政体。团结就是力量，多元就是财富。',
    flavor: '我们不是统治者，我们是伙伴。在联邦的旗帜下，每个种族都有自己的位置。',
    requirements: { ethics: { xenophile: 'fanatic', egalitarian: 'normal' } },
    icon: '🌐',
  },

  // ═══════════════ 军国系 ═══════════════
  {
    id: 'militarist_empire',
    name: '铁血帝国',
    nameEn: 'Iron Empire',
    description: '以军事扩张为国策的军国主义帝国。强大就是正义。',
    flavor: '和平是弱者的幻想。在星辰之间，只有强者才能生存。',
    requirements: { ethics: { militarist: 'fanatic' } },
    icon: '🔥',
  },
  {
    id: 'war_council',
    name: '战争议会',
    nameEn: 'War Council',
    description: '由军事将领组成的寡头政权。一切决策都服务于战争。',
    flavor: '议会的每一次投票都关乎生死。在战争议会，没有和平时期的提案。',
    requirements: { ethics: { militarist: 'normal', authoritarian: 'normal' } },
    icon: '🎯',
  },
  {
    id: 'ruthless_congress',
    name: '无情议院',
    nameEn: 'Ruthless Congress',
    description: '民主但好战的政体。人民投票决定战争，议会批准征服。',
    flavor: '我们是民主的——我们民主地决定谁该被消灭。人民的意志就是战争的号角。',
    requirements: { ethics: { militarist: 'normal', egalitarian: 'normal' } },
    icon: '⚡',
  },

  // ═══════════════ 和平系 ═══════════════
  {
    id: 'peaceful_republic',
    name: '宁和共和国',
    nameEn: 'Serene Republic',
    description: '以和平共处为原则的共和国。外交优先，军事克制。',
    flavor: '战争是外交的失败。在宁和共和国，我们用对话解决一切争端。',
    requirements: { ethics: { pacifist: 'fanatic' } },
    icon: '☮️',
  },
  {
    id: 'serene_monastery',
    name: '宁静宗门',
    nameEn: 'Serene Monastery',
    description: '以修道院式生活为理想的和平唯心政体。',
    flavor: '在宁静中寻找真理，在冥想中理解宇宙。外界的纷争与我们无关。',
    requirements: { ethics: { pacifist: 'normal', spiritualist: 'normal' } },
    icon: '🧘',
  },

  // ═══════════════ 唯心系 ═══════════════
  {
    id: 'theocratic_republic',
    name: '神权共和',
    nameEn: 'Theocratic Republic',
    description: '以宗教信仰为基础的共和政体。神的旨意通过民主程序表达。',
    flavor: '我们的选票是神圣的。每一次投票都是对神意的探询。',
    requirements: { ethics: { spiritualist: 'normal', egalitarian: 'normal' } },
    icon: '⛪',
  },
  {
    id: 'divine_empire',
    name: '神圣帝国',
    nameEn: 'Divine Empire',
    description: '以神权为基础的帝国。统治者是神在人间的代言人。',
    flavor: '朕即天命。质疑皇帝就是质疑神明。帝国的每一道法令都是神圣的旨意。',
    requirements: { ethics: { spiritualist: 'fanatic', authoritarian: 'normal' } },
    icon: '✨',
  },
  {
    id: 'psionic_council',
    name: '灵能议会',
    nameEn: 'Psionic Council',
    description: '由灵能者统治的议会政体。心灵感应取代了投票。',
    flavor: '在灵能的连接中，我们不需要言语。每个思想都是透明的，每个决定都是共鸣的。',
    requirements: { ethics: { spiritualist: 'normal', egalitarian: 'normal' } },
    icon: '🔮',
  },

  // ═══════════════ 唯物系 ═══════════════
  {
    id: 'science_directorate',
    name: '科研理事会',
    nameEn: 'Science Directorate',
    description: '由科学家统治的技术官僚政体。数据驱动一切决策。',
    flavor: '在科研理事会，观点不重要，数据才重要。我们用实验代替辩论。',
    requirements: { ethics: { materialist: 'fanatic' } },
    icon: '🔬',
  },
  {
    id: 'mechanist_empire',
    name: '机械帝国',
    nameEn: 'Mechanist Empire',
    description: '以机械崇拜为基础的威权政体。机器是进步的象征。',
    flavor: '血肉苦弱，机械飞升。在机器的完美中，我们找到了超越凡人的道路。',
    requirements: { ethics: { materialist: 'normal', authoritarian: 'normal' } },
    icon: '⚙️',
  },
  {
    id: 'techno_democracy',
    name: '技术民主',
    nameEn: 'Techno-Democracy',
    description: '以技术能力为基础的民主政体。投票需要通过知识测试。',
    flavor: '在技术民主中，每个公民都是科学家。我们用数据说话，用实验投票。',
    requirements: { ethics: { materialist: 'normal', egalitarian: 'normal' } },
    icon: '💡',
  },

  // ═══════════════ 特殊组合 ═══════════════
  {
    id: 'corporate_hedge_fund',
    name: '对冲基金帝国',
    nameEn: 'Corporate Hedge Fund',
    description: '以金融为核心的星际企业。战争是投资，和平是收益。',
    flavor: '在我们的资产负债表上，整个银河都是待收购的资产。',
    requirements: { ethics: { materialist: 'normal', xenophile: 'normal' } },
    icon: '📈',
  },
  {
    id: 'enlightened_monarchy',
    name: '开明君主制',
    nameEn: 'Enlightened Monarchy',
    description: '以智慧和仁慈为基础的君主政体。',
    flavor: '王冠不仅是权力的象征，更是责任的重量。在开明君主的治下，万民安居。',
    requirements: { ethics: { authoritarian: 'normal', pacifist: 'normal' } },
    icon: '👑',
  },
  {
    id: 'star_empire',
    name: '星辰帝国',
    nameEn: 'Star Empire',
    description: '以征服星辰为目标的扩张帝国。',
    flavor: '银河系是我们的猎场。每一颗恒星都将升起帝国的旗帜。',
    requirements: { ethics: { militarist: 'normal', xenophobe: 'normal' } },
    icon: '⭐',
  },
  {
    id: 'galactic_union',
    name: '银河联盟',
    nameEn: 'Galactic Union',
    description: '以和平与合作为理念的星际联盟。',
    flavor: '在银河联盟中，没有统治者和被统治者，只有伙伴和朋友。',
    requirements: { ethics: { pacifist: 'normal', xenophile: 'normal' } },
    icon: '🌌',
  },
];

/** 默认政体（当没有匹配时使用） */
export const defaultGovernment: Government = {
  id: 'undefined',
  name: '未定义政体',
  nameEn: 'Undefined Government',
  description: '你的意识形态组合过于独特，无法被归类为任何已知政体。也许这本身就是一种力量。',
  flavor: '在群星的宇宙中，有些文明注定要走自己的路。',
  requirements: {},
  icon: '❓',
};
