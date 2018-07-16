import AWS from "aws-sdk"

const awsConfig = {
  region: "us-east-1"
}

const lambda = new AWS.Lambda(awsConfig)

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json"
}

export function requestJoinCluster(user) {
  return fetch("/memberships", {
    method: "POST",
    headers,
    body: JSON.stringify(user)
  }).then(res => res.json())
}

export function loadClusterForUser(user) {
  return fetch(`/memberships/${user.id}`, {
    method: "GET",
    headers
  }).then(res => res.json())
}

export function loadOpenClusters() {
  return fetch("/open-clusters", {
    method: "GET",
    headers
  }).then(res => res.json())
}
