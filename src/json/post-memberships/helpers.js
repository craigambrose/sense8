function sum(values) {
  return values.reduce((a, b) => a + b)
}

function mean(values) {
  if (values.length > 1) {
    return sum(values) / values.length
  }
  return values[0]
}

module.exports = { sum, mean }
