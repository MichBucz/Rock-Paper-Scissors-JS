let choices = ["rock", "paper", "scissors"];

const playerSelectDisplay = document.querySelector(".playerSelection");
const computerSelectDisplay = document.querySelector(".computerSelection");
const resultDisplay = document.querySelector(".result");
const playerScoreDisplay = document.querySelector(".playerScore");
const computerScoreDisplay = document.querySelector(".computerScore");

let weapons = document.querySelector(".weapons");

weapons.addEventListener("click", (event) => {
  let target = event.target;

  switch (target.id) {
    case "rock":
      playerSelectDisplay.textContent = `Player: ${target.id}`;
      return playGame("rock");
      break;
    case "paper":
      playerSelectDisplay.textContent = `Player: ${target.id}`;
      return playGame("paper");
      break;
    case "scissors":
      playerSelectDisplay.textContent = `Player: ${target.id}`;
      return playGame("scissors");
      break;
  }
});

let playerScore = 0;
let computerScore = 0;

function playGame(playerSelection) {
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
  }
  const computerSelection = getComputerChoice();

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      resultDisplay.textContent = "It's a draw";
      console.log("It's a draw");
    } else if (
      (playerSelection === "scissors" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "rock" && computerSelection === "scissors")
    ) {
      resultDisplay.textContent = "You Win";
      console.log("You Win");
      playerScore++;
    } else if (
      (playerSelection === "paper" && computerSelection === "scissors") ||
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "scissors" && computerSelection === "rock")
    ) {
      resultDisplay.textContent = "You Lose";
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
  computerSelectDisplay.textContent = `computer: ${computerSelection}`;

  playerScoreDisplay.textContent = `Player score : ${playerScore}`;
  computerScoreDisplay.textContent = `Compuer score : ${computerScore}`;

  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      resultDisplay.textContent = "YOU WON!!!";
    } else if (playerScore < computerScore) {
      resultDisplay.textContent = "YOU LOST :C";
    } else {
      resultDisplay.textContent = "IT'S A DRAW";
    }
  }
  if (playerScore >= 5 || computerScore >= 5) {
    weapons.removeEventListener("click", (event) => {
      let target = event.target;

      switch (target.id) {
        case "rock":
          return playGame("rock");
          break;
        case "paper":
          return playGame("paper");
          break;
        case "scissors":
          return playGame("scissors");
          break;
      }
    });

    const reset = document.createElement("div");
    reset.innerHTML = "<button onclick='location.reload()'>RESTART</button>";
    resultDisplay.appendChild(reset);

    playerScoreDisplay.textContent = "";
    computerScoreDisplay.textContent = "";
    playerSelectDisplay.textContent = "";
    computerSelectDisplay.textContent = "";
    weapons.style.visibility = "hidden";

    console.log("ENDGAME");
  }
}
