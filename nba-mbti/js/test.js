let userScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
let answers = [];

function recordAnswer(questionId, pole) {
  const existing = answers.find(a => a.questionId === questionId);
  if (existing) {
    userScores[existing.pole]--;
    existing.pole = pole;
  } else {
    answers.push({ questionId, pole });
  }
  userScores[pole]++;
}

function determineMBTIType(scores) {
  return (
    (scores.E >= scores.I ? 'E' : 'I') +
    (scores.S >= scores.N ? 'S' : 'N') +
    (scores.T >= scores.F ? 'T' : 'F') +
    (scores.J >= scores.P ? 'J' : 'P')
  );
}

function calculateMatchPercentage(userScores, star) {
  const dims = [
    ['E', 'I'], ['S', 'N'], ['T', 'F'], ['J', 'P']
  ];
  let total = 0;
  for (let i = 0; i < 4; i++) {
    const [left, right] = dims[i];
    const userLeft = userScores[left] || 0;
    const userRight = userScores[right] || 0;
    const starPole = star.mbtiType[i];
    const starScore = starPole === left ? userLeft : userRight;
    total += starScore / 5;
  }
  return Math.round((total / 4) * 100);
}

function getTopMatches(userScores, stars, count = 3) {
  return stars
    .map(star => ({ ...star, matchPercent: calculateMatchPercentage(userScores, star) }))
    .sort((a, b) => b.matchPercent - a.matchPercent)
    .slice(0, count);
}

function getAllMatchesRanked(userScores, stars) {
  return stars
    .map(star => ({ ...star, matchPercent: calculateMatchPercentage(userScores, star) }))
    .sort((a, b) => b.matchPercent - a.matchPercent);
}

function resetTest() {
  userScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  answers = [];
}

function getDimensionBreakdown(scores) {
  return [
    { dimension: 'EI', left: 'E', right: 'I' },
    { dimension: 'SN', left: 'S', right: 'N' },
    { dimension: 'TF', left: 'T', right: 'F' },
    { dimension: 'JP', left: 'J', right: 'P' }
  ].map(d => {
    const leftScore = scores[d.left] || 0;
    const rightScore = scores[d.right] || 0;
    const total = leftScore + rightScore || 1;
    return { ...d, leftScore, rightScore, pct: Math.round((leftScore / total) * 100) };
  });
}
