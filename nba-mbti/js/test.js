/* ================================================================
   NBA STAR MBTI — TEST ENGINE
   Scoring, MBTI type calculation, match percentage, ranking
   ================================================================ */

// User's accumulated scores across all 8 poles
let userScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

// Track answered questions for undo support
let answers = [];  // [{questionId, pole}]

/**
 * Record an answer and update scores.
 * @param {number} questionId
 * @param {string} pole - 'E','I','S','N','T','F','J','P'
 */
function recordAnswer(questionId, pole) {
  // If already answered, undo previous score
  const existing = answers.find(a => a.questionId === questionId);
  if (existing) {
    userScores[existing.pole]--;
  }

  // Record new answer
  userScores[pole]++;

  // Update answers array
  if (existing) {
    existing.pole = pole;
  } else {
    answers.push({ questionId, pole });
  }
}

/**
 * Remove the last answer (for "previous question" undo).
 * @param {number} questionId
 */
function removeAnswer(questionId) {
  const idx = answers.findIndex(a => a.questionId === questionId);
  if (idx !== -1) {
    userScores[answers[idx].pole]--;
    answers.splice(idx, 1);
  }
}

/**
 * Determine the MBTI type from accumulated scores.
 * Tie goes to the first pole in the pair (E over I, S over N, T over F, J over P).
 * @param {object} scores
 * @returns {string} e.g., "ENTJ"
 */
function determineMBTIType(scores) {
  const E_I = scores.E >= scores.I ? 'E' : 'I';
  const S_N = scores.S >= scores.N ? 'S' : 'N';
  const T_F = scores.T >= scores.F ? 'T' : 'F';
  const J_P = scores.J >= scores.P ? 'J' : 'P';
  return E_I + S_N + T_F + J_P;
}

/**
 * Calculate match percentage between user scores and a star's MBTI profile.
 * For each dimension, take the user's score on the star's preferred pole,
 * normalize to 0-100%. Average across all 4 dimensions.
 * @param {object} userScores
 * @param {object} star - NBA_STARS entry
 * @returns {number} 0-100 integer
 */
function calculateMatchPercentage(userScores, star) {
  const starType = star.mbtiType;  // e.g., "ENTJ"
  const poles = [starType[0], starType[1], starType[2], starType[3]];

  let totalMatch = 0;
  for (const pole of poles) {
    const score = userScores[pole] || 0;
    totalMatch += score / 5;  // Each dimension has 5 questions, max score = 5
  }

  return Math.round((totalMatch / 4) * 100);
}

/**
 * Get top N matched NBA stars.
 * @param {object} userScores
 * @param {Array} stars - NBA_STARS array
 * @param {number} count - number of top matches to return (default 3)
 * @returns {Array} stars with matchPercent added, sorted descending
 */
function getTopMatches(userScores, stars, count = 3) {
  return stars
    .map(star => ({
      ...star,
      matchPercent: calculateMatchPercentage(userScores, star)
    }))
    .sort((a, b) => b.matchPercent - a.matchPercent)
    .slice(0, count);
}

/**
 * Get all 16 stars ranked by match percentage.
 * @param {object} userScores
 * @param {Array} stars
 * @returns {Array} all stars with matchPercent, sorted descending
 */
function getAllMatchesRanked(userScores, stars) {
  return stars
    .map(star => ({
      ...star,
      matchPercent: calculateMatchPercentage(userScores, star)
    }))
    .sort((a, b) => b.matchPercent - a.matchPercent);
}

/**
 * Reset all test state for a new test.
 */
function resetTest() {
  userScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
  answers = [];
}

/**
 * Get the score breakdown for the 4 MBTI dimensions.
 * Returns the dominant pole and percentage strength for each dimension.
 * @param {object} scores
 * @returns {Array} [{dimension: 'EI', leftPole: 'E', rightPole: 'I', leftScore, rightScore, pct}]
 */
function getDimensionBreakdown(scores) {
  const dims = [
    { dimension: 'EI', left: 'E', right: 'I' },
    { dimension: 'SN', left: 'S', right: 'N' },
    { dimension: 'TF', left: 'T', right: 'F' },
    { dimension: 'JP', left: 'J', right: 'P' }
  ];

  return dims.map(d => {
    const leftScore = scores[d.left] || 0;
    const rightScore = scores[d.right] || 0;
    const total = leftScore + rightScore || 1;
    const pct = Math.round((leftScore / total) * 100);
    return {
      ...d,
      leftScore,
      rightScore,
      pct  // percentage toward the LEFT pole (0 = fully right, 100 = fully left)
    };
  });
}
