let choices = ["rock", "paper", "scissors"];

const playerSelectionDisplay = document.querySelector(".playerSelection");
const computerSelectDisplay = document.querySelector(".computerSelection");
const resultDisplay = document.querySelector(".result");
const playerScoreDisplay = document.querySelector(".playerScore");
const computerScoreDisplay = document.querySelector(".computerScore");
const allChoices = document.querySelector(".choices");
const rockButton = document.querySelector(".rock");

function getPlayerChoice(choice) {
  console.log(choice);
}

let playerScore = 0;
let computerScore = 0;

function playGame() {
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
  }
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      console.log("It's a draw");
    } else if (
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "rock" && computerSelection === "scissors")
    ) {
      console.log("You Win");
      playerScore++;
    } else if (
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      console.log("You Lose");
      computerScore++;
    }
  }

  console.log(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
  console.log(
    `Player score : ${playerScore}`,
    `Compuer score : ${computerScore}`
  );
}

for (let i = 0; i < 5; i++) {
  playGame();
}

if (playerScore > computerScore) {
  console.log("YOU WON!!!");
} else if (playerScore < computerScore) {
  console.log("YOU LOST :C");
} else {
  console.log("IT'S A DRAW");
}
