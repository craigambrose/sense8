const MatchScores = require("./MatchScores")
const test = require("tape")

const craig = {
  userId: "craig",
  birthday: "11/21/1978"
}

test("getBirthdayScore is 0 if only birthday is way off", t => {
  t.plan(1)

  const cluster = {
    clusterId: "all_21st",
    createdAt: Date.now(),
    users: [{ birthday: "5/21/1988" }]
  }

  t.equal(MatchScores.getBirthdayScore(craig, cluster), 0)
})

test("getBirthdayScore is 100 if only birthday matches", t => {
  t.plan(1)

  const cluster = {
    clusterId: "all_21st",
    createdAt: Date.now(),
    users: [{ birthday: "11/21/1978" }]
  }

  t.equal(MatchScores.getBirthdayScore(craig, cluster), 100)
})
