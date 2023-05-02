

rockPaperOrScissors = ["rock", "paper", "scissors"];

let userScore = 0;
let computerScore = 0;
let choice = document.getElementsByClassName("selector");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");


let computerChoice;
let computerPicks;
let userChoice;

function randomizeComputerChoice(){
    computerChoice = Math.floor(Math.random() * rockPaperOrScissors.length);
    computerPicks = rockPaperOrScissors[computerChoice];
}



gamePlay = () => {

  if (userChoice === computerPicks) {
    document.getElementById(
      "winner"
    ).textContent = `The user chose ${userChoice} and so did the computer `;
  }
  if (userChoice == "rock" && computerPicks == "scissors") {
    document.getElementById(
      "winner"
    ).textContent = `The user chose ${userChoice} and the computer chose scissors `;
  }

  if (userChoice == "paper" && computerPicks == "rock") {
    document.getElementById(
      "winner"
    ).textContent = `The user chose ${userChoice} and the computer chose rock `;
  }

  if (userChoice == "scissors" && computerPicks == "paper") {
    document.getElementById(
      "winner"
    ).textContent = `The user chose ${userChoice} and the computer chose paper`;
  }
};

scoreKeeper = () => {
  if (
    (computerPicks == "rock" && userChoice == "scissors") ||
    (computerPicks == "paper" && userChoice == "rock") ||
    (computerPicks == "scissors" && userChoice == "paper")
  ) {
    computerScore++;
    document.getElementById(
      "score"
    ).textContent = `computer score is ${computerScore} points`;
  }

  if (computerPicks === userChoice || userChoice === computerPicks) {
    document.getElementById("score").textContent = `it was a tie `;
  }
 if ((userChoice == "rock" && computerPicks == "scissors")|| 
            (userChoice == "paper" && computerPicks == "rock") ||
            (userChoice == "scissors" && computerPicks == "paper")){
    userScore++;
    document.getElementById(
      "score"
    ).textContent = `The user score is ${userScore} point(s)`;
  }
};

computerSelection = () => {
  if (computerPicks == "rock" && userChoice == "scissors") {
    document.getElementById(
      "winner"
    ).textContent = `computer chose rock and the user chose ${userChoice}`;
  }
  if (computerPicks == "paper" && userChoice == "rock") {
    document.getElementById(
      "winner"
    ).textContent = ` computer chose paper and the user chose ${userChoice} `;
  }
  if (computerPicks == "scissors" && userChoice == "paper") {
    document.getElementById(
      "winner"
    ).textContent = ` computer chose scissors and the user chose ${userChoice} `;
  }
};


  rock.addEventListener("click", function (e) {
    userChoice = 'rock';
    randomizeComputerChoice();
    gamePlay(e.target.id);
    computerSelection(e.target.id);
    scoreKeeper(e.target.id);

   });

  paper.addEventListener("click", function(e){
    userChoice ='paper'
    randomizeComputerChoice();
    gamePlay(e.target.id)
    computerSelection(e.target.id)
    scoreKeeper(e.target.id)
  });


scissors.addEventListener("click", function (e) {
    userChoice ='scissors'
    randomizeComputerChoice();
    gamePlay(e.target.id)
    computerSelection(e.target.id)
    scoreKeeper(e.target.id)

});