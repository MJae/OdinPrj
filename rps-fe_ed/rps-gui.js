/**
  TODO
    * Images for winner box
    * Reset winner box
    * Implement keyboard shortcuts
**/

const sword = "sword";
const lance = "lance";
const axe = "axe";

// Score to get to win
const winnerScore = 5;

function enemyPlay() {
  // Return a random integer between 1 and 3
  let enemyChoice = Math.random() * 3;
  if (enemyChoice >= 2) {
    return sword;
  } else if (enemyChoice >= 1) {
    return lance;
  } else {
    return axe;
  }
} // End function enemyPlay()

function playRound() {
  const enemyWeapon = enemyPlay();
  const playerWeapon = this.id;

  const eScore = document.getElementById("enemyScore");
  const pScore = document.getElementById("tacticianScore");

  // Display enemy weapon
  const eWeapon = document.getElementById("enemyWeapon");
  const eWeaponFile = "images/" + enemyWeapon + ".png";
  eWeapon.src = eWeaponFile;

  if (playerWeapon == enemyWeapon) {
    tacticianScore++;
    enemyScore++;

    eScore.textContent = enemyScore;
    pScore.textContent = tacticianScore;
  }

  if (playerWeapon == sword && enemyWeapon == lance ||
      playerWeapon == lance && enemyWeapon == axe ||
      playerWeapon == axe && enemyWeapon == sword) {
    // Enemy wins
    enemyScore++;
    eScore.textContent = enemyScore;
  } else {
    // Player wins
    tacticianScore++;
    pScore.textContent = tacticianScore;
  }

  // Declare winner if either player has already reached winnerScore
  let gameWinner = "none";
  if (tacticianScore >= winnerScore) {
    if (enemyScore < 5) {
      gameWinner = "Tactician";
    } else if (enemyScore >= winnerScore) {
      gameWinner = "Tie";
    }
  } else if (enemyScore >= 5) {
    gameWinner = "Enemy";
  }

  if (gameWinner != "none") {
    const winnerDisplay = document.getElementById("winnerName");
    winnerDisplay.textContent = gameWinner;

    // Reset scores if someone has already won
    tacticianScore = 0;
    enemyScore = 0;
    eScore.textContent = enemyScore;
    pScore.textContent = tacticianScore;
  }

  return;
} // End function playRound()

function playGame() {
  const buttonSword = document.getElementById(sword);
  const buttonLance = document.getElementById(lance);
  const buttonAxe = document.getElementById(axe);

  buttonSword.addEventListener("click", playRound);
  buttonLance.addEventListener("click", playRound);
  buttonAxe.addEventListener("click", playRound);
} // End function playGame()

let tacticianScore = 0;
let enemyScore = 0;

window.addEventListener("load", playGame);
