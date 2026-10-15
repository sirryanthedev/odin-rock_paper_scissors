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
rock_button.addEventListener("click", () => {
  setHumanChoiceImg("rock");
  computerChoice = getComputerChoice();
  playRound("rock", computerChoice);
  setComputerChoiceImg(computerChoice);
  displayScores();
});

const paper_button = document.querySelector(".paper-button");
paper_button.addEventListener("click", () => {
  setHumanChoiceImg("paper");
  computerChoice = getComputerChoice();
  playRound("paper", computerChoice);
  setComputerChoiceImg(computerChoice);
  displayScores();
});

const scissors_button = document.querySelector(".scissors-button");
scissors_button.addEventListener("click", () => {
  setHumanChoiceImg("scissors");
  computerChoice = getComputerChoice();
  playRound("scissors", computerChoice);
  setComputerChoiceImg(computerChoice);
  displayScores();
});

const restart_img = document.querySelector(".restart-img");
restart_img.addEventListener("click", () => {
  resetHumanChoiceImg();
  resetComputerChoiceImg();
  resetScores();
  const gameText = document.querySelector(".game-text");
  gameText.textContent = "Press a button to play";
  changeTextColor("black");
});

// ---

let humanScore = 0;
let computerScore = 0;

const gameText = document.querySelector(".game-text");

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
      gameText.textContent = "Draw! Rock meets rock.";
      changeTextColor("white");
      return "draw";
    } else if (computerChoice === "paper") {
      computerScore++;
      gameText.textContent = "You lose! Paper beats rock.";
      changeTextColor("red");
      return "lose";
    } else {
      // computerChoice === "scissors"
      humanScore++;
      gameText.textContent = "You win! Rock beats scissors.";
      changeTextColor("green");
      return "win";
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      humanScore++;
      gameText.textContent = "You win! Paper beats rock.";
      changeTextColor("green");
      return "win";
    } else if (computerChoice === "paper") {
      gameText.textContent = "Draw! Paper meets paper.";
      changeTextColor("white");
      return "draw";
    } else {
      // computerChoice === "scissors"
      computerScore++;
      gameText.textContent = "You lose! Scissors beats paper.";
      changeTextColor("red");
      return "lose";
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "rock") {
      computerScore++;
      gameText.textContent = "You lost! Rock beats paper.";
      changeTextColor("red");
      return "lost";
    } else if (computerChoice === "paper") {
      humanScore++;
      gameText.textContent = "You win! Scissors beats paper.";
      changeTextColor("green");
      return "win";
    } else {
      // computerChoice === "scissors"
      gameText.textContent = "Draw! Scissors meets Scissors.";
      changeTextColor("white");
      return "draw";
    }
  } else {
    alert("You did not give correct input! Try again.");
  }
}

function resetScores() {
  humanScore = 0;
  computerScore = 0;
  const humanPlayerCount = document.querySelector(".your-score-counter");
  const computerPlayerCount = document.querySelector(".computer-score-counter");
  humanPlayerCount.textContent = "0";
  computerPlayerCount.textContent = "0";
}

function changeTextColor(color) {
  const gameText = document.querySelector(".game-text");
  gameText.style.color = color;
}