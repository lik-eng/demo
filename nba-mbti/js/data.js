/* ================================================================
   NBA STAR MBTI — 数据中心
   32位NBA球星对应16种MBTI人格（每类型2人）+ 20道测试题 + 雷达图属性
   ================================================================ */

const NBA_STARS = [
  // ================================================================
  // ISTJ — 物流师：严谨、可靠、传统、务实
  // ================================================================
  {
    id: "tim-duncan",
    name: "蒂姆·邓肯",
    nameEn: "Tim Duncan",
    nickname: "石佛 / The Big Fundamental",
    team: "圣安东尼奥马刺",
    position: "大前锋 / 中锋",
    mbtiType: "ISTJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Tim_Duncan.jpg/640px-Tim_Duncan.jpg",
    traits: ["纪律严明", "可靠稳健", "有条不紊", "忠诚如一"],
    strengths: ["低位脚步大师", "防守体系核心", "19赛季始终如一", "沉默的领导力"],
    description: "终极的ISTJ——邓肯的比赛建立在基本功、重复和安静的卓越之上。他从不追逐聚光灯，却用始终如一的稳定性赢得了所有人的尊重。就像ISTJ人格一样，他重视传统（马刺体系），履行每一项职责（防守、篮板、得分），以身作则而非言语领导。他的打板投篮是NBA史上最可靠的武器之一——千锤百炼、精准异常、几乎不可阻挡。",
    signatureMove: "45°打板投篮",
    twoKRating: 97,
    accolades: "5届NBA总冠军·2届MVP·15届全明星·名人堂",
    dimensionScores: { E:0, I:5, S:5, N:0, T:4, F:1, J:5, P:0 },
    radarScores: { scoring: 85, defense: 98, playmaking: 75, athleticism: 70, bbiq: 97, leadership: 90 }
  },
  {
    id: "david-robinson",
    name: "大卫·罗宾逊",
    nameEn: "David Robinson",
    nickname: "海军上将 / The Admiral",
    team: "圣安东尼奥马刺",
    position: "中锋",
    mbtiType: "ISTJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/David_Robinson_%28cropped%29.jpg/640px-David_Robinson_%28cropped%29.jpg",
    traits: ["自律", "正直", "绅士", "沉着"],
    strengths: ["攻防一体", "盖帽大师", "海军服役背景", "社区楷模"],
    description: "大卫·罗宾逊是ISTJ的典范——海军学院毕业，服役两年后才进入NBA，将纪律和责任感刻在骨子里。他的比赛风格如同一台精密运转的机器：防守端的封盖时机完美无瑕，进攻端的脚步扎实有力。和马刺另一位ISTJ邓肯组成'双塔'时，两人用无可挑剔的职业精神定义了马刺文化。场外的他同样是楷模——慈善、教育、回馈社区，ISTJ的责任感在他身上体现得淋漓尽致。",
    signatureMove: "转身跳投 / 排球式封盖",
    twoKRating: 96,
    accolades: "2届NBA总冠军·1届MVP·10届全明星·名人堂·最佳防守球员",
    dimensionScores: { E:0, I:5, S:5, N:0, T:5, F:0, J:5, P:0 },
    radarScores: { scoring: 88, defense: 97, playmaking: 70, athleticism: 92, bbiq: 93, leadership: 88 }
  },

  // ================================================================
  // ISTP — 鉴赏家：冷静、技术型、独立、实用主义
  // ================================================================
  {
    id: "kawhi-leonard",
    name: "科怀·伦纳德",
    nameEn: "Kawhi Leonard",
    nickname: "小卡 / The Klaw",
    team: "洛杉矶快船",
    position: "小前锋",
    mbtiType: "ISTP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kawhi_Leonard_%2851915070835%29_%28cropped%29.jpg/640px-Kawhi_Leonard_%2851915070835%29_%28cropped%29.jpg",
    traits: ["善于分析", "独立自主", "沉着冷静", "实用主义"],
    strengths: ["攻防一体精英", "大场面沉着", "防守嗅觉顶级", "中距离精准"],
    description: "ISTP'鉴赏家'——伦纳德是NBA最安静的技术大师。他用机器般的精准分析比赛，从不喜怒形于色。那双闻名遐迩的大手以手术刀般的时机切掉对手的球，然后冷静地投进中距离跳投。像ISTP一样，他极度独立，让工作成果说话，在高压时刻凭借纯粹的实战掌控力统治赛场。'The Klaw'不需要说话，他的比赛已经说明了一切。",
    signatureMove: "死亡缠绕 / 中距离干拔",
    twoKRating: 95,
    accolades: "2届NBA总冠军·2届FMVP·2届最佳防守球员·5届全明星",
    dimensionScores: { E:0, I:5, S:4, N:1, T:5, F:0, J:0, P:5 },
    radarScores: { scoring: 92, defense: 97, playmaking: 72, athleticism: 85, bbiq: 90, leadership: 78 }
  },
  {
    id: "shai-gilgeous-alexander",
    name: "谢伊·吉尔杰斯-亚历山大",
    nameEn: "Shai Gilgeous-Alexander",
    nickname: "SGA",
    team: "俄克拉荷马雷霆",
    position: "控球后卫",
    mbtiType: "ISTP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shai_Gilgeous-Alexander_%28cropped%29.jpg/640px-Shai_Gilgeous-Alexander_%28cropped%29.jpg",
    traits: ["冷静沉着", "技术精湛", "节奏独特", "低调务实"],
    strengths: ["诡异节奏突破", "中距离终结", "防守抢断", "关键时刻得分"],
    description: "SGA是新一代ISTP的代表——他用自己的节奏打球，不疾不徐，却总能精确地到达他想到的位置。他的突破没有任何多余动作，每一次变向都像经过精密计算。像典型的ISTP一样，他不喜欢过多曝光，不追求流量，只是在场上默默地用实用主义的方式解决一个又一个防守者。他在雷霆的崛起不是靠炒作，而是靠一次次冷静的、技术性的输出——这就是ISTP的方式。",
    signatureMove: "诡异节奏突破 / 急停中投",
    twoKRating: 94,
    accolades: "2届全明星·最佳阵容一阵·年度最佳进步球员",
    dimensionScores: { E:0, I:5, S:4, N:1, T:5, F:0, J:0, P:5 },
    radarScores: { scoring: 93, defense: 84, playmaking: 80, athleticism: 82, bbiq: 90, leadership: 76 }
  },

  // ================================================================
  // ESTP — 企业家：大胆、行动派、竞争心强、富有魅力
  // ================================================================
  {
    id: "michael-jordan",
    name: "迈克尔·乔丹",
    nameEn: "Michael Jordan",
    nickname: "飞人 / His Airness",
    team: "芝加哥公牛",
    position: "得分后卫",
    mbtiType: "ESTP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Michael_Jordan_in_2014.jpg/640px-Michael_Jordan_in_2014.jpg",
    traits: ["极度好胜", "大胆果敢", "行动至上", "魅力非凡"],
    strengths: ["杀手本能", "空中艺术", "防守韧劲", "关键时刻"],
    description: "终极的ESTP'企业家'——乔丹是体育史上最具竞争心的运动员。大胆、戏剧化、永远活在当下，MJ在最大的舞台上绽放最耀眼的光芒。他的比赛建立在爆发性行动之上：翱翔扣篮、杂耍上篮、铁血防守。像ESTP一样，他直接、务实、极具说服力——他不是要击败你，而是要让你相信自己从来就没有机会。那个耸肩、那场流感之战、那最后一投——都是纯粹的ESTP表演。",
    signatureMove: "后仰跳投 / 滞空拉杆",
    twoKRating: 99,
    accolades: "6届NBA总冠军·5届MVP·6届FMVP·14届全明星·名人堂",
    dimensionScores: { E:5, I:0, S:5, N:0, T:4, F:1, J:0, P:5 },
    radarScores: { scoring: 99, defense: 95, playmaking: 82, athleticism: 98, bbiq: 96, leadership: 92 }
  },
  {
    id: "charles-barkley",
    name: "查尔斯·巴克利",
    nameEn: "Charles Barkley",
    nickname: "飞猪 / Sir Charles",
    team: "菲尼克斯太阳",
    position: "大前锋",
    mbtiType: "ESTP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Charles_Barkley_%28cropped%29.jpg/640px-Charles_Barkley_%28cropped%29.jpg",
    traits: ["直言不讳", "勇猛无畏", "行动派", "幽默真实"],
    strengths: ["篮板怪兽", "低位碾压", "快攻推进", "永不言弃"],
    description: "巴克利是ESTP的真实化身——心直口快、行动力爆表，从不拐弯抹角。身高不足2米的他硬是靠着蛮力和意志在长人如林的禁区里翻江倒海，拿下篮板王。他的比赛风格像他的性格一样：直接、暴力、绝不退缩。退役后转型为最受欢迎的球评，依然保持ESTP本色——想说什么说什么，不在乎任何人怎么想。'我不是一个榜样'——这句话只有ESTP才能理直气壮地说出来。",
    signatureMove: "低位背打碾压 / 快攻暴扣",
    twoKRating: 95,
    accolades: "1届MVP·11届全明星·篮板王·名人堂",
    dimensionScores: { E:5, I:0, S:5, N:0, T:3, F:2, J:0, P:5 },
    radarScores: { scoring: 90, defense: 75, playmaking: 72, athleticism: 88, bbiq: 85, leadership: 82 }
  },

  // ================================================================
  // ESTJ — 总经理：执行者、完美主义、果断、目标驱动
  // ================================================================
  {
    id: "kobe-bryant",
    name: "科比·布莱恩特",
    nameEn: "Kobe Bryant",
    nickname: "黑曼巴 / Black Mamba",
    team: "洛杉矶湖人",
    position: "得分后卫",
    mbtiType: "ESTJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Kobe_Bryant_2014.jpg/640px-Kobe_Bryant_2014.jpg",
    traits: ["极致追求", "完美主义", "果断坚决", "永不停歇"],
    strengths: ["脚步大师", "全能得分", "精神韧性", "以身作则"],
    description: "ESTJ'总经理'——科比是永不松懈的执行力的定义。他的'曼巴精神'是经典的ESTJ：结构化、高标准、永远追求卓越。科比以CEO的思维打篮球——每个回合都有计划，每次训练都有目标，每个队友都要达到他的标准。他那传奇的工作态度（凌晨4点训练、痴迷研究录像）和关键时刻的能力让他成为史上最令人畏惧的竞争者之一。他要的不只是赢，而是精进赢的过程。",
    signatureMove: "后仰跳投 / 梦幻脚步",
    twoKRating: 98,
    accolades: "5届NBA总冠军·1届MVP·2届FMVP·18届全明星·名人堂",
    dimensionScores: { E:4, I:1, S:5, N:0, T:5, F:0, J:5, P:0 },
    radarScores: { scoring: 98, defense: 92, playmaking: 80, athleticism: 90, bbiq: 95, leadership: 88 }
  },
  {
    id: "larry-bird",
    name: "拉里·伯德",
    nameEn: "Larry Bird",
    nickname: "大鸟 / Larry Legend",
    team: "波士顿凯尔特人",
    position: "小前锋 / 大前锋",
    mbtiType: "ESTJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Larry_Bird_%28cropped%29.jpg/640px-Larry_Bird_%28cropped%29.jpg",
    traits: ["极度自信", "执行力强", "战术大师", "强硬"],
    strengths: ["全能进攻", "历史级投射", "篮板嗅觉", "关键球能力"],
    description: "拉里·伯德是ESTJ的完美执行者——他也许不是最快、跳得最高的，但他是最有条理、最高效的球员。每一场比赛，他都像下棋一样提前预判十步，然后用精准的执行力兑现。他的垃圾话不是空洞的挑衅，而是对自己执行力的绝对自信——'我要在这里绝杀你'，然后他真的在那里绝杀你。像ESTJ一样，伯德相信结构、计划和执行力，他用这三个东西摧毁了一切对手。",
    signatureMove: "后仰三分 / 不看人传球",
    twoKRating: 97,
    accolades: "3届NBA总冠军·3届MVP·2届FMVP·12届全明星·名人堂",
    dimensionScores: { E:3, I:2, S:5, N:0, T:5, F:0, J:5, P:0 },
    radarScores: { scoring: 94, defense: 82, playmaking: 88, athleticism: 68, bbiq: 98, leadership: 94 }
  },

  // ================================================================
  // ISFJ — 守卫者：忠诚、奉献、谦逊、保护者
  // ================================================================
  {
    id: "dirk-nowitzki",
    name: "德克·诺维茨基",
    nameEn: "Dirk Nowitzki",
    nickname: "德国战车 / The German",
    team: "达拉斯独行侠",
    position: "大前锋",
    mbtiType: "ISFJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Dirk_Nowitzki_%2848727869378%29_%28cropped%29.jpg/640px-Dirk_Nowitzki_%2848727869378%29_%28cropped%29.jpg",
    traits: ["忠诚", "稳定", "谦逊", "可靠"],
    strengths: ["金鸡独立", "21年一队", "2011冠军之旅", "安静稳定"],
    description: "ISFJ'守卫者'——诺维茨基是忠诚与稳定卓越的化身。他将整个21年职业生涯献给一支球队，一路上重新定义了七尺长人的打法。像ISFJ一样，德克谦逊、勤勉、深深致力于他的社区（达拉斯）。他那标志性的金鸡独立后仰跳投之所以无解，不是靠运动天赋，而是靠数千小时专注的练习。ISFJ守护他们珍视的东西——德克守护了达拉斯篮球二十年。",
    signatureMove: "金鸡独立后仰跳投",
    twoKRating: 95,
    accolades: "1届NBA总冠军·1届MVP·1届FMVP·14届全明星",
    dimensionScores: { E:1, I:4, S:5, N:0, T:0, F:5, J:4, P:1 },
    radarScores: { scoring: 93, defense: 65, playmaking: 68, athleticism: 72, bbiq: 88, leadership: 85 }
  },
  {
    id: "yao-ming",
    name: "姚明",
    nameEn: "Yao Ming",
    nickname: "移动长城 / The Great Wall",
    team: "休斯顿火箭",
    position: "中锋",
    mbtiType: "ISFJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Yao_Ming_%28cropped%29.jpg/640px-Yao_Ming_%28cropped%29.jpg",
    traits: ["谦逊", "勤奋", "责任感", "坚韧"],
    strengths: ["柔和手感", "勾手无解", "身高优势", "文化桥梁"],
    description: "姚明是ISFJ的最佳代表之一——谦逊、勤奋，带着沉重的责任感成为中美篮球的桥梁。他从未因聚光灯而膨胀，始终用最朴实的方式回馈每一份期待：更努力的训练、更扎实的脚步、更柔和的勾手。像ISFJ一样，他深深执着于责任——对国家、对球队、对球迷——即使伤病缠身也一次次回归赛场。他不仅是一位伟大的球员，更是一个温柔而坚定的守护者。",
    signatureMove: "转身勾手 / 中距离跳投",
    twoKRating: 93,
    accolades: "8届全明星·5次最佳阵容·名人堂",
    dimensionScores: { E:0, I:5, S:5, N:0, T:1, F:4, J:5, P:0 },
    radarScores: { scoring: 88, defense: 82, playmaking: 65, athleticism: 60, bbiq: 85, leadership: 80 }
  },

  // ================================================================
  // ISFP — 探险家：艺术型、个人主义、感性、审美
  // ================================================================
  {
    id: "kyrie-irving",
    name: "凯里·欧文",
    nameEn: "Kyrie Irving",
    nickname: "德鲁大叔 / Uncle Drew",
    team: "达拉斯独行侠",
    position: "控球后卫",
    mbtiType: "ISFP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Kyrie_Irving_%2851814895186%29_%28cropped%29.jpg/640px-Kyrie_Irving_%2851814895186%29_%28cropped%29.jpg",
    traits: ["艺术感", "个人主义", "流畅", "创造力"],
    strengths: ["历史最佳控球", "篮下终结创造力", "关键投篮", "美学风格"],
    description: "ISFP'艺术家'——欧文把篮球当作自我表达。他的控球是这项运动有史以来最具艺术性的——每一次运球、每一次篮下终结都是一个个人签名。像ISFP一样，欧文是深刻的个人主义者，由自己的价值观和审美引导。他不是在打篮球，他是在用篮球创作。2016年总决赛那记绝杀不只是一个投篮——它是冷静、创造力和个人信念的杰作。ISFP把美带进他们接触的一切，而欧文让篮球变美了。",
    signatureMove: "脚踝终结者运球 / 拉杆上篮",
    twoKRating: 92,
    accolades: "1届NBA总冠军·8届全明星·2016总决赛绝杀",
    dimensionScores: { E:1, I:4, S:4, N:1, T:0, F:5, J:0, P:5 },
    radarScores: { scoring: 92, defense: 60, playmaking: 88, athleticism: 82, bbiq: 85, leadership: 62 }
  },
  {
    id: "allen-iverson",
    name: "阿伦·艾弗森",
    nameEn: "Allen Iverson",
    nickname: "答案 / The Answer",
    team: "费城76人",
    position: "得分后卫 / 控球后卫",
    mbtiType: "ISFP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Allen_Iverson_%28cropped%29.jpg/640px-Allen_Iverson_%28cropped%29.jpg",
    traits: ["叛逆", "真实", "坚韧", "独特风格"],
    strengths: ["历史级变向", "无解的得分能力", "小个子不屈精神", "文化符号"],
    description: "艾弗森是ISFP的叛逆艺术家——他的crossover不只是一种技术动作，而是一种自我表达。地沟头、护臂、宽松球衣——他在场上场下都拒绝迎合任何人的标准，只做最真实的自己。像ISFP一样，他用自己的方式定义成功：不是靠体系，不是靠规则，而是靠纯粹的才华和意志。1米83的他拿下了MVP，把76人扛进总决赛，用一己之力挑战OK组合。'我们谈论的是练习？不是比赛？练习？'——只有ISFP的真诚才能说出这样不被理解却发自内心的话。",
    signatureMove: "标志性Crossover / 拉杆上篮",
    twoKRating: 94,
    accolades: "1届MVP·11届全明星·4届得分王·名人堂",
    dimensionScores: { E:1, I:4, S:3, N:2, T:0, F:5, J:0, P:5 },
    radarScores: { scoring: 96, defense: 68, playmaking: 85, athleticism: 90, bbiq: 88, leadership: 85 }
  },

  // ================================================================
  // ESFP — 表演者：充满能量、随性、热情、活在当下
  // ================================================================
  {
    id: "russell-westbrook",
    name: "拉塞尔·威斯布鲁克",
    nameEn: "Russell Westbrook",
    nickname: "威少 / Brodie",
    team: "丹佛掘金",
    position: "控球后卫",
    mbtiType: "ESFP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Russell_Westbrook_%2851768688612%29_%28cropped%29.jpg/640px-Russell_Westbrook_%2851768688612%29_%28cropped%29.jpg",
    traits: ["爆发力", "随性自由", "能量无限", "无所畏惧"],
    strengths: ["三双机器", "永不停歇", "运动爆发", "时尚先锋"],
    description: "ESFP'表演者'——威斯布鲁克是纯粹的能量化身。每一场比赛都是一场秀，每一次扣篮都是一份声明，每一次三双都是历史。像ESFP一样，威少以最大强度活在当下——他不会控制节奏，因为他不知道怎么低于100%地活着。他的时尚、他的激情、他的'Why Not?'哲学——都是ESFP的随性和生命力。自奥斯卡·罗伯特森之后第一位赛季场均三双的球员，威少用纯粹的意志力重新定义了可能。",
    signatureMove: "爆炸性扣篮 / 三双",
    twoKRating: 90,
    accolades: "1届MVP·9届全明星·2届得分王·历史三双王",
    dimensionScores: { E:5, I:0, S:5, N:0, T:0, F:5, J:0, P:5 },
    radarScores: { scoring: 88, defense: 72, playmaking: 92, athleticism: 98, bbiq: 78, leadership: 80 }
  },
  {
    id: "anthony-edwards",
    name: "安东尼·爱德华兹",
    nameEn: "Anthony Edwards",
    nickname: "蚁人 / Ant-Man",
    team: "明尼苏达森林狼",
    position: "得分后卫",
    mbtiType: "ESFP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Anthony_Edwards_%28cropped%29.jpg/640px-Anthony_Edwards_%28cropped%29.jpg",
    traits: ["自信爆棚", "能量满满", "直言不讳", "无所畏惧"],
    strengths: ["爆炸性弹跳", "攻坚得分", "感染力", "关键时刻不手软"],
    description: "爱德华兹是新一代ESFP的代表——自信、张扬、自带聚光灯。他的扣篮是纯粹的能量释放：对抗、腾空、将防守者钉在海报上。场下他同样充满ESFP的魅力：采访时金句频出，社交媒体上真实不做作，'我就是把球传给自己然后起飞'——这种直率只有ESFP说得出来。像所有ESFP一样，蚁人不思考、不犹豫，只是行动，然后让全场为之沸腾。他是森林狼的灵魂，更是NBA最令人期待的表演者。",
    signatureMove: "隔人暴扣 / 后撤步跳投",
    twoKRating: 91,
    accolades: "2届全明星·最佳阵容二阵·扣篮大赛",
    dimensionScores: { E:5, I:0, S:4, N:1, T:1, F:4, J:0, P:5 },
    radarScores: { scoring: 92, defense: 80, playmaking: 72, athleticism: 97, bbiq: 80, leadership: 76 }
  },

  // ================================================================
  // ESFJ — 执政官：团队至上、照顾他人、和谐、勤奋
  // ================================================================
  {
    id: "kevin-durant",
    name: "凯文·杜兰特",
    nameEn: "Kevin Durant",
    nickname: "KD / 死神",
    team: "菲尼克斯太阳",
    position: "小前锋 / 大前锋",
    mbtiType: "ESFJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Kevin_Durant_%28Wizards_vs._Nets%2C_3-27-2024%29_%28cropped%29.jpg/640px-Kevin_Durant_%28Wizards_vs._Nets%2C_3-27-2024%29_%28cropped%29.jpg",
    traits: ["流畅自然", "团队至上", "专注投入", "多面全能"],
    strengths: ["无解得分", "七尺后卫技术", "任意位置高效", "防守多面"],
    description: "ESFJ'执政官'——杜兰特是篮球界最流畅的适配者。他的比赛建立在和谐与流动之上——他可以和任何人打球，在任何体系中，并让它变得更好。像ESFJ一样，KD深深致力于他的手艺和团队，总在寻求提升周围人的同时仍能打出精英级表现。七尺身高配上后卫技术，是多面性的终极表达——他适应任何时刻的需求。'死神'的绰号捕捉到了这种双重性：场下温暖平易近人，场上冷酷致命。",
    signatureMove: "急停拔起跳投 / Hesi-Pullup",
    twoKRating: 96,
    accolades: "2届NBA总冠军·1届MVP·2届FMVP·14届全明星·4届得分王",
    dimensionScores: { E:3, I:2, S:4, N:1, T:1, F:4, J:4, P:1 },
    radarScores: { scoring: 98, defense: 82, playmaking: 78, athleticism: 85, bbiq: 90, leadership: 75 }
  },
  {
    id: "scottie-pippen",
    name: "斯科蒂·皮蓬",
    nameEn: "Scottie Pippen",
    nickname: "蝙蝠侠 / Pip",
    team: "芝加哥公牛",
    position: "小前锋",
    mbtiType: "ESFJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Scottie_Pippen_%28cropped%29.jpg/640px-Scottie_Pippen_%28cropped%29.jpg",
    traits: ["无私", "团队至上", "防守精英", "可靠"],
    strengths: ["顶级防守", "组织前锋", "全能表现", "冠军拼图"],
    description: "皮蓬是ESFJ的终极队友——他可能是史上最伟大的'二当家'，而这恰恰是ESFJ最擅长的角色：让整个团队运转得更好。他是公牛的真正组织者，防守端锁死对手最好的球员，进攻端让每个队友都在合适的位置接到球。像ESFJ一样，他不追求个人荣誉（虽然他有这个实力），而是专注于构建一个和谐的、不可战胜的体系。没有皮蓬就没有公牛王朝——ESFJ的价值就在于此：他们是团队成功的基石，即使聚光灯打在别人身上。",
    signatureMove: "全能防守 / 快攻推进",
    twoKRating: 93,
    accolades: "6届NBA总冠军·7届全明星·8次最佳防守一阵·名人堂",
    dimensionScores: { E:2, I:3, S:4, N:1, T:1, F:4, J:4, P:1 },
    radarScores: { scoring: 84, defense: 98, playmaking: 90, athleticism: 92, bbiq: 94, leadership: 82 }
  },

  // ================================================================
  // INFJ — 提倡者：战略家、直觉型、理想主义、远见
  // ================================================================
  {
    id: "chris-paul",
    name: "克里斯·保罗",
    nameEn: "Chris Paul",
    nickname: "控卫之神 / Point God",
    team: "圣安东尼奥马刺",
    position: "控球后卫",
    mbtiType: "INFJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Chris_Paul_%2851904919551%29_%28cropped%29.jpg/640px-Chris_Paul_%2851904919551%29_%28cropped%29.jpg",
    traits: ["战略思维", "直觉敏锐", "完美主义", "指挥大师"],
    strengths: ["历史级传球智商", "中距离大师", "防守破坏者", "领导力与指导"],
    description: "INFJ'提倡者'——保罗看比赛的方式与所有人不同。他不是在打球，而是在读棋——像国际象棋大师一样预判几步之后的变化。像INFJ一样，CP3将深层直觉与对原则的坚定承诺融合在一起。他让身边的每个人都变得更好——空接之城、雷霆的惊喜季后赛、太阳的总决赛之旅——每到一个地方，球队就会蜕变。'控卫之神'的绰号不关乎华丽，关乎视野、智慧和对即将发生的一切心知肚明的那种安静自信。",
    signatureMove: "肘区中距离 / 不看人传球",
    twoKRating: 94,
    accolades: "12届全明星·5届助攻王·6届抢断王·历史助攻榜前三",
    dimensionScores: { E:1, I:4, S:0, N:5, T:0, F:5, J:5, P:0 },
    radarScores: { scoring: 82, defense: 88, playmaking: 98, athleticism: 72, bbiq: 99, leadership: 92 }
  },
  {
    id: "steve-nash",
    name: "史蒂夫·纳什",
    nameEn: "Steve Nash",
    nickname: "风之子",
    team: "菲尼克斯太阳",
    position: "控球后卫",
    mbtiType: "INFJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Steve_Nash_%28cropped%29.jpg/640px-Steve_Nash_%28cropped%29.jpg",
    traits: ["视野开阔", "无私奉献", "理想主义", "创新"],
    strengths: ["跑轰体系灵魂", "传球精度顶级", "投射效率", "让队友变得更好"],
    description: "纳什是INFJ的理想主义者——他相信篮球可以更美、更快、更无私，然后他用'七秒进攻'证明了这一点。两次MVP不是因为他的个人数据有多炸裂，而是因为他让整个太阳队的每个人都打出了生涯最佳表现。像INFJ一样，纳什有一种近乎神秘的直觉——他在场上感知到的传球路线和时机，别人根本看不到。退役后他继续用自己的方式影响篮球，INFJ的远见和理想主义从未褪色。",
    signatureMove: "风骚背后传球 / 跑轰三分",
    twoKRating: 93,
    accolades: "2届MVP·8届全明星·5届助攻王·名人堂",
    dimensionScores: { E:1, I:4, S:0, N:5, T:0, F:5, J:4, P:1 },
    radarScores: { scoring: 84, defense: 55, playmaking: 98, athleticism: 70, bbiq: 97, leadership: 88 }
  },

  // ================================================================
  // INFP — 调停者：有韧性、有理想、真诚、价值观驱动
  // ================================================================
  {
    id: "derrick-rose",
    name: "德里克·罗斯",
    nameEn: "Derrick Rose",
    nickname: "风城玫瑰 / Windy City Assassin",
    team: "孟菲斯灰熊",
    position: "控球后卫",
    mbtiType: "INFP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Derrick_Rose_%2851862224143%29_%28cropped%29.jpg/640px-Derrick_Rose_%2851862224143%29_%28cropped%29.jpg",
    traits: ["坚韧不拔", "充满激情", "真实真诚", "价值驱动"],
    strengths: ["最年轻MVP", "惊人的韧性", "运动优雅", "浴火重生"],
    description: "INFP'调停者'——罗斯的故事是关于激情、意义和深刻韧性的。NBA史上最年轻的MVP，他的比赛是诗——力量与优雅的融合，俘获了数百万人的心。当伤病几乎终结他的职业生涯时，罗斯的INFP精神闪耀得最亮。他没有放弃；他适应了，坚持了，找到了回归的路。在森林狼的那场50分不只是一场比赛——它是一份宣言：真诚的激情可以战胜一切。INFP为他们相信的东西而战，而罗斯从未停止相信。",
    signatureMove: "抛投 / 运动战突破",
    twoKRating: 88,
    accolades: "1届MVP（史上最年轻）·3届全明星·50分重生之战",
    dimensionScores: { E:1, I:4, S:1, N:4, T:0, F:5, J:0, P:5 },
    radarScores: { scoring: 86, defense: 62, playmaking: 83, athleticism: 96, bbiq: 82, leadership: 74 }
  },
  {
    id: "grant-hill",
    name: "格兰特·希尔",
    nameEn: "Grant Hill",
    nickname: "好好先生",
    team: "底特律活塞",
    position: "小前锋",
    mbtiType: "INFP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Grant_Hill_%28cropped%29.jpg/640px-Grant_Hill_%28cropped%29.jpg",
    traits: ["优雅", "理想主义", "坚韧", "正直"],
    strengths: ["全能前锋", "组织能力", "运动优雅", "永不放弃"],
    description: "格兰特·希尔是INFP的理想主义者——他代表了篮球中最纯粹的可能性。在伤病改变一切之前，他是乔丹接班人，是完美球员的模板：全能、优雅、无私。但真正让他成为INFP代表的是伤后的故事——五次脚踝手术，所有人都认为他完了，他却一次次回归，在太阳队焕发第二春。像所有INFP一样，希尔是由内在价值观驱动的——不是金钱、不是名声，而是对篮球最纯粹的爱让他穿越地狱。他的复出是对'放弃'这个词最优雅的反驳。",
    signatureMove: "第一步突破 / 优雅中投",
    twoKRating: 89,
    accolades: "7届全明星·名人堂·最佳阵容一阵·最佳复出奖",
    dimensionScores: { E:1, I:4, S:1, N:4, T:0, F:5, J:1, P:4 },
    radarScores: { scoring: 86, defense: 80, playmaking: 88, athleticism: 88, bbiq: 90, leadership: 82 }
  },

  // ================================================================
  // ENFP — 竞选者：有魅力、热情、统治力、爱玩
  // ================================================================
  {
    id: "shaquille-oneal",
    name: "沙奎尔·奥尼尔",
    nameEn: "Shaquille O'Neal",
    nickname: "大鲨鱼 / Diesel",
    team: "洛杉矶湖人",
    position: "中锋",
    mbtiType: "ENFP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Shaquille_O%27Neal_%2849511767898%29_%28cropped%29.jpg/640px-Shaquille_O%27Neal_%2849511767898%29_%28cropped%29.jpg",
    traits: ["魅力无限", "热情满溢", "统治力", "爱玩爱笑"],
    strengths: ["史上最具统治力", "超强存在感", "媒体与商业帝国", "冠军血统"],
    description: "ENFP'竞选者'——奥尼尔是NBA终极的多面明星。场上，他是不可阻挡的自然力量——扣碎篮板、吸引三人包夹、以震撼大地的力量灌篮。场下，他是媒体帝国：解说员、演员、DJ、商人。像ENFP一样，奥尼尔将感染力带到他所做的一切中，通过幽默、温暖和真诚的热情与人连接。他不只是一个名人堂成员，他是一个文化现象。'Diesel'这个绰号说明了一切——强大、独特、不可忽视。",
    signatureMove: "转身暴扣 / 篮筐毁灭者",
    twoKRating: 96,
    accolades: "4届NBA总冠军·1届MVP·3届FMVP·15届全明星·名人堂",
    dimensionScores: { E:5, I:0, S:1, N:4, T:0, F:5, J:0, P:5 },
    radarScores: { scoring: 92, defense: 88, playmaking: 68, athleticism: 94, bbiq: 80, leadership: 86 }
  },
  {
    id: "giannis-antetokounmpo",
    name: "扬尼斯·阿德托昆博",
    nameEn: "Giannis Antetokounmpo",
    nickname: "希腊怪兽 / Greek Freak",
    team: "密尔沃基雄鹿",
    position: "大前锋",
    mbtiType: "ENFP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Giannis_Antetokounmpo_%28cropped%29.jpg/640px-Giannis_Antetokounmpo_%28cropped%29.jpg",
    traits: ["充满激情", "真诚热情", "不懈进取", "家人至上"],
    strengths: ["攻防统治", "转换进攻无敌", "持续进化", "忠诚与领导力"],
    description: "字母哥是ENFP的热情化身——从希腊街头卖太阳镜的移民少年到NBA总冠军和MVP，他的故事本身就是一个关于热情和信念的传奇。他的比赛充满ENFP式的感染力：欧洲步暴扣、追身大帽、每一次庆祝都像孩子一样纯粹快乐。像ENFP一样，他真诚、不伪装——'我只是想和家人一起赢球'不是公关话术，是他真正的价值观。他把所有筹码压在密尔沃基这个小市场，然后兑现了总冠军的承诺——ENFP的忠诚和热情从不是空话。",
    signatureMove: "欧洲步暴扣 / 追身大帽",
    twoKRating: 97,
    accolades: "1届NBA总冠军·2届MVP·1届FMVP·7届全明星·DPOY",
    dimensionScores: { E:4, I:1, S:1, N:4, T:0, F:5, J:0, P:5 },
    radarScores: { scoring: 93, defense: 94, playmaking: 80, athleticism: 99, bbiq: 85, leadership: 88 }
  },

  // ================================================================
  // ENFJ — 主人公：魅力型领袖、激励者、慷慨、有远见
  // ================================================================
  {
    id: "magic-johnson",
    name: "魔术师约翰逊",
    nameEn: "Magic Johnson",
    nickname: "魔术师 / Magic",
    team: "洛杉矶湖人",
    position: "控球后卫",
    mbtiType: "ENFJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Magic_Johnson_%2825117662488%29_%28cropped%29.jpg/640px-Magic_Johnson_%2825117662488%29_%28cropped%29.jpg",
    traits: ["魅力非凡", "鼓舞人心", "远见卓识", "慷慨大方"],
    strengths: ["Showtime指挥家", "不看人传球", "位置革命先驱", "领导力与快乐"],
    description: "ENFJ'主人公'——魔术师不只是打篮球，他指挥交响乐。'Showtime'湖人是体育史上最具娱乐性的王朝，而魔术师是他们魅力四射的领袖。像ENFJ一样，魔术师的天才在于提升他人——他的不看人传球、他感染力十足的笑容、他让每个队友都感觉自己是明星的能力。他彻底改变了控卫位置（2米06的组织者前所未闻），并在球员、球迷和运动之间架起了桥梁。ENFJ激励人们成为最好的自己——魔术师让篮球成为了最好的篮球。",
    signatureMove: "不看人传球 / Showtime",
    twoKRating: 98,
    accolades: "5届NBA总冠军·3届MVP·3届FMVP·12届全明星·名人堂",
    dimensionScores: { E:5, I:0, S:0, N:5, T:0, F:5, J:5, P:0 },
    radarScores: { scoring: 88, defense: 70, playmaking: 99, athleticism: 85, bbiq: 98, leadership: 98 }
  },
  {
    id: "bill-russell",
    name: "比尔·拉塞尔",
    nameEn: "Bill Russell",
    nickname: "指环王 / The Ring Master",
    team: "波士顿凯尔特人",
    position: "中锋",
    mbtiType: "ENFJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Bill_Russell_%28cropped%29.jpg/640px-Bill_Russell_%28cropped%29.jpg",
    traits: ["终极领袖", "无私奉献", "社会正义", "赢家心态"],
    strengths: ["11枚戒指", "防守革命", "篮板与封盖", "民权先驱"],
    description: "比尔·拉塞尔是ENFJ的终极领袖——11枚总冠军戒指，不是因为他比所有人得分多，而是因为他让整个团队变得不可战胜。他是篮球史上第一位将防守和团队胜利置于个人数据之上的超级巨星。像ENFJ一样，他的影响力远远超出了球场——他是民权运动的先驱，和马丁·路德·金并肩游行，用他的平台为社会正义发声。ENFJ不只是在比赛中领导，他们在生活中领导——拉塞尔用一生证明了真正的领袖意味着什么：不是让自己伟大，而是让身边的人伟大。",
    signatureMove: "排球式封盖 / 防守指挥",
    twoKRating: 96,
    accolades: "11届NBA总冠军·5届MVP·12届全明星·名人堂",
    dimensionScores: { E:3, I:2, S:0, N:5, T:0, F:5, J:5, P:0 },
    radarScores: { scoring: 78, defense: 99, playmaking: 75, athleticism: 90, bbiq: 97, leadership: 100 }
  },

  // ================================================================
  // INTJ — 建筑师：策略大师、远见、独立、非传统
  // ================================================================
  {
    id: "nikola-jokic",
    name: "尼古拉·约基奇",
    nameEn: "Nikola Jokić",
    nickname: "小丑 / The Joker",
    team: "丹佛掘金",
    position: "中锋",
    mbtiType: "INTJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Nikola_Jokic_%2851880861523%29_%28cropped%29.jpg/640px-Nikola_Jokic_%2851880861523%29_%28cropped%29.jpg",
    traits: ["策略大师", "远见卓识", "不拘一格", "独立思考"],
    strengths: ["跨时代传球智商", "三双机器", "非正统高效", "冠军领袖"],
    description: "INTJ'建筑师'——约基奇是篮球界的大师。他比别人提前几步阅读比赛，看到普通人根本不存在的传球路线和可能性。像INTJ一样，约基奇是一个独立思考者，完全不在乎传统智慧——一个二轮秀、一个主导进攻的中锋、一个宁愿传球的超级巨星。他的2023年冠军之旅是战略才华的大师课。INTJ构建有效的系统——约基奇构建了一种全新的篮球方式。",
    signatureMove: "桑博尔舞步 / 不看人妙传",
    twoKRating: 97,
    accolades: "1届NBA总冠军·3届MVP·1届FMVP·6届全明星",
    dimensionScores: { E:0, I:5, S:0, N:5, T:5, F:0, J:4, P:1 },
    radarScores: { scoring: 90, defense: 72, playmaking: 98, athleticism: 60, bbiq: 99, leadership: 85 }
  },
  {
    id: "hakeem-olajuwon",
    name: "哈基姆·奥拉朱旺",
    nameEn: "Hakeem Olajuwon",
    nickname: "大梦 / The Dream",
    team: "休斯顿火箭",
    position: "中锋",
    mbtiType: "INTJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Hakeem_Olajuwon_%28cropped%29.jpg/640px-Hakeem_Olajuwon_%28cropped%29.jpg",
    traits: ["技术完美", "智慧", "精准", "创新"],
    strengths: ["梦幻脚步", "防守全能", "封盖之王", "两连冠核心"],
    description: "奥拉朱旺是INTJ的战术大师——他的'梦幻脚步'是有史以来最精心设计的低位进攻体系，每一个假动作、每一次转身、每一个上下步都经过精确的计算和无数小时的雕琢。像INTJ一样，他不是靠蛮力，而是靠理解和创新击败对手：打不过你？我设计一套你永远破解不了的步法。他还是NBA历史封盖王——防守端同样的智慧和预判。退役后，科比、詹姆斯、霍华德都排队向他学习脚步——INTJ构建的系统，影响了几代人。",
    signatureMove: "梦幻脚步",
    twoKRating: 97,
    accolades: "2届NBA总冠军·1届MVP·2届FMVP·12届全明星·历史封盖王·名人堂",
    dimensionScores: { E:0, I:5, S:0, N:5, T:5, F:0, J:5, P:0 },
    radarScores: { scoring: 92, defense: 98, playmaking: 72, athleticism: 88, bbiq: 97, leadership: 90 }
  },

  // ================================================================
  // INTP — 逻辑学家：创新、分析型、好奇、自信
  // ================================================================
  {
    id: "luka-doncic",
    name: "卢卡·东契奇",
    nameEn: "Luka Dončić",
    nickname: "斗牛士 / The Matador",
    team: "洛杉矶湖人",
    position: "控球后卫 / 得分后卫",
    mbtiType: "INTP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Luka_Doncic_%2851904230923%29_%28cropped%29.jpg/640px-Luka_Doncic_%2851904230923%29_%28cropped%29.jpg",
    traits: ["创造力", "分析力", "创新", "自信"],
    strengths: ["进攻天才", "后撤步大师", "组织魔法", "篮球智商"],
    description: "INTP'逻辑学家'——东契奇是篮球界的疯狂科学家，不断试验新方法拆解防守。他的比赛建立在模式识别和创造性问题解决之上——他看到了矩阵，而别人只看到篮球场。像INTP一样，卢卡以智力上的好奇心和近乎俏皮的自信面对比赛。他的后撤步三分不只是一个投篮，而是他为解决一个问题（如何为面对更快防守者创造空间）而发明的解决方案。'斗牛士'的绰号非常贴切——永远掌控局面，永远领先一步，永远在思考。",
    signatureMove: "后撤步三分 / 慢节奏突破",
    twoKRating: 95,
    accolades: "5届全明星·5次最佳阵容一阵·最佳新秀·欧洲联赛冠军",
    dimensionScores: { E:1, I:4, S:0, N:5, T:5, F:0, J:0, P:5 },
    radarScores: { scoring: 95, defense: 62, playmaking: 94, athleticism: 68, bbiq: 97, leadership: 78 }
  },
  {
    id: "james-harden",
    name: "詹姆斯·哈登",
    nameEn: "James Harden",
    nickname: "大胡子 / The Beard",
    team: "洛杉矶快船",
    position: "得分后卫 / 控球后卫",
    mbtiType: "INTP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/James_Harden_%28cropped%29.jpg/640px-James_Harden_%28cropped%29.jpg",
    traits: ["创新", "分析型", "独特风格", "自信"],
    strengths: ["造犯规大师", "后撤步三分", "组织转型", "得分爆发力"],
    description: "哈登是INTP的规则破解者——他用分析思维重新解构了篮球进攻，找到了规则漏洞并不断优化自己的输出。他的后撤步三分是对物理学的挑战：如何在最小的空间中创造最大的投篮窗口？他的造犯规不是'骗'，而是对防守者行为的精确逆向工程。像INTP一样，哈登不在乎传统美学——他不是为了好看，他是为了找到最优解。他的打法永远改变了NBA的进攻哲学：三分、罚球、篮下——效率的圣三一。",
    signatureMove: "后撤步三分 / 欧洲步上篮",
    twoKRating: 95,
    accolades: "1届MVP·10届全明星·3届得分王·2届助攻王·最佳第六人",
    dimensionScores: { E:1, I:4, S:0, N:5, T:5, F:0, J:0, P:5 },
    radarScores: { scoring: 97, defense: 58, playmaking: 92, athleticism: 78, bbiq: 95, leadership: 70 }
  },

  // ================================================================
  // ENTP — 辩论家/创新者：创新、颠覆性、有趣、自信
  // ================================================================
  {
    id: "stephen-curry",
    name: "斯蒂芬·库里",
    nameEn: "Stephen Curry",
    nickname: "大厨 / Chef Curry",
    team: "金州勇士",
    position: "控球后卫",
    mbtiType: "ENTP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Stephen_Curry_dribbling_2016_%28cropped%29.jpg/640px-Stephen_Curry_dribbling_2016_%28cropped%29.jpg",
    traits: ["创新", "颠覆性", "快乐", "自信"],
    strengths: ["历史最佳射手", "引力与空间", "无球跑动", "文化革命"],
    description: "ENTP'辩论家/创新者'——库里不止打破了三分球纪录，他打破的是篮球本身。他的比赛是对传统智慧（'别从那投篮'）的持续辩论，以无可辩驳的证据（一个接一个的空心入网）支撑。像ENTP一样，库里无尽地富有创造力，智力敏捷，在挑战既定规范中茁壮成长。他快乐的风格——摇摆舞、球还没进就转身、嚼牙套——是纯粹的ENTP魅力。他让不可能变成了日常，改变了整整一代人打篮球的方式。",
    signatureMove: "超远三分 / 无球跑动三分",
    twoKRating: 97,
    accolades: "4届NBA总冠军·2届MVP（1届全票）·1届FMVP·10届全明星·历史三分王",
    dimensionScores: { E:4, I:1, S:0, N:5, T:4, F:1, J:0, P:5 },
    radarScores: { scoring: 97, defense: 60, playmaking: 85, athleticism: 78, bbiq: 96, leadership: 90 }
  },
  {
    id: "manu-ginobili",
    name: "马努·吉诺比利",
    nameEn: "Manu Ginóbili",
    nickname: "妖刀",
    team: "圣安东尼奥马刺",
    position: "得分后卫",
    mbtiType: "ENTP",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Manu_Gin%C3%B3bili_%28cropped%29.jpg/640px-Manu_Gin%C3%B3bili_%28cropped%29.jpg",
    traits: ["创造力爆表", "不可预测", "大胆", "赢家心态"],
    strengths: ["欧洲步大师", "致命创造力", "大心脏", "冠军DNA"],
    description: "吉诺比利是ENTP的野性天才——你永远不知道他下一步会做什么，包括他的教练和队友。他的传球角度违反几何学，他的欧洲步像蛇一样扭曲，他时而让你抱头懊恼时而又让你欢呼雀跃。像ENTP一样，马努是终极的创新者——他不会按剧本打球，因为他自己就是在实时重写剧本的人。从欧洲联赛MVP到四次NBA总冠军，从替补席出发却屡屡在关键时刻接管比赛——ENTP不在乎角色和规则，他们只在乎影响和创造。那把'妖刀'，永远是马刺王朝最锋利、最不可预测的武器。",
    signatureMove: "蛇形欧洲步 / 诡异传球",
    twoKRating: 91,
    accolades: "4届NBA总冠军·2届全明星·最佳第六人·欧洲联赛MVP·名人堂",
    dimensionScores: { E:3, I:2, S:0, N:5, T:3, F:2, J:0, P:5 },
    radarScores: { scoring: 85, defense: 78, playmaking: 88, athleticism: 82, bbiq: 96, leadership: 80 }
  },

  // ================================================================
  // ENTJ — 指挥官：领袖、掌控、战略、雄心
  // ================================================================
  {
    id: "lebron-james",
    name: "勒布朗·詹姆斯",
    nameEn: "LeBron James",
    nickname: "小皇帝 / The King",
    team: "洛杉矶湖人",
    position: "小前锋 / 大前锋",
    mbtiType: "ENTJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/LeBron_James_%2851959977545%29.jpg/640px-LeBron_James_%2851959977545%29.jpg",
    traits: ["领袖", "掌控力", "战略", "雄心"],
    strengths: ["历史得分王", "篮球智商与组织", "持久与耐用", "领导力与影响力"],
    description: "ENTJ'指挥官'——詹姆斯是篮球界终极的领袖。二十多年来，他以身体统治力和战略天赋的融合指挥赛场。像ENTJ一样，勒布朗是天生的领导者，提升身边的每一个人——四座总冠军在三支不同的球队，每支都围绕着他的视野和意志构建。他的篮球智商是传奇级别的（像CEO读市场数据一样记忆战术、对手倾向和比赛局面）。'国王'不只是一个绰号，它是一份职位描述。ENTJ不只是参与比赛——他们掌控比赛。",
    signatureMove: "追身大帽 / 战斧扣篮",
    twoKRating: 99,
    accolades: "4届NBA总冠军·4届MVP·4届FMVP·20届全明星·历史得分王",
    dimensionScores: { E:5, I:0, S:0, N:5, T:5, F:0, J:5, P:0 },
    radarScores: { scoring: 96, defense: 88, playmaking: 94, athleticism: 96, bbiq: 99, leadership: 98 }
  },
  {
    id: "kareem-abdul-jabbar",
    name: "卡里姆·阿卜杜尔-贾巴尔",
    nameEn: "Kareem Abdul-Jabbar",
    nickname: "天勾 / Cap",
    team: "洛杉矶湖人",
    position: "中锋",
    mbtiType: "ENTJ",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Kareem_Abdul-Jabbar_%28cropped%29.jpg/640px-Kareem_Abdul-Jabbar_%28cropped%29.jpg",
    traits: ["智慧", "自律", "持久", "社会意识"],
    strengths: ["天勾无解", "历史级得分", "冠军底蕴", "场外影响力"],
    description: "贾巴尔是ENTJ的远见型领袖——他用一种不可阻挡的武器（天勾）统治了二十年，这种武器是他精心设计、不断打磨、最终成为篮球史上最高效得分手段的发明。像ENTJ一样，他有着长远的视野——不仅规划自己的职业生涯（打到42岁），更规划自己在世界中的位置。他是作家、活动家、文化评论家——篮球只是他表达影响力的第一个平台。六届MVP、历史得分王（保持39年）、六枚戒指——ENTJ不做小事，他们只做改变历史的大事。",
    signatureMove: "天勾",
    twoKRating: 97,
    accolades: "6届NBA总冠军·6届MVP·2届FMVP·19届全明星·历史得分王（39年）·名人堂",
    dimensionScores: { E:3, I:2, S:0, N:5, T:5, F:0, J:5, P:0 },
    radarScores: { scoring: 96, defense: 90, playmaking: 70, athleticism: 85, bbiq: 95, leadership: 94 }
  }
];

/* ================================================================
   20道MBTI测试题（全中文）
   四个维度各5题：EI（内外向）、SN（感觉/直觉）、TF（思考/情感）、JP（判断/感知）
   ================================================================ */

const QUESTIONS = [
  // === EI 维度（外向 vs 内向）—— 第1-5题 ===
  {
    id: 1,
    dimension: "EI",
    dimensionLabel: "外向 vs 内向",
    text: "投进绝杀球之后，你更倾向于：",
    options: [
      { text: "冲向观众席，和队友、球迷一起疯狂庆祝——这份能量才是一切！", pole: "E" },
      { text: "安静地感受这一刻，让情绪沉淀下来，回想一路走来的旅程。", pole: "I" }
    ]
  },
  {
    id: 2,
    dimension: "EI",
    dimensionLabel: "外向 vs 内向",
    text: "赛前热身时，你更喜欢：",
    options: [
      { text: "点燃全场气氛，和球迷互动，把所有人的能量都调动起来。", pole: "E" },
      { text: "戴上耳机进入自己的世界，按照自己的节奏走一遍固定流程。", pole: "I" }
    ]
  },
  {
    id: 3,
    dimension: "EI",
    dimensionLabel: "外向 vs 内向",
    text: "面对强敌时，你的能量来源于：",
    options: [
      { text: "主场观众的咆哮和球馆里的电流——人越多我越兴奋。", pole: "E" },
      { text: "内心的火焰——这是我和自己的较量，我要证明给自己看。", pole: "I" }
    ]
  },
  {
    id: 4,
    dimension: "EI",
    dimensionLabel: "外向 vs 内向",
    text: "一场艰难失利后的更衣室里，你更可能：",
    options: [
      { text: "站出来发声，鼓舞团队，让大家把注意力集中到下一场比赛。", pole: "E" },
      { text: "先在内心消化一切——自己分析哪里出了问题，再决定要不要分享想法。", pole: "I" }
    ]
  },
  {
    id: 5,
    dimension: "EI",
    dimensionLabel: "外向 vs 内向",
    text: "你理想的休赛期是：",
    options: [
      { text: "旅行、活动、训练营，和全球各地的球迷和球员交流互动。", pole: "E" },
      { text: "私密训练、陪伴家人、在镜头之外专注于技能提升。", pole: "I" }
    ]
  },

  // === SN 维度（感觉 vs 直觉）—— 第6-10题 ===
  {
    id: 6,
    dimension: "SN",
    dimensionLabel: "感觉 vs 直觉",
    text: "进攻时，你更依赖：",
    options: [
      { text: "千锤百炼的动作和脚步——肌肉记忆才是一切。", pole: "S" },
      { text: "实时阅读防守并即兴发挥——根据你看到的局势随机应变。", pole: "N" }
    ]
  },
  {
    id: 7,
    dimension: "SN",
    dimensionLabel: "感觉 vs 直觉",
    text: "看比赛录像时，你最关注：",
    options: [
      { text: "具体细节——脚步站位、手部位置、每个动作的时机。", pole: "S" },
      { text: "模式和趋势——战术如何展开、防守如何轮转的大局观。", pole: "N" }
    ]
  },
  {
    id: 8,
    dimension: "SN",
    dimensionLabel: "感觉 vs 直觉",
    text: "你的打法风格最接近：",
    options: [
      { text: "基本功扎实——你精通基础技术并完美执行。", pole: "S" },
      { text: "创意十足不拘一格——你在场上找到新的方法解决问题。", pole: "N" }
    ]
  },
  {
    id: 9,
    dimension: "SN",
    dimensionLabel: "感觉 vs 直觉",
    text: "比赛最后几秒比分胶着，你信任：",
    options: [
      { text: "整个赛季都在用的那个战术——坚持已知的东西。", pole: "S" },
      { text: "你的直觉——阅读防守并做出反应，哪怕这意味着打破战术。", pole: "N" }
    ]
  },
  {
    id: 10,
    dimension: "SN",
    dimensionLabel: "感觉 vs 直觉",
    text: "学习一项新技能时，你更喜欢：",
    options: [
      { text: "一步步分解练习、重复、看到清晰可量化的进步。", pole: "S" },
      { text: "先理解背后的原理，然后不断尝试直到自然掌握。", pole: "N" }
    ]
  },

  // === TF 维度（思考 vs 情感）—— 第11-15题 ===
  {
    id: 11,
    dimension: "TF",
    dimensionLabel: "思考 vs 情感",
    text: "做一个关键的篮球决策时，你优先考虑：",
    options: [
      { text: "逻辑和数据——数据怎么说？对位情况怎么样？分析结果是什么？", pole: "T" },
      { text: "信任和化学反应——今晚谁手感在？团队在情绪上需要什么？", pole: "F" }
    ]
  },
  {
    id: 12,
    dimension: "TF",
    dimensionLabel: "思考 vs 情感",
    text: "一位队友状态低迷。你会：",
    options: [
      { text: "给他们直接的、诚实的反馈，告诉他们需要改进什么——真相优于安慰。", pole: "T" },
      { text: "先从情绪上支持他们——信心建立起来了，再去谈技术问题。", pole: "F" }
    ]
  },
  {
    id: 13,
    dimension: "TF",
    dimensionLabel: "思考 vs 情感",
    text: "作为球队领袖，你以什么著称：",
    options: [
      { text: "设定高标准、要求问责、做出艰难的决策。", pole: "T" },
      { text: "营造家庭般的氛围、了解每一位球员、保持高昂的士气。", pole: "F" }
    ]
  },
  {
    id: 14,
    dimension: "TF",
    dimensionLabel: "思考 vs 情感",
    text: "你最尊重怎样的教练：",
    options: [
      { text: "拥有卓越的战略头脑、基于客观分析做决策的教练。", pole: "T" },
      { text: "真诚关心球员作为一个人、建立信任和归属感的教练。", pole: "F" }
    ]
  },
  {
    id: 15,
    dimension: "TF",
    dimensionLabel: "思考 vs 情感",
    text: "一个有争议的判罚对你们不利。你会：",
    options: [
      { text: "保持冷静，分析发生了什么并做出调整——情绪改变不了判罚。", pole: "T" },
      { text: "让情绪成为动力——有时候一次技术犯规值得它传递的信息。", pole: "F" }
    ]
  },

  // === JP 维度（判断 vs 感知）—— 第16-20题 ===
  {
    id: 16,
    dimension: "JP",
    dimensionLabel: "判断 vs 感知",
    text: "你对待比赛准备的方式是：",
    options: [
      { text: "结构化和有计划——详细的流程、固定的时间、一切都有条不紊。", pole: "J" },
      { text: "灵活适应——随遇而安，根据当天的感觉来调整。", pole: "P" }
    ]
  },
  {
    id: 17,
    dimension: "JP",
    dimensionLabel: "判断 vs 感知",
    text: "当战术被打乱时，你会：",
    options: [
      { text: "重新组织，努力回到原有结构——系统是有效的，只要你去执行。", pole: "J" },
      { text: "在混乱中茁壮成长——战术失败的时刻，正是你创造力闪耀的舞台。", pole: "P" }
    ]
  },
  {
    id: 18,
    dimension: "JP",
    dimensionLabel: "判断 vs 感知",
    text: "对于你的职业生涯和人生，你更喜欢：",
    options: [
      { text: "清晰的规划和时间表——设定目标、逐一达成、一步步构建你的传奇。", pole: "J" },
      { text: "保持选择的开放性——最好的机会往往是你从未预料到的那些。", pole: "P" }
    ]
  },
  {
    id: 19,
    dimension: "JP",
    dimensionLabel: "判断 vs 感知",
    text: "你理想的队友是：",
    options: [
      { text: "可靠、说到做到、尊重体系的人。", pole: "J" },
      { text: "随性、带来意想不到的能量、让事情保持有趣的人。", pole: "P" }
    ]
  },
  {
    id: 20,
    dimension: "JP",
    dimensionLabel: "判断 vs 感知",
    text: "赛季结束的那一刻，你已经在：",
    options: [
      { text: "规划下个赛季了——设定目标、安排训练、勾画前进的路线图。", pole: "J" },
      { text: "活在当下——回味这段旅程，新的可能性出现时再拥抱它们。", pole: "P" }
    ]
  }
];
