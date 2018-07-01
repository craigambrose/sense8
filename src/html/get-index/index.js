let arc = require("@architect/functions")
let aws = require("aws-sdk")

buckets = {
  production: "sense8clusters.joinapod.com",
  staging: "sense8clustersstaging.joinapod.com"
}

function route(req, res) {
  if (process.env.NODE_ENV === "testing") {
    fs = require("fs")
    fs.readFile("./.static/index.html", "utf8", function(err, data) {
      if (err) {
        return console.log(err)
        res({ html: "error" })
      } else {
        res({ html: data })
      }
    })
  } else {
    let s3 = new aws.S3()
    var getParams = {
      Bucket: buckets[process.env.NODE_ENV],
      Key: "index.html"
    }

    s3.getObject(getParams, function(err, data) {
      if (err) console.log(err)
      var htmlText = data.Body.toString()
      var staticPath = req._static("/static")

      res({ html: htmlText.replace(/\/static/g, staticPath) })
    })
  }
}

// function route(req, res) {
//   console.log(JSON.stringify(req, null, 2))
//   console.log('env', process.env.NODE_ENV)

//   let jsUrl = req._static('/build/static/js/main.js')
//   let cssUrl = req._static('/build/static/css/main.css')

//   res(
//     {
//       html: `
//         <!DOCTYPE html>
//         <html lang="en">
//           <head>
//             <meta charset="utf-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//             <meta name="theme-color" content="#000000">
//             <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
//             <link rel="stylesheet" href="${cssUrl}" crossorigin="anonymous">
//             <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
//             <title>React App</title>
//           </head>
//           <body>
//             <noscript>
//               You need to enable JavaScript to run this app.
//             </noscript>
//             <div id="root"></div>
//             <script type="text/javascript" src="${jsUrl}"></script>
//           </body>
//         </html>
//       `
//     }
//   )
// }

exports.handler = arc.html.get(route)
