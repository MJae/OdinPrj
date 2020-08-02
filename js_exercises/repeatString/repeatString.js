const repeatString = function(userStr, numRepeats) {
  let resultStr = "";

  if (numRepeats < 0) {
    return "ERROR";
  }

  while (numRepeats > 0) {
    resultStr += userStr;
    numRepeats--;
  }

  return resultStr;
}

module.exports = repeatString
