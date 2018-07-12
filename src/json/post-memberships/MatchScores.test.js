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

test("getBirthdayScore is 50 if only one birthday matches", t => {
  t.plan(1)

  const cluster = {
    clusterId: "all_21st",
    createdAt: Date.now(),
    users: [{ birthday: "11/21/1978" }, { birthday: "5/21/1988" }]
  }

  t.equal(MatchScores.getBirthdayScore(craig, cluster), 50)
})

test("getBirthdayScore is 90 if only month and year matches", t => {
  t.plan(1)

  const cluster = {
    clusterId: "all_21st",
    createdAt: Date.now(),
    users: [{ birthday: "11/01/1978" }]
  }

  t.equal(MatchScores.getBirthdayScore(craig, cluster), 90)
})

test("getBirthdayScore is 80 if only year matches", t => {
  t.plan(1)

  const cluster = {
    clusterId: "all_21st",
    createdAt: Date.now(),
    users: [{ birthday: "05/01/1978" }]
  }

  t.equal(MatchScores.getBirthdayScore(craig, cluster), 80)
})

test("getBirthdayScore is 50 if cluster is 5 years younger", t => {
  t.plan(1)

  const cluster = {
    clusterId: "all_21st",
    createdAt: Date.now(),
    users: [{ birthday: "11/01/1983" }]
  }

  t.equal(MatchScores.getBirthdayScore(craig, cluster), 40)
})
