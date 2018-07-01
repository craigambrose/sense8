let arc = require('@architect/functions')

function route(req, res) {
  console.log(JSON.stringify(req, null, 2))
  res({
    json: {msg:'posting cluster'}
  })
}

exports.handler = arc.json.post(route)
