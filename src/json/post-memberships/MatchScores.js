const getBirthdayScore = require("./BirthdayScores")
const getDiversityScore = require("./DiversityScores")

function getMatchScores(user, clusters) {
  return clusters.map(cluster => ({
    score: getMatchScore(user, cluster),
    cluster
  }))
}

function bestMatchScore(scores) {
  var bestScore = null
  scores.forEach(score => {
    if (bestScore == null || score.score > bestScore.score) {
      bestScore = score
    }
  })
  return bestScore
}

function getMatchScore(user, cluster) {
  return getBirthdayScore(user, cluster) + getDiversityScore(user, cluster)
}

module.exports = {
  getMatchScore,
  getMatchScores,
  bestMatchScore
}
