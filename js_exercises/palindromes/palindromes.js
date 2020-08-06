const palindromes = function(usrStr) {
  // Remove special characters
  let letterStr = usrStr.replace(/[^A-Za-z]+/g, '');

  // Transform all characters to lowercase
  let cleanStr = letterStr.toLowerCase();

  // Reverse the characters in the cleaned-up string
  // Code originally from revereString.js in the reverseString exercise
  let strLen = cleanStr.length;
  let resultStr = "";

  for (let i = strLen - 1; i >= 0; i--) {
    resultStr += cleanStr.charAt(i);
  }

  // Check whether the string is the same forwards and backwards
  if (cleanStr == resultStr) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindromes
