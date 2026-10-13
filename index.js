function getComputerChoice() {
  let choice = 3 * Math.random();
  if (choice < 1) {
    return "rock";
  } else if (choice < 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Make a choice: Rock - Paper - Scissors");
  return choice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function showScores() {
      console.log(
        "Your score: " +
          humanScore +
          "\n" +
          "Computer's score: " +
          computerScore,
      );
    }

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        computerChoice = computerChoice.toLowerCase();
        if (humanChoice === "rock") {
            if (computerChoice === "rock") {
            console.log("Draw! Rock meets rock.");
            return "draw";
            } else if (computerChoice === "paper") {
            computerScore++;
            console.log("You lose! Paper beats rock.");
            return "lose";
            } else {
            // computerChoice === "scissors"
            humanScore++;
            console.log("You win! Rock beats scissors.");
            return "win";
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
            humanScore++;
            console.log("You win! Paper beats rock.");
            return "win";
            } else if (computerChoice === "paper") {
            console.log("Draw! Paper meets paper.");
            return "draw";
            } else {
            // computerChoice === "scissors"
            computerScore++;
            console.log("You lose! Scissors beats paper.");
            return "lose";
            }
        } else if (humanChoice === "scissors"){
            if (computerChoice === "rock") {
            computerScore++;
            console.log("You lost! Rock beats paper.");
            return "lost";
            } else if (computerChoice === "paper") {
            humanScore++;
            console.log("You win! Scissors beats paper.");
            return "win";
            } else {
            // computerChoice === "scissors"
            console.log("Draw! Scissors meets Scissors.");
            return "draw";
            }
        } else {
          alert("You did not give correct input! Try again.");
        }
    }
}