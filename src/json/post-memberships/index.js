const arc = require("@architect/functions")
const data = require("@architect/data")
const ClusterMatching = require("./ClusterMatching")

async function findOrCreateMembership(user) {
  const userId = user.id
  const existing = await data.memberships.get({ userId })

  if (existing) {
    console.log("already has membership for user", userId)
    return existing
  } else {
    console.log("no membership yet for user", userId)
    console.log("creating")

    const membership = {
      userId,
      facebookUser: user,
      clusterId: null
    }

    const cluster = ClusterMatching.findBestCluster(user)
    const newMembership = await data.memberships.put(membership)

    return newMembership
  }
}

async function route(req, res) {
  const user = req.body
  const membership = await findOrCreateMembership(user)

  res({
    json: { msg: "posting membership" }
  })
}

exports.handler = arc.json.post(route)
