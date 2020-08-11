const displayArea = document.getElementById("calcDisplay");

let displayCleared = false;
let currentNumber = 0;
let userNumbers = []. chosenOps = [];

const dbzComment = "hahaha XD";

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  if (operator == "add") {
    return add(a, b);
  } else if (operator == "subtract") {
    return subtract(a, b);
  } else if (operator == "multiply") {
    return multiply(a, b);
  } else if (operator == "divide") {
    return divide(a, b);
  } else {
    console.log("Operator error");
    return;
  }
}

function clearDisplay(clearAll) {
  displayArea.textContent = "0";
  displayCleared = true;
  currentNumber = 0;

  if (clearAll) {
    userNumbers = [];
    chosenOps = [];
    goodToClearAll = false;
  }
}

function populateDisplay() {
  if (displayCleared) {
    displayArea.textContent = this.id;
  } else {
    displayArea.textContent = displayArea.textContent + this.id;
  }

  currentNumber = Number(displayArea.textContent);
  displayCleared = false;
}

function roundResult(x) {
  /***
   * Round the result for final display
   *
   * To fix: Keep from rounding to two decimal places if the result only has
   * one decimal unit.
   ***/
  let xInt = Math.round(x);
  if (x % xInt != 0) {
   return x.toFixed(2);
  } else {
    return x;
  }
}

function saveOperation() {
  // Check if division by zero is being triggered
  // Nuke if confirmed
  if (currentNumber == 0 && currentOp == "divide") {
    goodToClearAll = true;
    clearDisplay(true);
    displayArea.textContent = dbzComment;
    return;
  }

  currentOp = this.id;

  if (currentOp == "bksp") {
    let currentNumStr = currentNumber.toString();
    let newNum = 0;

    if (currentNumStr.length > 1) {
      newNum = currentNumStr.slice(0, currentNumStr.length - 1);
    } else {
      displayCleared = true;
    }

    currentNumber = Number(newNum);
    displayArea.textContent = newNum;
    return;
  }

  userNumbers.push(currentNumber);

  // Calculate
  if (currentOp != "equals") {
    chosenOps.push(currentOp);
    clearDisplay(false);
  } else {
    // Will result in wrong calculation because of 0 start
    // Not good for multiplication
    let result = userNumbers.shift();
    while (chosenOps.length > 0) {
      let num = userNumbers.shift();
      let opNow = chosenOps.shift();
      result = operate(opNow, result, num);
    }

    let finalResult = roundResult(result);

    clearDisplay(true);
    displayArea.textContent = finalResult;
  }
} // End function saveOperation()

function runCalculator() {
  const numbers = document.querySelectorAll(".numButton");
  numbers.forEach(number => number.addEventListener("click", populateDisplay));

  const basicOps = document.querySelectorAll(".basicOpButton");
  basicOps.forEach(op => op.addEventListener("click", saveOperation));

  const clearButton = document.getElementById("clearButton");
  clearButton.addEventListener("click", clearDisplay);
}

window.addEventListener("load", runCalculator);
window.addEventListener("keydown", runCalculator);
