const arc = require("@architect/functions")
const data = require("@architect/data")

async function route(req, res) {
  const userId = req.params.userId
  const membership = await data.memberships.get({ userId })
  if (membership) {
    const { clusterId } = membership
    const cluster = await data.clusters.get({ clusterId })
    res({
      json: { cluster }
    })
  } else {
    res({ json: {} })
  }
}

exports.handler = arc.json.get(route)
