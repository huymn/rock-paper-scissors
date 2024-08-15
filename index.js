let playerScore = 0;
let computerScore = 0;

const btnsContainer = document.querySelector(".btns-container");
const roundResultDiv = document.querySelector(".result");
const scoreDiv = document.querySelector(".score");
const playerScoreSpan = document.querySelector(".player-score-span");
const computerScoreSpan = document.querySelector(".computer-score-span");
const endGameText = document.querySelector(".end-game-text");
const selectionButtons = document.querySelectorAll(".btns-container button");
const restartButton = document.querySelector(".restart-btn");

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  }

  return "scissors";
}

function playRound(playerChoice, computerChoice) {
  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    playerScore++;
    return "You win!";
  } else if (
    (computerChoice === "rock" && playerChoice === "scissors") ||
    (computerChoice === "scissors" && playerChoice === "paper") ||
    (computerChoice === "paper" && playerChoice === "rock")
  ) {
    computerScore++;
    return "You lose!";
  }

  return "Tied!";
}

function restartGame() {
  playerScore = 0;
  computerScore = 0;

  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;

  endGameText.textContent = "";
  roundResultDiv.textContent = "";

  restartButton.classList.toggle("hide");

  disableButtons(selectionButtons, false);
}

function disableButtons(buttons, disabled) {
  buttons.forEach((button) => {
    button.disabled = disabled;
  });
}

btnsContainer.addEventListener("click", (e) => {
  let target = e.target;

  let roundResult = playRound(target.id, getComputerChoice());

  roundResultDiv.textContent = roundResult;
  playerScoreSpan.textContent = playerScore;
  computerScoreSpan.textContent = computerScore;

  if (playerScore === 5) {
    endGameText.textContent = "You win! Click restart to play again";
    disableButtons(selectionButtons, true);
    restartButton.classList.toggle("hide");
  } else if (computerScore === 5) {
    endGameText.textContent = "You lost! Click restart to play again";
    disableButtons(selectionButtons, true);
    restartButton.classList.toggle("hide");
  }
});

restartButton.addEventListener("click", restartGame);
