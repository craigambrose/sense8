import AWS from "aws-sdk"

const awsConfig = {
  region: "us-east-1"
}

const lambda = new AWS.Lambda(awsConfig)

export function requestJoinCluster(user) {
  return fetch("/memberships", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  // const params = {
  //   FunctionName: "sense8-match-user",
  //   InvocationType: "RequestResponse",
  //   LogType: "None"
  // }
  // lambda.invoke(params, function(error, data) {
  //   if (error) {
  //     console.log("got error", error)
  //     // prompt(error)
  //   } else {
  //     // results = JSON.parse(data.Payload)
  //     console.log("got result", data)
  //   }
  // })
}
