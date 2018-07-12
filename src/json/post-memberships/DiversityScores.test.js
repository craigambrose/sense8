const getDiversityScore = require("./DiversityScores")
const test = require("tape")

const motueka = { id: "107788005913822", name: "Port Motueka, New Zealand" }
const melbourne = { id: "melb", name: "Melbourne, Australia" }

const craig = {
  userId: "craig",
  hometown: motueka
}

test("getDiversityScore is 0 if hometowns are the same country", t => {
  t.plan(1)
  const cluster = { users: [{ hometown: motueka }] }

  t.equal(getDiversityScore(craig, cluster), 0)
})

test("getDiversityScore is 100 if hometowns are different countries", t => {
  t.plan(1)
  const cluster = { users: [{ hometown: melbourne }] }

  t.equal(getDiversityScore(craig, cluster), 100)
})
