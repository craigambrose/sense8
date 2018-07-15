const data = require("@architect/data")
var db = require("@architect/data/db")
const { getMatchScores, bestMatchScore } = require("./MatchScores")

function findOpenClusters() {
  // data.listTables({}, console.log)
  // console.log("index name", console.log(data._name("clusters-isOpen-index")))

  const result = data.clusters.query({
    KeyConditionExpression: "#isOpen = :isOpen",
    // TableName: `sense8-${process.env.NODE_ENV}-clusters`,
    IndexName: data._name("clusters-isOpen-index"),
    ExpressionAttributeNames: {
      "#isOpen": "isOpen"
    },
    ExpressionAttributeValues: {
      ":isOpen": 1
    }
  })
  return result
}

async function createNewCluster(user) {
  const cluster = {
    clusterId: user.id,
    createdAt: Date.now(),
    isOpen: 1
  }

  const newCluster = await data.clusters.put(cluster)

  console.log("created cluster", newCluster)
  return newCluster
}

async function findBestCluster(user) {
  // console.log("calling find best cluster", user)

  const openClusters = await findOpenClusters()
  console.log("got open clusters result", openClusters)
  if (openClusters.length == 0) return createNewCluster(user)

  const scores = getMatchScores(user, openClusters)
  console.log("getting match scores", scores)

  const bestScore = bestMatchScore(scores)
  console.log("best match score", scores)
}

module.exports = { findBestCluster }
