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

  function logScores() {
    console.log(
      "Your score: " + humanScore + "\n" + "Computer's score: " + computerScore,
    );
  }

  function displayScores() {
    const humanPlayerCount = document.querySelector(".your-score-counter");
    const computerPlayerCount = document.querySelector(".computer-score-counter");
    humanPlayerCount.textContent = humanScore;
    computerPlayerCount.textContent = computerScore;
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
    } else if (humanChoice === "scissors") {
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

function setHumanChoiceImg(humanChoice) {
  const img = document.querySelector(".player-you-img");
  humanChoice = humanChoice.toLowerCase();
  if (humanChoice === "rock") {
    img.src = "images/rock.png";
    img.alt = "Picture of a rock";
  } else if (humanChoice === "paper") {
    img.src = "images/paper.jpg";
    img.alt = "Picture of a sheet of paper";
  } else {
    // humanChoice === "scissors"
    img.src = "images/scissors.jpg";
    img.alt = "Picture of a pair of scissors";
  }
}

function setComputerChoiceImg(computerChoice) {
  const img = document.querySelector(".player-computer-img");
  if (computerChoice === "rock") {
    img.src = "images/rock.png";
    img.alt = "Picture of a rock";
  } else if (computerChoice === "paper") {
    img.src = "images/paper.jpg";
    img.alt = "Picture of a sheet of paper";
  } else {
    // computerChoice === "scissors"
    img.src = "images/scissors.jpg";
    img.alt = "Picture of a pair of scissors";
  }
}

function resetHumanChoiceImg() {
  const img = document.querySelector(".player-you-img");
  img.src = "";
  img.alt = "";
}

function resetComputerChoiceImg() {
  const img = document.querySelector(".player-computer-img");
  img.src = "";
  img.alt = "";
}

const rock_button = document.querySelector(".rock-button");
rock_button.addEventListener("click", () => setHumanChoiceImg("rock"));

const paper_button = document.querySelector(".paper-button");
paper_button.addEventListener("click", () => setHumanChoiceImg("paper"));

const scissors_button = document.querySelector(".scissors-button");
scissors_button.addEventListener("click", () => setHumanChoiceImg("scissors"));

const restart_img = document.querySelector(".restart-img");
restart_img.addEventListener("click", () => {
  resetHumanChoiceImg();
  resetComputerChoiceImg();
})