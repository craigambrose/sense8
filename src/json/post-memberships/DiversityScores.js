var { sum, mean } = require("./helpers")

function lastFrom(collection) {
  return collection.slice(-1)[0]
}

function hometownCountry(hometown) {
  if (!hometown) return null

  const parts = hometown.name.split(", ")
  return lastFrom(parts)
}

function userCountry(user) {
  return hometownCountry(user.hometown)
}

function getCountryScore(country1, country2) {
  return country1 && country1 == country2 ? 0 : 100
}

function getUserDiversityScore(user, clusterUser) {
  return getCountryScore(userCountry(user), userCountry(clusterUser))
}

function getDiversityScore(user, cluster) {
  return mean(
    cluster.users.map(clusterUser => {
      return getUserDiversityScore(user, clusterUser)
    })
  )
}

module.exports = getDiversityScore
