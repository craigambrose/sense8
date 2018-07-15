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
    users: []
  }

  const newCluster = await data.clusters.put(cluster)

  console.log("created cluster", newCluster)
  return newCluster
}

async function findBestCluster(user) {
  var result = null
  const openClusters = await allOpenClusters()

  if (openClusters.length >= 0) {
    const scores = getMatchScores(user, openClusters)
    const bestScore = bestMatchScore(scores)
    if (bestScore) result = bestScore.cluster
  }

  if (result) return result
  return createNewCluster(user)
}

async function addToCluster(user, cluster) {
  console.log("about to refetch with", { clusterId: cluster.clusterId })
  const existing = await data.clusters.get({ clusterId: cluster.clusterId })
  console.log("refetched existing", existing)

  existing.users.push(user)

  const updated = await data.clusters.put(existing)
  console.log("updated cluster", updated)
  return
}

module.exports = { findBestCluster, addToCluster }
