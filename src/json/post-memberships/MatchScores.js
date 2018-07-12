const getBirthdayScore = require("./BirthdayScores")
const getDiversityScore = require("./DiversityScores")

function getMatchScores(user, clusters) {
  return []
}

function getMatchScore(user, cluster) {
  return getBirthdayScore(user, cluster) + getDiversityScore(user, cluster)
}

module.exports = {
  getMatchScore,
  getMatchScores
}
