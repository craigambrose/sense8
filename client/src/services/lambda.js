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
}

export function loadOpenClusters() {
  return fetch("/open-clusters", {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(res => res.json())
}
