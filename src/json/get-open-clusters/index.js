const arc = require("@architect/functions")

async function route(req, res) {
  res({
    json: { msg: "posting membership" }
  })
}

exports.handler = arc.json.get(route)
