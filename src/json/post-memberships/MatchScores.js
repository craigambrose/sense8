const getBirthdayScore = require("./BirthdayScores")
const getDiversityScore = require("./DiversityScores")

function getMatchScores(user, clusters) {
  return []
}

function getMatchScore(user, cluster) {
  return getBirthdayScore() + getDiversityScore()
}

module.exports = {
  getMatchScore,
  getMatchScores
}
