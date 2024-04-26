let choices = ["rock", "paper", "scissors"];

let playerScore = 0;
let computerScore = 0;

function playGame() {
  function getPlayerChoice() {
    let playerChoice = prompt("rock, paper or scissors?").toLowerCase();
    if (
      playerChoice === "rock" ||
      playerChoice === "paper" ||
      playerChoice === "scissors"
    ) {
      return playerChoice;
    } else {
      prompt("Please type rock, paper or scissors");
    }
  }

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
