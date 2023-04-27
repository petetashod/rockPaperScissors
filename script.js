
rockPaperOrScissors = [ "rock", "paper", "scissors"]

let userScore = 0;
let computerScore =0;
let choice = document.getElementsByClassName("selector")
let rock = document.getElementById("rock")
let paper = document.getElementById("paper")
let scissors = document.getElementById("scissors")

let computerChoice = Math.floor(Math.random() * rockPaperOrScissors.length)

let computerPicks = computerChoice
    // for ( let x of choice) {
    //     x.addEventListener("click",function(){ 
    //         gamePlay();
    //         scoreKeeper();
            
    //     })
    // }

gamePlay = ()=>{

    if (choice === computerPicks) {
        document.getElementById("winner").innerHTML = `The user chose ${choice} and so did the computer `
    } 

     if (choice == rock && computerPicks[2]){
        document.getElementById("winner").innerHTML = `The user chose ${choice} and the computer chose ${computerPicks[2]} `
            
    }

     if(choice == paper && computerPicks[0]){
        document.getElementById("winner").innerHTML = `The user chose ${choice} and the computer chose ${computerPicks[0]} `
    }

     if(choice == scissors && computerPicks[1]){
        document.getElementById("winner").innerHTML = `The user chose ${choice} and the computer chose ${computerPicks[1]}`
    }
}
        
    let scoreKeeper = ()=>{

            if(computerPicks[0] && choice == scissors  || 
            computerPicks[1] && choice == rock ||
            computerPicks[2] && choice == paper){
            computerScore+1
            }
            else{
                userScore+1
            }
        }
 
        for ( let x of choice) {
            x.addEventListener("click",function(){ 
                gamePlay();
                scoreKeeper();
                
            })
        }



    