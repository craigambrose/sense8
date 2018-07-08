const test = require("tape")

const craig = {
  userId: "craig"
}

test("getBirthdayScore is 100 if all birthdays match", t => {
  t.plan(1)

  t.equal(getBirthdatScore(user, cluster), 100)
})
