const { getMatchScore } = require("./MatchScores")
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

// test("getMatchScores maps an array of match scores", t => {
//   t.plan(1)
//   const cluster = { users: [{ hometown: motueka, birthday: "10/01/1990" }] }

//   t.equal(getMatchScores(craig, [cluster]), 0)
// })
