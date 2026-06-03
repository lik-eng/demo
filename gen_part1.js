/**
 * gen_part1.js — 传感器期末押题版 第1步
 * 生成：封面 + 第一章专项练习(30题) + 第2～5章章节专项题
 *
 * 库：docx (npm install -g docx)
 * 运行：node gen_part1.js
 * 输出：传感器期末押题_part1.docx
 */

const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, HeadingLevel,
  AlignmentType, BorderStyle, ShadingType,
  PageBreak, Header, Footer, PageNumber,
  LevelFormat, TableOfContents,
} = require("docx");

// ============================================================
// 全局常量
// ============================================================

const OUTPUT = "c:/Users/lik_6/OneDrive/桌面/demo/传感器期末押题_part1.docx";

// 高频考点标记
const STAR = "★ ";
const ANSWER_PREFIX = "  【答案：";
const ANSWER_SUFFIX = "】";

// ============================================================
// 辅助函数 — 创建题目段落
// ============================================================

/** 带答案标注的题目文本 */
function answerLabel(answer) {
  return `${ANSWER_PREFIX}${answer}${ANSWER_SUFFIX}`;
}

/** 段落：正文题目 */
function qPara(text, options = {}) {
  return new Paragraph({
    spacing: { before: 120, after: 60 },
    indent: options.indent !== false ? { left: 360 } : undefined,
    children: [new TextRun({ text, font: "宋体", size: 24 })],
  });
}

/** 段落：标题 */
function titlePara(text, size = 36) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 120, after: 120 },
    children: [new TextRun({ text, font: "黑体", size, bold: true })],
  });
}

/** 段落：章节标题 */
function chapterHeading(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 120 },
    children: [new TextRun({ text, font: "黑体", size: 28, bold: true })],
  });
}

/** 段落：大标题 */
function mainHeading(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 180 },
    children: [new TextRun({ text, font: "黑体", size: 32, bold: true })],
  });
}

/** ★标记的高频考点题目 */
function starQ(text, answer) {
  return new Paragraph({
    spacing: { before: 120, after: 60 },
    indent: { left: 360 },
    children: [
      new TextRun({ text: STAR + text, font: "宋体", size: 24 }),
      new TextRun({ text: answerLabel(answer), font: "宋体", size: 24, bold: true, color: "C00000" }),
    ],
  });
}

/** 普通题目（非高频考点） */
function normalQ(text, answer) {
  return new Paragraph({
    spacing: { before: 120, after: 60 },
    indent: { left: 360 },
    children: [
      new TextRun({ text: text, font: "宋体", size: 24 }),
      new TextRun({ text: answerLabel(answer), font: "宋体", size: 24, bold: true, color: "C00000" }),
    ],
  });
}

/** 选择题选项行 */
function option(text) {
  return new Paragraph({
    spacing: { before: 30, after: 30 },
    indent: { left: 720 },
    children: [new TextRun({ text, font: "宋体", size: 24 })],
  });
}

/** 分隔段落 */
function separator() {
  return new Paragraph({ spacing: { before: 60, after: 60 }, children: [] });
}

/** 题型小标题 */
function typeLabel(text) {
  return new Paragraph({
    spacing: { before: 180, after: 60 },
    children: [
      new TextRun({ text, font: "黑体", size: 26, bold: true, color: "1F4E79" }),
    ],
  });
}

/** 分页 */
function newPage() {
  return new Paragraph({ children: [new PageBreak()] });
}

/** 说明段落 */
function notePara(text) {
  return new Paragraph({
    spacing: { before: 30, after: 30 },
    children: [new TextRun({ text, font: "宋体", size: 20, italics: true, color: "666666" })],
  });
}

// ============================================================
// 内容数据
// ============================================================

// ---------- 封面 ----------
const coverContent = [
  new Paragraph({ spacing: { before: 3600 }, children: [] }), // 留白
  titlePara("《传感器原理及检测技术》", 40),
  titlePara("期末押题复习资料", 44),
  new Paragraph({ spacing: { before: 600 }, children: [] }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 120, after: 60 },
    children: [new TextRun({ text: "考试范围：第1章～第9章", font: "宋体", size: 26, color: "333333" })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text: "主编：卢君宜、程涛", font: "宋体", size: 24, color: "555555" })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text: "出版社：华中科技大学出版社", font: "宋体", size: 24, color: "555555" })],
  }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 60, after: 60 },
    children: [new TextRun({ text: "适用对象：专科生期末考试复习", font: "宋体", size: 22, color: "777777" })],
  }),
  new Paragraph({ spacing: { before: 1200 }, children: [] }),
  new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [new TextRun({ text: "★ 高频考点已在题目前标注 ★", font: "宋体", size: 24, color: "C00000" })],
  }),
];

// ============================================================
// 第一章 绪论 专项练习（30题：10选择+10判断+10填空）
// ============================================================

const ch1Content = [
  chapterHeading("第一章 绪论 — 专项练习（30题）"),
  notePara("说明：★ 标记为高频考点，必须掌握。答案用红色标注在每题后。"),

  // --- 一、选择题（10题）---
  typeLabel("一、选择题（每题2分，共20分）"),

  starQ("1. ★ 一个完整的传感器通常由哪三部分组成？", "B"),
  option("A. 敏感元件、放大元件、显示元件"),
  option("B. 敏感元件、转换元件、测量电路"),
  option("C. 电阻元件、电容元件、电感元件"),
  option("D. 输入元件、处理元件、输出元件"),
  separator(),

  starQ("2. ★ 传感器分类按照被测量分类，以下哪项不属于物理量传感器？", "D"),
  option("A. 力传感器"),
  option("B. 温度传感器"),
  option("C. 位移传感器"),
  option("D. 气体成分传感器"),
  separator(),

  normalQ("3. 传感器的发展趋势不包括以下哪项？", "C"),
  option("A. 微型化"),
  option("B. 智能化"),
  option("C. 大型化"),
  option("D. 多功能化"),
  separator(),

  starQ("4. ★ 以下哪种分类方式是按传感器的工作原理划分的？", "A"),
  option("A. 电阻式、电容式、电感式"),
  option("B. 温度传感器、压力传感器、流量传感器"),
  option("C. 有源传感器、无源传感器"),
  option("D. 模拟传感器、数字传感器"),
  separator(),

  normalQ("5. 传感器在物联网系统中处于哪个层级？", "B"),
  option("A. 应用层"),
  option("B. 感知层"),
  option("C. 网络层"),
  option("D. 传输层"),
  separator(),

  starQ("6. ★ 以下哪项属于传感器的转换元件？", "C"),
  option("A. 弹性膜片"),
  option("B. 壳体"),
  option("C. 应变片"),
  option("D. 显示屏"),
  separator(),

  normalQ("7. 将非电量转换为电量的装置称为？", "A"),
  option("A. 传感器"),
  option("B. 变送器"),
  option("C. 控制器"),
  option("D. 执行器"),
  separator(),

  starQ("8. ★ 按能量关系分类，传感器可分为有源传感器和？", "B"),
  option("A. 电源传感器"),
  option("B. 无源传感器"),
  option("C. 有电传感器"),
  option("D. 能动传感器"),
  separator(),

  normalQ("9. 以下哪项不是传感器的静态特性指标？", "D"),
  option("A. 灵敏度"),
  option("B. 线性度"),
  option("C. 迟滞"),
  option("D. 响应时间"),
  separator(),

  normalQ("10. 智能传感器与传统传感器的主要区别在于？", "A"),
  option("A. 具有信息处理和通信功能"),
  option("B. 体积更小"),
  option("C. 精度更高"),
  option("D. 价格更低"),
  separator(),

  // --- 二、判断题（10题）---
  typeLabel("二、判断题（每题1分，共10分，正确打√，错误打×）"),

  starQ("11. ★ 敏感元件是传感器中直接感受被测量的部分。", "√"),
  separator(),

  normalQ("12. 所有的传感器都需要外部电源才能工作。", "×"),
  separator(),

  starQ("13. ★ 传感器按输出信号类型可分为模拟传感器和数字传感器。", "√"),
  separator(),

  normalQ("14. 传感器的精度越高，其灵敏度一定越高。", "×"),
  separator(),

  starQ("15. ★ 传感器是物联网感知层的核心器件。", "√"),
  separator(),

  normalQ("16. 传感器微型化是指只减小体积而不考虑性能。", "×"),
  separator(),

  normalQ("17. 物理量传感器包括力、热、光、电、磁、声等传感器。", "√"),
  separator(),

  normalQ("18. 转换元件的作用是将敏感元件输出的非电量转换为电信号。", "√"),
  separator(),

  normalQ("19. 传感器只能用于工业自动化领域。", "×"),
  separator(),

  normalQ("20. 多功能传感器可以同时检测多种物理量。", "√"),
  separator(),

  // --- 三、填空题（10题）---
  typeLabel("三、填空题（每题2分，共20分）"),

  starQ("21. ★ 传感器一般由_______、转换元件和测量电路三部分组成。", "敏感元件"),
  separator(),

  starQ("22. ★ 传感器按被测量分类，可分为物理量传感器、化学量传感器和_______传感器。", "生物量"),
  separator(),

  normalQ("23. 传感器的_______化是指传感器与微处理器结合，具有自动校准、自诊断等功能。", "智能"),
  separator(),

  normalQ("24. 传感器的发展趋势包括微型化、_______、多功能化和网络化。", "智能化"),
  separator(),

  starQ("25. ★ 传感器是能感受规定的被测量并按照一定规律转换成可用_______的器件或装置。", "输出信号"),
  separator(),

  normalQ("26. 按能量关系分，_______传感器是指不需要外部电源，直接将被测量转换为电信号输出的传感器。", "有源"),
  separator(),

  normalQ("27. 物联网的体系架构可分为感知层、网络层和_______层。", "应用"),
  separator(),

  normalQ("28. 传感器的_______元件是指传感器中能直接感受或响应被测量的部分。", "敏感"),
  separator(),

  normalQ("29. 按工作原理分类，传感器可分为结构型传感器和_______型传感器。", "物性"),
  separator(),

  normalQ("30. 传感器技术是现代信息技术的三大支柱之一，另外两个是_______技术和计算机技术。", "通信"),
  separator(),
];

// ============================================================
// 第二章 传感器基本特性 专项练习（15题）
// ============================================================

const ch2Content = [
  newPage(),
  chapterHeading("第二章 传感器基本特性 — 专项练习（15题）"),

  // 选择题
  typeLabel("一、选择题（每题2分）"),

  starQ("1. ★ 传感器的灵敏度是指输出变化量与_______变化量之比。", "A"),
  option("A. 输入"),
  option("B. 温度"),
  option("C. 时间"),
  option("D. 电压"),
  separator(),

  starQ("2. ★ 线性度是表征传感器输入-输出_______与拟合直线之间偏离程度的指标。", "B"),
  option("A. 理论曲线"),
  option("B. 实际曲线"),
  option("C. 理想曲线"),
  option("D. 标定曲线"),
  separator(),

  starQ("3. ★ 迟滞是指传感器在正行程和反行程中，输入-输出曲线_______的程度。", "C"),
  option("A. 重合"),
  option("B. 平行"),
  option("C. 不重合"),
  option("D. 对称"),
  separator(),

  starQ("4. ★ 重复性是指传感器在相同条件下，输入量按同一方向连续多次变化时，所得曲线_______的程度。", "B"),
  option("A. 分散"),
  option("B. 不一致"),
  option("C. 重合"),
  option("D. 平行"),
  separator(),

  starQ("5. ★ 传感器的动态特性是指传感器对随时间变化的_______的响应特性。", "A"),
  option("A. 输入量"),
  option("B. 输出量"),
  option("C. 电源"),
  option("D. 负载"),
  separator(),

  // 判断题
  typeLabel("二、判断题（每题1分，正确打√，错误打×）"),

  starQ("6. ★ 灵敏度越高，传感器的测量范围通常越小。", "√"),
  separator(),

  normalQ("7. 传感器的线性度越好，表示输入-输出关系越接近直线。", "√"),
  separator(),

  starQ("8. ★ 迟滞误差产生的主要原因是传感器内部元件存在弹性滞后和摩擦。", "√"),
  separator(),

  normalQ("9. 动态特性好的传感器，其响应速度一定慢。", "×"),
  separator(),

  starQ("10. ★ 阶跃响应和频率响应是描述传感器动态特性的常用方法。", "√"),
  separator(),

  // 填空题
  typeLabel("三、填空题（每题2分）"),

  starQ("11. ★ 传感器静态特性的主要指标包括灵敏度、_______、迟滞和重复性。", "线性度"),
  separator(),

  starQ("12. ★ 灵敏度K = Δy/Δx，其中Δy表示_______的变化量。", "输出量"),
  separator(),

  normalQ("13. 一阶传感器的动态特性常用_______常数τ来描述。", "时间"),
  separator(),

  normalQ("14. 二阶传感器的动态特性常用固有频率ωn和_______比ξ来描述。", "阻尼"),
  separator(),

  normalQ("15. 传感器的_______误差是指传感器在满量程范围内，实际特性曲线与拟合直线之间的最大偏差。", "线性"),
  separator(),
];

// ============================================================
// 第三章 电阻式传感器 专项练习（15题）
// ============================================================

const ch3Content = [
  newPage(),
  chapterHeading("第三章 电阻式传感器 — 专项练习（15题）"),

  typeLabel("一、选择题（每题2分）"),

  starQ("1. ★ 金属电阻丝的应变效应是指电阻丝的_______发生变化时，其电阻值也相应变化的现象。", "B"),
  option("A. 温度"),
  option("B. 几何尺寸"),
  option("C. 材料"),
  option("D. 颜色"),
  separator(),

  starQ("2. ★ 惠斯通电桥在电阻式传感器中的主要作用是？", "C"),
  option("A. 放大信号"),
  option("B. 滤波"),
  option("C. 将微小电阻变化转换为电压输出"),
  option("D. 保护电路"),
  separator(),

  normalQ("3. 金属应变片的灵敏系数一般在什么范围？", "A"),
  option("A. 1.7～3.6"),
  option("B. 10～50"),
  option("C. 50～100"),
  option("D. 100～200"),
  separator(),

  starQ("4. ★ 单臂电桥、半桥和全桥三种接法中，灵敏度最高的是？", "D"),
  option("A. 单臂电桥"),
  option("B. 双臂电桥（对臂）"),
  option("C. 半桥"),
  option("D. 全桥"),
  separator(),

  normalQ("5. 半导体应变片的工作原理主要基于？", "B"),
  option("A. 应变效应"),
  option("B. 压阻效应"),
  option("C. 压电效应"),
  option("D. 霍尔效应"),
  separator(),

  typeLabel("二、判断题（每题1分）"),

  starQ("6. ★ 金属丝应变片是基于应变效应工作的。", "√"),
  separator(),

  normalQ("7. 惠斯通电桥只能测量静态应变，不能测量动态应变。", "×"),
  separator(),

  starQ("8. ★ 采用差动电桥（半桥或全桥）可以提高灵敏度和实现温度补偿。", "√"),
  separator(),

  normalQ("9. 应变片只能测量拉伸应变，不能测量压缩应变。", "×"),
  separator(),

  normalQ("10. 电阻应变式传感器不能用于称重测量。", "×"),
  separator(),

  typeLabel("三、填空题（每题2分）"),

  starQ("11. ★ 电阻丝的电阻值R=ρL/A，其中ρ为_______，L为长度，A为截面积。", "电阻率"),
  separator(),

  starQ("12. ★ 惠斯通电桥的输出电压与桥臂电阻变化量成_______关系（在一定范围内）。", "线性"),
  separator(),

  normalQ("13. 应变片粘贴时，应保证粘贴面_______、无油污和锈蚀。", "平整光洁"),
  separator(),

  normalQ("14. 电阻式传感器可用来测量力、压力、_______、加速度等物理量。", "位移"),
  separator(),

  normalQ("15. 金属应变片的主要缺点是灵敏系数较_______。", "低"),
  separator(),
];

// ============================================================
// 第四章 电容式传感器 专项练习（15题）
// ============================================================

const ch4Content = [
  newPage(),
  chapterHeading("第四章 电容式传感器 — 专项练习（15题）"),

  typeLabel("一、选择题（每题2分）"),

  starQ("1. ★ 变极距型电容式传感器的工作原理是改变电容器的？", "A"),
  option("A. 极板间距"),
  option("B. 极板面积"),
  option("C. 介质常数"),
  option("D. 极板材料"),
  separator(),

  starQ("2. ★ 电容式传感器按工作原理分类，不包括以下哪种？", "D"),
  option("A. 变极距型"),
  option("B. 变面积型"),
  option("C. 变介质型"),
  option("D. 变电阻型"),
  separator(),

  normalQ("3. 变极距型电容传感器，为了改善非线性，常采用什么结构？", "C"),
  option("A. 单极板结构"),
  option("B. 串联结构"),
  option("C. 差动结构"),
  option("D. 并联结构"),
  separator(),

  normalQ("4. 电容式传感器测量电路中，电桥电路适用于哪种电容传感器？", "B"),
  option("A. 变介质型"),
  option("B. 变极距型和变面积型"),
  option("C. 只能变面积型"),
  option("D. 只能变介质型"),
  separator(),

  normalQ("5. 电容式传感器抗干扰的措施不包括以下哪项？", "D"),
  option("A. 采用屏蔽线"),
  option("B. 提高激励电源频率"),
  option("C. 采用驱动电缆技术"),
  option("D. 降低电源电压"),
  separator(),

  typeLabel("二、判断题（每题1分）"),

  starQ("6. ★ 电容式传感器的基本工作原理是将被测量的变化转换为电容量的变化。", "√"),
  separator(),

  normalQ("7. 变极距型电容传感器具有线性输出特性。", "×"),
  separator(),

  normalQ("8. 电容式传感器不能用于测量位移。", "×"),
  separator(),

  normalQ("9. 驱动电缆技术是为了减小分布电容的影响。", "√"),
  separator(),

  normalQ("10. 电容式传感器的高阻抗特性使其容易受到外界电磁场的干扰。", "√"),
  separator(),

  typeLabel("三、填空题（每题2分）"),

  starQ("11. ★ 平板电容器的电容量C = εA/d，其中ε为_______常数。", "介电"),
  separator(),

  starQ("12. ★ 电容式传感器的三种基本类型是变极距型、变面积型和_______型。", "变介质"),
  separator(),

  normalQ("13. 电容式传感器的常用测量电路有_______电路、调频电路和脉冲宽度调制电路。", "交流电桥"),
  separator(),

  normalQ("14. 变面积型电容传感器的优点是输出特性呈_______关系。", "线性"),
  separator(),

  normalQ("15. 电容式传感器可在_______、高温、强辐射等恶劣条件下工作。", "高压"),
  separator(),
];

// ============================================================
// 第五章 电感式传感器 专项练习（15题）
// ============================================================

const ch5Content = [
  newPage(),
  chapterHeading("第五章 电感式传感器 — 专项练习（15题）"),

  typeLabel("一、选择题（每题2分）"),

  starQ("1. ★ 电感式传感器按工作原理分类，不包括以下哪种？", "D"),
  option("A. 变磁阻式（自感式）"),
  option("B. 电涡流式"),
  option("C. 差动变压器式（互感式）"),
  option("D. 电容式"),
  separator(),

  starQ("2. ★ 变磁阻式电感传感器是通过改变什么来工作的？", "A"),
  option("A. 磁路磁阻"),
  option("B. 电容"),
  option("C. 电阻"),
  option("D. 电感"),
  separator(),

  normalQ("3. 差动变压器式传感器属于哪种类型？", "B"),
  option("A. 自感式"),
  option("B. 互感式"),
  option("C. 电容式"),
  option("D. 压阻式"),
  separator(),

  starQ("4. ★ 电涡流式传感器的工作原理是基于什么效应？", "C"),
  option("A. 压电效应"),
  option("B. 霍尔效应"),
  option("C. 电涡流效应"),
  option("D. 热电效应"),
  separator(),

  normalQ("5. 差动结构的电感传感器主要优点是什么？", "A"),
  option("A. 提高灵敏度、改善线性"),
  option("B. 减小体积"),
  option("C. 降低成本"),
  option("D. 增加重量"),
  separator(),

  typeLabel("二、判断题（每题1分）"),

  starQ("6. ★ 电涡流式传感器可以非接触测量位移、振动等物理量。", "√"),
  separator(),

  normalQ("7. 变磁阻式传感器的灵敏度与线圈匝数无关。", "×"),
  separator(),

  normalQ("8. 差动变压器式传感器输出的是直流电压。", "×"),
  separator(),

  normalQ("9. 电涡流传感器对被测材料的电导率和磁导率不敏感。", "×"),
  separator(),

  normalQ("10. 电感式传感器的测量电路常采用交流电桥。", "√"),
  separator(),

  typeLabel("三、填空题（每题2分）"),

  starQ("11. ★ 电感式传感器按工作原理可分为变磁阻式（自感式）、_______式和差动变压器式（互感式）。", "电涡流"),
  separator(),

  normalQ("12. 变磁阻式传感器的基本结构由_______、衔铁和铁芯组成。", "线圈"),
  separator(),

  starQ("13. ★ 电涡流式传感器可以非接触测量_______、振动、厚度等参数。", "位移"),
  separator(),

  normalQ("14. 差动变压器式传感器属于_______式传感器（填自感或互感）。", "互感"),
  separator(),

  normalQ("15. 电感式传感器具有结构简单、_______可靠、灵敏度高等优点。", "工作"),
  separator(),
];

// ============================================================
// 文档组装
// ============================================================

const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "宋体", size: 24 } },
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 32, bold: true, font: "黑体" },
        paragraph: { spacing: { before: 360, after: 180 }, outlineLevel: 0 },
      },
      {
        id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "黑体" },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 1 },
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A4
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      headers: {
        default: new Header({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [new TextRun({ text: "《传感器原理及检测技术》期末押题版", font: "宋体", size: 18, color: "888888" })],
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({ text: "第 ", font: "宋体", size: 18, color: "888888" }),
                new TextRun({ children: [PageNumber.CURRENT], font: "宋体", size: 18, color: "888888" }),
                new TextRun({ text: " 页", font: "宋体", size: 18, color: "888888" }),
              ],
            }),
          ],
        }),
      },
      children: [
        // 封面
        ...coverContent,
        newPage(),

        // 目录页提示
        mainHeading("目  录"),
        notePara("（在 Word 中右键此处 → 更新域，可自动生成目录）"),
        new TableOfContents("目录", { hyperlink: true, headingStyleRange: "1-2" }),
        newPage(),

        // 第一章
        mainHeading("第一部分  第一章专项练习"),
        ...ch1Content,
        newPage(),

        // 第二章
        mainHeading("第二部分  第二章专项练习"),
        ...ch2Content,

        // 第三章
        ...ch3Content,

        // 第四章
        ...ch4Content,

        // 第五章
        ...ch5Content,
      ],
    },
  ],
});

// ============================================================
// 输出
// ============================================================

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(OUTPUT, buffer);
  console.log(`✅ 第1步完成！文件已保存至：${OUTPUT}`);
  console.log(`   包含：封面 + 第一章30题 + 第二～五章各15题`);
});
