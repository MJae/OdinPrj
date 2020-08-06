const caesar = function(plaintext, shift) {
  /**
  * Reference
  * uppercase alphabet: 65 to 90
  * lowercase alphabet: 97 to 122
  */

  // Transform the entire text into an array of unicodes
  let plaintextLen = plaintext.length;
  let charCodeList = [];
  for (let i = 0; i < plaintextLen; i++) {
    charCodeList.push(plaintext.charCodeAt(i));
  } 

  // Normalize the shift
  let xShift = shift % 26;

  // Shift each character in the string, except the special ones
  let shiftedCharList = [];
  for (let j = 0; j < plaintextLen; j++) {
    let resultCode = charCodeList[j];
    if (charCodeList[j] >= 65 && charCodeList[j] <= 90) {
      // Character is confirmed as an uppercase letter
      resultCode = charCodeList[j] + xShift;
      if (resultCode < 65) {
        let wrapNum = 65 - resultCode;
        resultCode = 90 - wrapNum + 1;
      } else if (resultCode > 90) {
        let wrapNum = resultCode - 90;
        resultCode = 65 + wrapNum - 1;
      }
    } else if (charCodeList[j] >= 97 && charCodeList[j] <= 122) {
      // Character is confirmed as a lowercase letter
      resultCode = charCodeList[j] + xShift;
      if (resultCode < 97) {
        let wrapNum = 97 - resultCode;
        resultCode = 122 - wrapNum - 1;
      } else if (resultCode > 122) {
        let wrapNum = resultCode - 122;
        resultCode = 97 + wrapNum - 1;
      }
    }
    shiftedCharList.push(resultCode);
  }

  // Transform the codes back into characters
  let transformedChars = [];
  for (let k = 0; k < plaintextLen; k++) {
    let resultChar = String.fromCharCode(shiftedCharList[k]);
    transformedChars.push(resultChar);
  }

  // Transform the array into a string
  let resultStr = transformedChars.join('');

  return resultStr;
}

module.exports = caesar
