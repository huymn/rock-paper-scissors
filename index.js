let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  }

  return "scissors";
}

function getHumanChoice() {
  return prompt("rock, paper, or scissors?").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    humanScore++;
  } else if (
    (computerChoice === "rock" && humanChoice === "scissors") ||
    (computerChoice === "scissors" && humanChoice === "paper") ||
    (computerChoice === "paper" && humanChoice === "rock")
  ) {
    computerScore++;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore > computerScore) {
    return `You win the game beating the computer ${humanScore} to ${computerScore}!`;
  } else if (humanScore < computerScore) {
    return `You lost! The computer beat you with the score of ${computerScore} to ${humanScore}`;
  }

  return `You both tied at ${humanScore}-${computerScore}.`;
}

console.log(playGame());
