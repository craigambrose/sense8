function sum(values) {
  return values.reduce((a, b) => a + b)
}

function mean(values) {
  if (values.length > 1) {
    return sum(values) / values.length
  }
  return values[0]
}

function getMatchScores(user, clusters) {
  return []
}

function getMatchScore(user, cluster) {
  return getBirthdayScore() + getDiversityScore()
}

function getBirthdayScore(user, cluster) {
  return mean(
    cluster.users.map(clusterUser => {
      return clusterUser.birthday == user.birthday ? 100 : 0
    })
  )
}

function getDiversityScore(user, cluster) {
  return 0
}

module.exports = {
  getBirthdayScore
}
