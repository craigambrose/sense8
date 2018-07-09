function getMatchScores(user, clusters) {
  return []
}

function getMatchScore(user, cluster) {
  return getBirthdayScore() + getDiversityScore()
}

function getBirthdayScore(user, cluster) {
  const clusterUser = cluster.users[0]
  return clusterUser.birthday == user.birthday ? 100 : 0
}

function getDiversityScore(user, cluster) {
  return 0
}

module.exports = {
  getBirthdayScore
}
