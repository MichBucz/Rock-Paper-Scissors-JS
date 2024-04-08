let choices = ["rock", "paper", "scissors"];

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
    } else if (
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      console.log("You Loose");
    }
  }

  console.log(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
}

for (let i = 0; i <= 5; i++) {
  playGame();
}
