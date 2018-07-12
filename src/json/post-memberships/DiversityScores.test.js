const getDiversityScore = require("./DiversityScores")
const test = require("tape")

const craig = {
  userId: "craig",
  birthday: "11/21/1978"
}

test("getDiversityScore is 0 if something", t => {
  t.plan(1)

  const cluster = {
    clusterId: "all_21st",
    createdAt: Date.now(),
    users: [{ birthday: "5/21/1988" }]
  }

  t.equal(getDiversityScore(craig, cluster), 0)
})
