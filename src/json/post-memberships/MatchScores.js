function sum(values) {
  return values.reduce((a, b) => a + b)
}

function mean(values) {
  if (values.length > 1) {
    return sum(values) / values.length
  }
  return values[0]
}

function buildDate(dateString) {
  return dateString ? new Date(dateString + " UTC") : null
}

function datesEqual(date1, date2) {
  return date1.getTime() == date2.getTime()
}

function monthsEqual(date1, date2) {
  return date1.getMonth() == date2.getMonth()
}

function yearsEqual(date1, date2) {
  return date1.getFullYear() == date2.getFullYear()
}

function getMatchScores(user, clusters) {
  return []
}

function getMatchScore(user, cluster) {
  return getBirthdayScore() + getDiversityScore()
}

function getDateBirthdayScore(userDate, clusterUserDate) {
  if (datesEqual(userDate, clusterUserDate)) {
    return 100
  } else if (
    monthsEqual(userDate, clusterUserDate) &&
    yearsEqual(userDate, clusterUserDate)
  ) {
    return 80
  }
  return 0
}

function getUserBirthdayScore(user, clusterUser) {
  return getDateBirthdayScore(
    buildDate(user.birthday),
    buildDate(clusterUser.birthday)
  )
}

function getBirthdayScore(user, cluster) {
  return mean(
    cluster.users.map(clusterUser => {
      return getUserBirthdayScore(user, clusterUser)
    })
  )
}

function getDiversityScore(user, cluster) {
  return 0
}

module.exports = {
  getBirthdayScore
}
