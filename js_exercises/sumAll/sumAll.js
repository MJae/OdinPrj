const sumAll = function(num0, num1) {
  let sumStart = 0;
  let sumEnd = 0;
  let finalSum = 0;

  // Spec requires to output with an ERROR if one of the numbers is negative
  if (num0 < 0 || num1 < 0) {
    return "ERROR";
  }

  // Confirm that both inputs are numbers
  if (typeof num0 != "number" || typeof num1 != "number") {
    return "ERROR";
  }

  // Identify which number is greater and assign accordingly
  if (num1 > num0) {
    sumStart = num0;
    sumEnd = num1;
  } else {
    sumStart = num1;
    sumEnd = num0;
  }

  // Add them all
  for (let i = sumStart; i <= sumEnd; i++) {
    finalSum += i;
  }

  return finalSum;
}

module.exports = sumAll
