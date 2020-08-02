const reverseString = function(userStr) {
  let userStrLen = userStr.length;
  let resultStr = "";

  for (let i = userStrLen - 1; i >= 0; i--) {
    resultStr += userStr.charAt(i);
  }

  return resultStr;
}

module.exports = reverseString
