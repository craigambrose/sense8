const arc = require("@architect/functions")
const data = require("@architect/data")

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

async function route(req, res) {
  const clusters = await allOpenClusters()
  res({
    json: { clusters }
  })
}

exports.handler = arc.json.get(route)
