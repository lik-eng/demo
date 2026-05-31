/* ================================================================
   NBA STAR MBTI — 应用控制器
   页面导航、题目流程、结果渲染（含雷达图）、动画
   ================================================================ */

const AppState = {
  currentSection: 'landing',
  currentQuestion: 0,       // 0-indexed into QUESTIONS array
  userMBTI: '',
  topMatches: [],
  allMatches: []
};

/* ================================================================
   页面导航
   ================================================================ */

function showSection(name) {
  document.querySelectorAll('.section').forEach(s => {
    s.classList.add('hidden');
  });

  const target = document.getElementById(name);
  if (target) {
    target.classList.remove('hidden');
    AppState.currentSection = name;

    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* ================================================================
   首页 → 测试
   ================================================================ */

function startTest() {
  resetTest();
  AppState.currentQuestion = 0;
  AppState.userMBTI = '';
  AppState.topMatches = [];
  AppState.allMatches = [];
  showSection('test');
  renderQuestion(0);
}

/* ================================================================
   题目渲染与交互
   ================================================================ */

function renderQuestion(index) {
  if (index < 0 || index >= QUESTIONS.length) return;

  const q = QUESTIONS[index];
  AppState.currentQuestion = index;

  // 更新 DOM
  document.getElementById('question-dimension').textContent = q.dimensionLabel;
  document.getElementById('question-number').textContent = 'Q' + q.id;
  document.getElementById('question-text').textContent = q.text;
  document.getElementById('answer-text-a').textContent = q.options[0].text;
  document.getElementById('answer-text-b').textContent = q.options[1].text;

  // 重置按钮状态
  const btnA = document.getElementById('answer-a');
  const btnB = document.getElementById('answer-b');
  btnA.classList.remove('answer-btn--selected');
  btnB.classList.remove('answer-btn--selected');
  btnA.disabled = false;
  btnB.disabled = false;

  // 检查是否已答过（用于"上一题"导航）
  const existing = answers.find(a => a.questionId === q.id);
  if (existing) {
    if (existing.pole === q.options[0].pole) {
      btnA.classList.add('answer-btn--selected');
    } else {
      btnB.classList.add('answer-btn--selected');
    }
    btnA.disabled = true;
    btnB.disabled = true;
  }

  // 更新进度条
  updateProgress();

  // 更新上一题按钮状态
  document.getElementById('btn-prev').disabled = (index === 0);

  // 卡片入场动画
  const card = document.getElementById('question-card');
  card.style.animation = 'none';
  card.offsetHeight; // 强制回流
  card.style.animation = 'card-enter 0.45s ease forwards';
}

function handleAnswer(optionKey) {
  const q = QUESTIONS[AppState.currentQuestion];
  const option = optionKey === 'A' ? q.options[0] : q.options[1];

  // 视觉效果——高亮选中项
  const btnA = document.getElementById('answer-a');
  const btnB = document.getElementById('answer-b');
  btnA.classList.remove('answer-btn--selected');
  btnB.classList.remove('answer-btn--selected');

  const selectedBtn = optionKey === 'A' ? btnA : btnB;
  selectedBtn.classList.add('answer-btn--selected');
  btnA.disabled = true;
  btnB.disabled = true;

  // 记录答案
  recordAnswer(q.id, option.pole);

  // 短暂延迟后跳转，让动画播放
  setTimeout(() => {
    if (AppState.currentQuestion < QUESTIONS.length - 1) {
      AppState.currentQuestion++;
      renderQuestion(AppState.currentQuestion);
    } else {
      finishTest();
    }
  }, 350);
}

function previousQuestion() {
  if (AppState.currentQuestion <= 0) return;

  // 回退前移除当前题的答案
  const q = QUESTIONS[AppState.currentQuestion];
  removeAnswer(q.id);

  AppState.currentQuestion--;
  renderQuestion(AppState.currentQuestion);
}

function quitTest() {
  if (answers.length > 0) {
    if (!confirm('确定要退出吗？你的答题进度将会丢失。')) return;
  }
  resetTest();
  showSection('landing');
}

function updateProgress() {
  const pct = ((AppState.currentQuestion + 1) / QUESTIONS.length) * 100;
  document.getElementById('progress-fill').style.width = pct + '%';
  document.getElementById('progress-count').textContent =
    (AppState.currentQuestion + 1) + ' / ' + QUESTIONS.length;
}

/* ================================================================
   测试完成 → 结果页
   ================================================================ */

function finishTest() {
  // 判定 MBTI 类型
  AppState.userMBTI = determineMBTIType(userScores);

  // 获取排名
  AppState.topMatches = getTopMatches(userScores, NBA_STARS, 3);
  AppState.allMatches = getAllMatchesRanked(userScores, NBA_STARS);

  // 展示结果
  showSection('results');
  renderResults();
}

/* ================================================================
   结果页渲染
   ================================================================ */

function renderResults() {
  // MBTI 徽章
  document.getElementById('result-mbti-badge').textContent = AppState.userMBTI;

  // 主卡片（最佳匹配）
  renderPrimaryCard(AppState.topMatches[0]);

  // 第二、第三匹配
  renderSecondaryCards(AppState.topMatches[1], AppState.topMatches[2]);

  // 维度分析
  renderDimensionBreakdown();

  // 全部排名
  renderAllStarsGrid();

  // 重置折叠状态
  document.getElementById('allstars-grid').classList.add('hidden');

  // 触发交错动画
  requestAnimationFrame(() => {
    document.querySelectorAll('.card-animate--delay-1, .card-animate--delay-2').forEach(el => {
      el.style.animation = 'none';
      el.offsetHeight;
      el.style.animation = '';
    });
  });
}

function renderPrimaryCard(star) {
  // 图片
  const img = document.getElementById('primary-img');
  const fallback = document.getElementById('primary-fallback');
  img.src = star.imageUrl;
  img.alt = star.name;
  img.style.display = '';
  fallback.classList.add('hidden');
  fallback.textContent = star.name[0];

  // 2K评分徽章
  document.getElementById('primary-rating').textContent = star.twoKRating;

  // 姓名 & 昵称
  document.getElementById('primary-name').textContent = star.name;
  document.getElementById('primary-nickname').textContent = '「' + star.nickname + '」';

  // 标签
  document.getElementById('primary-team').textContent = star.team;
  document.getElementById('primary-position').textContent = star.position;
  document.getElementById('primary-mbti').textContent = star.mbtiType;

  // 匹配度环形图
  document.getElementById('primary-percent').textContent = star.matchPercent + '%';
  const ring = document.getElementById('primary-ring');
  ring.style.setProperty('--ring-pct', star.matchPercent + '%');

  // 描述
  document.getElementById('primary-desc').textContent = star.description;

  // 特质标签
  const traitsContainer = document.getElementById('primary-traits');
  traitsContainer.innerHTML = star.traits.map(t =>
    '<span class="trait-tag">' + t + '</span>'
  ).join('');

  // 六维雷达图
  drawRadarChart('primary-radar', star.radarScores);

  // 强项条
  const strengthsContainer = document.getElementById('primary-strengths');
  strengthsContainer.innerHTML = star.strengths.map((s, i) =>
    '<div class="strength-bar">' +
      '<span class="strength-bar__label">' + s + '</span>' +
      '<div class="strength-bar__track">' +
        '<div class="strength-bar__fill" style="width: ' + (95 - i * 8) + '%;"></div>' +
      '</div>' +
    '</div>'
  ).join('');

  // 额外信息
  document.getElementById('primary-move').textContent = star.signatureMove;
  document.getElementById('primary-accolades').textContent = star.accolades;
}

function renderSecondaryCards(star2, star3) {
  const container = document.getElementById('secondary-cards');
  container.innerHTML = '';

  [star2, star3].forEach((star, idx) => {
    if (!star) return;

    const card = document.createElement('div');
    card.className = 'player-card--secondary card-animate card-animate--delay-' + (idx + 1);
    card.innerHTML =
      '<div class="player-card__image-wrap">' +
        '<img class="player-card__img" src="' + star.imageUrl + '" alt="' + star.name + '" ' +
             'onerror="this.style.display=\'none\';this.nextElementSibling.classList.remove(\'hidden\');">' +
        '<div class="player-card__img-fallback hidden">' + star.name[0] + '</div>' +
        '<div class="player-card__rating-badge">' + star.twoKRating + '</div>' +
      '</div>' +
      '<div class="player-card__info">' +
        '<div class="secondary__match-row">' +
          '<div class="match-ring-wrap">' +
            '<div class="match-ring" style="--ring-pct:' + star.matchPercent + '%">' +
              '<div class="match-ring__value">' + star.matchPercent + '%</div>' +
            '</div>' +
            '<span class="match-ring__label">匹配度</span>' +
          '</div>' +
          '<div>' +
            '<div class="player-card__name">' + star.name + '</div>' +
            '<div class="player-card__nickname">「' + star.nickname + '」</div>' +
            '<div class="player-card__meta">' +
              '<span class="meta-tag">' + star.team + '</span>' +
              '<span class="meta-tag meta-tag--mbti">' + star.mbtiType + '</span>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="secondary__radar-wrap">' +
          '<canvas class="radar-canvas radar-canvas--small" ' +
            'id="radar-' + star.id + '" width="200" height="200"></canvas>' +
        '</div>' +
      '</div>';

    container.appendChild(card);

    // 渲染小雷达图（等 DOM 挂载后）
    setTimeout(() => drawRadarChart('radar-' + star.id, star.radarScores, true), 50);
  });
}

function renderDimensionBreakdown() {
  const breakdown = getDimensionBreakdown(userScores);
  const container = document.getElementById('dimension-breakdown');
  container.innerHTML = '';

  const dimLabels = {
    EI: { left: '外向 (E)', right: '内向 (I)' },
    SN: { left: '感觉 (S)', right: '直觉 (N)' },
    TF: { left: '思考 (T)', right: '情感 (F)' },
    JP: { left: '判断 (J)', right: '感知 (P)' }
  };

  breakdown.forEach(dim => {
    const labels = dimLabels[dim.dimension];
    const dimDiv = document.createElement('div');
    dimDiv.className = 'dim-bar';
    dimDiv.innerHTML =
      '<span class="dim-bar__poles">' + labels.left + '</span>' +
      '<div class="dim-bar__track">' +
        '<div class="dim-bar__fill" style="width:' + dim.pct + '%;"></div>' +
        '<div class="dim-bar__indicator" style="left:' + dim.pct + '%;"></div>' +
      '</div>' +
      '<span class="dim-bar__poles">' + labels.right + '</span>';
    container.appendChild(dimDiv);
  });
}

function renderAllStarsGrid() {
  const grid = document.getElementById('allstars-content');
  grid.innerHTML = '';

  AppState.allMatches.forEach((star, idx) => {
    const card = document.createElement('div');
    card.className = 'mini-card' + (idx < 3 ? ' mini-card--top' : '');
    card.innerHTML =
      '<div class="mini-card__img-wrap">' +
        '<img class="mini-card__img" src="' + star.imageUrl + '" alt="' + star.name + '" ' +
             'onerror="this.style.display=\'none\';this.nextElementSibling.classList.remove(\'hidden\');">' +
        '<div class="player-card__img-fallback hidden" style="font-size:1.2rem;">' +
          star.name[0] +
        '</div>' +
        '<div class="mini-card__rank">' + (idx + 1) + '</div>' +
      '</div>' +
      '<div class="mini-card__info">' +
        '<div class="mini-card__name">' + star.name + '</div>' +
        '<div class="mini-card__mbti">' + star.mbtiType + '</div>' +
        '<div class="mini-card__pct">' + star.matchPercent + '%</div>' +
      '</div>';
    grid.appendChild(card);
  });
}

function toggleAllStars() {
  const grid = document.getElementById('allstars-grid');
  const btn = document.getElementById('btn-allstars');
  const isHidden = grid.classList.contains('hidden');

  if (isHidden) {
    grid.classList.remove('hidden');
    btn.textContent = '📊 收起全部排名';
    grid.scrollIntoView({ behavior: 'smooth' });
  } else {
    grid.classList.add('hidden');
    btn.textContent = '📊 查看全部排名';
  }
}

/* ================================================================
   六维雷达图（Canvas 绘制）
   ================================================================ */

const RADAR_DIMENSIONS = [
  { key: 'scoring',      label: '得分' },
  { key: 'defense',      label: '防守' },
  { key: 'playmaking',   label: '组织' },
  { key: 'athleticism',  label: '运动能力' },
  { key: 'bbiq',         label: '篮球智商' },
  { key: 'leadership',   label: '领导力' }
];

/**
 * 在指定的 Canvas 上绘制六维雷达图
 * @param {string} canvasId - Canvas 元素 ID
 * @param {object} scores - {scoring, defense, playmaking, athleticism, bbiq, leadership} 0-99
 * @param {boolean} isSmall - 是否为小尺寸（用于次要卡片）
 */
function drawRadarChart(canvasId, scores, isSmall) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !scores) return;

  const ctx = canvas.getContext('2d');
  const size = canvas.width;
  const center = size / 2;
  const count = RADAR_DIMENSIONS.length;
  const maxRadius = isSmall ? 75 : 115;

  // 清空画布
  ctx.clearRect(0, 0, size, size);

  // 计算每个维度的角度（从顶部开始顺时针）
  const getAngle = (i) => -Math.PI / 2 + (2 * Math.PI * i) / count;

  // 绘制背景网格（3层同心多边形）
  for (let level = 1; level <= 3; level++) {
    const r = (maxRadius * level) / 3;
    ctx.beginPath();
    for (let i = 0; i <= count; i++) {
      const angle = getAngle(i % count);
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.strokeStyle = 'rgba(42, 42, 62, 0.5)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // 绘制轴线
  for (let i = 0; i < count; i++) {
    const angle = getAngle(i);
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.lineTo(center + maxRadius * Math.cos(angle), center + maxRadius * Math.sin(angle));
    ctx.strokeStyle = 'rgba(42, 42, 62, 0.4)';
    ctx.lineWidth = 1;
    ctx.stroke();
  }

  // 绘制数据区域（半透明填充）
  ctx.beginPath();
  for (let i = 0; i <= count; i++) {
    const idx = i % count;
    const angle = getAngle(idx);
    const val = (scores[RADAR_DIMENSIONS[idx].key] || 0) / 99;
    const r = val * maxRadius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(245, 166, 35, 0.15)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(245, 166, 35, 0.7)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // 绘制数据点
  for (let i = 0; i < count; i++) {
    const angle = getAngle(i);
    const val = (scores[RADAR_DIMENSIONS[i].key] || 0) / 99;
    const r = val * maxRadius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);

    ctx.beginPath();
    ctx.arc(x, y, isSmall ? 3 : 5, 0, 2 * Math.PI);
    ctx.fillStyle = '#F5A623';
    ctx.fill();
    ctx.strokeStyle = '#0A0A0F';
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }

  // 绘制标签
  const labelFontSize = isSmall ? 9 : 12;
  ctx.font = labelFontSize + 'px "Microsoft YaHei", "PingFang SC", "Segoe UI", sans-serif';
  ctx.fillStyle = '#B0B0C0';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  for (let i = 0; i < count; i++) {
    const angle = getAngle(i);
    const labelR = maxRadius + (isSmall ? 18 : 24);
    const x = center + labelR * Math.cos(angle);
    const y = center + labelR * Math.sin(angle);
    ctx.fillText(RADAR_DIMENSIONS[i].label, x, y);
  }
}

/* ================================================================
   操作函数
   ================================================================ */

function retakeTest() {
  resetTest();
  AppState.currentQuestion = 0;
  showSection('test');
  renderQuestion(0);
}

function shareResult() {
  if (!AppState.topMatches.length) return;

  const top = AppState.topMatches[0];
  const text =
    '🏀 我的NBA球星MBTI人格测试结果 🏀\n\n' +
    '我的人格类型：' + AppState.userMBTI + '\n' +
    '最佳匹配球星：' + top.name + '（' + top.nickname + '）\n' +
    '匹配度：' + top.matchPercent + '% | 2K评分：' + top.twoKRating + '\n' +
    '球队：' + top.team + '\n' +
    '荣誉：' + top.accolades + '\n\n' +
    (AppState.topMatches[1]
      ? '第二匹配：' + AppState.topMatches[1].name + '（' + AppState.topMatches[1].matchPercent + '%）\n' +
        '第三匹配：' + AppState.topMatches[2].name + '（' + AppState.topMatches[2].matchPercent + '%）\n\n'
      : '\n') +
    '找到你的NBA灵魂搭档：来试试吧！\n' +
    '#NBAMBTI #NBA2K #人格测试';

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('结果已复制到剪贴板！📋 分享给你的朋友吧');
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand('copy');
    showToast('结果已复制到剪贴板！📋 分享给你的朋友吧');
  } catch (e) {
    showToast('复制失败，请手动截图分享。');
  }
  document.body.removeChild(textarea);
}

/* ================================================================
   图片加载失败处理
   ================================================================ */

function handleImageError(imgEl, type) {
  imgEl.style.display = 'none';
  if (type === 'primary') {
    const fallback = document.getElementById('primary-fallback');
    if (fallback) fallback.classList.remove('hidden');
  }
}

/* ================================================================
   Toast 通知
   ================================================================ */

function showToast(message) {
  // 移除已有 toast
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  toast.style.cssText =
    'position:fixed; bottom:2rem; left:50%; transform:translateX(-50%); ' +
    'background:var(--bg-card); color:var(--gold); border:1px solid var(--border-accent); ' +
    'padding:0.75rem 1.5rem; border-radius:var(--radius-md); font-family:var(--font-body); ' +
    'font-size:0.85rem; z-index:9999; animation:card-enter 0.3s ease forwards; ' +
    'box-shadow:0 4px 20px rgba(0,0,0,0.5);';
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.3s ease';
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

/* ================================================================
   键盘导航
   ================================================================ */

document.addEventListener('keydown', function(e) {
  if (AppState.currentSection === 'test') {
    if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
      e.preventDefault();
      const btnA = document.getElementById('answer-a');
      if (!btnA.disabled) handleAnswer('A');
    }
    if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D' || e.key === 'b' || e.key === 'B') {
      e.preventDefault();
      const btnB = document.getElementById('answer-b');
      if (!btnB.disabled) handleAnswer('B');
    }
    if (e.key === 'ArrowUp' || e.key === 'Backspace') {
      e.preventDefault();
      previousQuestion();
    }
  }

  if (AppState.currentSection === 'landing' && e.key === 'Enter') {
    e.preventDefault();
    startTest();
  }
});

/* ================================================================
   初始化
   ================================================================ */

document.addEventListener('DOMContentLoaded', function() {
  // 确保首页可见，其他页隐藏
  showSection('landing');
});
