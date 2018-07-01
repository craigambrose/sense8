const arc = require("@architect/functions")
const data = require("@architect/data")

async function route(req, res) {
  const user = req.body
  const userId = user.id

  const existing = await data.memberships.get({ userId })

  if (existing) {
    console.log("already has membership for user", userId)
  } else {
    console.log("no membership yet for user", userId)
    console.log("creating")

    const membership = {
      userId,
      facebookUser: user,
      clusterId: null
    }

    const newMembership = await data.memberships.put(membership)
    console.log("created")
  }

  res({
    json: { msg: "posting membership" }
  })
}

exports.handler = arc.json.post(route)
