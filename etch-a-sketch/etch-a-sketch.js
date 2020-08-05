// Find containers
const container = document.querySelector(".container");
const sketchpad = document.querySelector(".sketchpad");

function createSketchPad(numGridSquares) {
  // Max size of sketchpad, initial is based on values in CSS
  let maxPixels = 16 * 48;
  let squareSize = maxPixels / numGridSquares;

  let gridTemplateValue = "repeat(" + numGridSquares + ", " + squareSize + "px)";
  sketchpad.style.gridTemplateColumns = gridTemplateValue;
  sketchpad.style.gridTemplateRows = gridTemplateValue;

  for (let i = 0; i < numGridSquares; i++) {
    for (let j = 0; j < numGridSquares; j++) {
      const etchDiv = document.createElement("div");
      etchDiv.className = "etchDot";
      etchDiv.style.backgroundColor = "hsl(0, 100%, 100%)";
      etchDiv.style.borderStyle = "solid";

      // Borders need to be fixed up because the inner lines are doubled
      etchDiv.style.borderWidth = "1px";

      etchDiv.style.borderColor = "black";
      etchDiv.textContent = "";
      sketchpad.appendChild(etchDiv);
    }
  }
} // End function createSketchPad()

function clearSketch() {
  while (sketchpad.hasChildNodes()) {
    sketchpad.removeChild(sketchpad.firstChild);
  }

  userNumGridSquares = prompt("Please enter a new grid size.");
  runEtch()
} // End function clearSketch()

function getRandomColorHue() {
  return Math.floor(Math.random() * 360);
}

// Add 10% black to current color
function addTenBlack(colorToChange) {
  // RegExp /[\d]/: used to find a non-digit character
  let indexFirstInt = colorToChange.search(/[\d]/);
  let indexLastInt = colorToChange.length - 1;
  let bgColorValues = colorToChange.substring(indexFirstInt, indexLastInt);
  let colorRGB = bgColorValues.split(',');
  let r = colorRGB[0];
  let g = colorRGB[1];
  let b = colorRGB[2];

  /*
  * Convert to HSL
  * Original code by mrjackson
  * color-conversion-algorithms.js
  * https://gist.github.com/mjackson/5311256
  */
  r /= 255;
  g /= 255;
  b /= 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);

  let h = (max + min) / 2;
  let s = (max + min) / 2;
  let l = (max + min) / 2;

  if (max == min) {
    h = s = 0;
  } else {
    let d = (max - min);
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  // Convert to the needed values
  h = h * 360;
  s = s * 100;
  l = (l - 0.1) * 100;

  let resultColor = "hsl(" + h + ", " + s + "%, " + l + "%)";
  return resultColor;
} // End function addTenBlack()

function addDot() {
  // Needs to test against RGB because it always becomes RGB regardless of
  // initial coloring set.
  let currentBGColor = this.style.backgroundColor;
  if (currentBGColor == "rgb(255, 255, 255)") {
    let h = getRandomColorHue();
    let dotBGColor = "hsl(" + h + ", 100%, 50%)";
    this.style.backgroundColor = dotBGColor;
  } else if (currentBGColor == "rgb(0, 0, 0)") {
    // Already black, do nothing
    console.log("already black");
  } else {
    // This will max to black after five passes, instead of 10 as in the
    // instructions because the initial value of lightness is set to 50%;
    let newBGColor = addTenBlack(currentBGColor);
    this.style.backgroundColor = newBGColor;
  }
} // End function addDot()

function runEtch() {
  createSketchPad(userNumGridSquares);

  const etchDots = document.querySelectorAll(".etchDot");
  etchDots.forEach(dot => dot.addEventListener("mouseover", addDot));

  const clearButton = document.getElementById("clearButton");
  clearButton.addEventListener("click", clearSketch);
} // End function runEtch()

let userNumGridSquares = 16;
window.addEventListener("load", runEtch);
