const data = require("@architect/data")

function findOpenClusters() {
  return []
}

async function createNewCluster(user) {
  const cluster = {
    clusterId: user.id,
    createdAt: Date.now()
  }

  const newCluster = await data.clusters.put(cluster)

  console.log("created cluster", newCluster)
  return newCluster
}

function findBestCluster(user) {
  console.log("calling find best cluster", user)

  const openClusters = findOpenClusters()
  if (openClusters.length == 0) {
    createNewCluster(user)
  }
}

module.exports = { findBestCluster }
