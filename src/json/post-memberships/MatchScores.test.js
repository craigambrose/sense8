const {
  getMatchScore,
  getMatchScores,
  bestMatchScore
} = require("./MatchScores")
const test = require("tape")

const motueka = { id: "107788005913822", name: "Port Motueka, New Zealand" }
const melbourne = { id: "melb", name: "Melbourne, Australia" }

const craig = {
  userId: "craig",
  hometown: motueka,
  birthday: "11/21/1978"
}

test("getMatchScore is 0 if a terrible fit", t => {
  t.plan(1)
  const cluster = { users: [{ hometown: motueka, birthday: "10/01/1990" }] }

  t.equal(getMatchScore(craig, cluster), 0)
})

test("getMatchScores maps an array of match scores", t => {
  t.plan(1)
  const cluster = { users: [{ hometown: motueka, birthday: "10/01/1990" }] }

  t.deepEqual(getMatchScores(craig, [cluster]), [
    { score: 0, cluster: cluster }
  ])
})

test("bestMatchScore returns null if there are no clusters", t => {
  t.plan(1)
  t.equal(bestMatchScore([]), null)
})

test("bestMatchScore returns the highest scoring result", t => {
  t.plan(1)

  score20 = { score: 20, cluster: "foo" }
  score50 = { score: 50, cluster: "foo" }
  scores = [score20, score50]

  t.equal(bestMatchScore(scores), score50)
})
