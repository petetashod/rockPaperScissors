

rockPaperOrScissors = ["rock", "paper", "scissors"];

let userScore = 0;
let computerScore = 0;
let choice = document.getElementsByClassName("selector");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");



    let computerChoice = Math.floor(Math.random() * rockPaperOrScissors.length);
    let computerPicks = rockPaperOrScissors[computerChoice]
    
    


gamePlay = (userChoice) => {
    
  if (userChoice == computerPicks) {
    document.getElementById(
      "winner"
    ).innerHTML = `The user chose ${userChoice} and so did the computer `;
  }
  if (userChoice == "rock" && computerPicks == "scissors") {
    document.getElementById(
      "winner"
    ).innerHTML = `The user chose ${userChoice} and the computer chose scissors `;
  }

  if (userChoice == "paper" && computerPicks == "rock") {
    document.getElementById(
      "winner"
    ).innerHTML = `The user chose ${userChoice} and the computer chose rock `;
  }

  if (userChoice == "scissors" && computerPicks == "paper") {
    document.getElementById(
      "winner"
    ).innerHTML = `The user chose ${userChoice} and the computer chose paper`;
  }
  
};

 scoreKeeper = (userChoice) => {
  if (
    (computerPicks == "rock" && userChoice == "scissors") ||
    (computerPicks == "paper" && userChoice == "rock") ||
    (computerPicks == "scissors" && userChoice == "paper")
  ) {
    computerScore++;
    document.getElementById(
      "score"
    ).innerHTML = `computer score is ${computerScore} points`;
  }

  if (computerPicks == userChoice) {
    document.getElementById("score").innerHTML = `it was a tie `;
  } else {
    userScore++;
    document.getElementById(
      "score"
    ).innerHTML = `The user score is ${userScore} point(s)`;
  }

};

computerSelection = (userChoice) => {
  if (computerPicks == "rock" && userChoice == "scissors") {
    document.getElementById(
      "score"
    ).innerHTML = `computer chose rock and the user chose ${userChoice}`;
  }
  if (computerPicks == "paper" && userChoice == "rock") {
    document.getElementById(
      "score"
    ).innerHTML = ` computer chose paper and the user chose ${userChoice} `;
  }
  if (computerPicks == "scissors" && userChoice == "paper") {
    document.getElementById(
      "score"
    ).innerHTML = ` computer chose scissors and the user chose ${userChoice} `;
  }

};

for (let x of choice) {
  x.addEventListener("click", function (e) {
    gamePlay(e.target.id);
    computerSelection(e.target.id);
    scoreKeeper(e.target.id);
  });
}
