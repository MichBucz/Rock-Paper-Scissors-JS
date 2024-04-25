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
      return "win";
    } else if (
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      console.log("You Lose");
      return "lose";
    }
  }

  console.log(playerSelection, computerSelection);
  playRound(playerSelection, computerSelection);
}

for (let i = 0; i <= 5; i++) {
  playGame();
}

function showPlayerScore() {
 result = playGame
  if (result === "win") {
    playerScore++;
  } else if (result === "lose") {
    computerScore++;
  }

  if (playerScore > computerScore) {
    console.log("YOU WON!!!");
    console.log("Your Points: ", playerScore);
    console.log("Computer's points: ", computerScore);
  } else if (playerScore < computerScore) {
    console.log("YOU LOST :C");
    console.log("Your Points: ", playerScore);
    console.log("Computer's points: ", computerScore);
  }
}

console.log(showPlayerScore());
