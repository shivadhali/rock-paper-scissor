let humanScore = 0;
let computerScore = 0;
let Draw = 0;

function getComputerChoice() {
  let a = Math.floor(Math.random() * 3);

  switch (a) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissor";
      break;
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Choose Rock, Paper or Scissor");
  return humanChoice;
}

function playGame() {
  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      Draw++;
      alert(
        `Its a Draw. Computer Score: ${computerScore}, Human Score: ${humanScore}, Draw: ${Draw}`
      );
    } else if (
      (humanChoice == "Rock" && computerScore == "Paper") ||
      (humanChoice == "Paper" && computerChoice == "Scissor") ||
      (humanChoice == "Scissor" && computerChoice == "Rock")
    ) {
      computerScore++;
      alert(
        `Computer Wins. Computer Score: ${computerScore}, Human Score: ${humanScore}, Draw: ${Draw}`
      );
    } else {
      humanScore++;
      alert(
        `Human Wins. Computer Score: ${computerScore}, Human Score: ${humanScore}, Draw: ${Draw}`
      );
    }
  }

  for (i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  }
  console.log("Human Score: " + humanScore);
  console.log("Computer Score: " + computerScore);
  console.log("Draw: " + Draw);

  if (humanScore == computerScore) {
    console.log("Its a Draw");
  } else if (humanScore > computerScore) {
    console.log("Human Wins");
  } else {
    console.log("Computer Wins");
  }
}

playGame();
