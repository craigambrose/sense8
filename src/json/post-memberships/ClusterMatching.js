const data = require("@architect/data")
const { getMatchScores, bestMatchScore } = require("./MatchScores")

function queryOpenClusters() {
  return data.clusters.query({
    KeyConditionExpression: "#isOpen = :isOpen",
    IndexName: data._name("clusters-isOpen-index"),
    ExpressionAttributeNames: {
      "#isOpen": "isOpen"
    },
    ExpressionAttributeValues: {
      ":isOpen": 1
    }
  })
}

async function allOpenClusters() {
  const result = await queryOpenClusters()
  return result.Items
}

async function createNewCluster(user) {
  const cluster = {
    clusterId: user.id,
    createdAt: Date.now(),
    isOpen: 1,
    users: [user]
  }

  const newCluster = await data.clusters.put(cluster)

  console.log("created cluster", newCluster)
  return newCluster
}

async function findBestCluster(user) {
  // console.log("calling find best cluster", user)

  const openClusters = await allOpenClusters()
  console.log("got open clusters result", openClusters)
  if (openClusters.length == 0) return createNewCluster(user)

  const scores = getMatchScores(user, openClusters)
  const bestScore = bestMatchScore(scores)
  console.log("best match score", scores)
}

module.exports = { findBestCluster }
