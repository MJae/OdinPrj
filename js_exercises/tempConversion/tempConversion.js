// Helper function to round results to one decimal place
const roundToOne = function(result) {
  return Math.round(result * 10) / 10;
}

const ftoc = function(temp) {
  let cTemp = (temp - 32) * (5 / 9);
  return roundToOne(cTemp);
}

const ctof = function(temp) {
  let fTemp = temp * (9 / 5) + 32;
  return roundToOne(fTemp);
}

module.exports = {
  ftoc,
  ctof
}
