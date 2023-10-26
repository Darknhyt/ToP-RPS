function getComputerChoice(){
    let game = Math.floor(Math.random() * 3);
    switch (game){
        case 0: return "ROCK";
        case 1: return "PAPER";
        case 2: return "SCISSORS";
    }
}

function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toUpperCase();
        computerSelection = computerSelection.toUpperCase();
        if (playerSelection == computerSelection){
            return "THEY BOTH CHOSE "+playerSelection+"! DRAW!";
        } else if (playerSelection == "ROCK") {
            switch (computerSelection) {
                case "SCISSORS" : return "You win! Rock beats Scissors";
                case "PAPER" : return "You lose! Paper beats Rock";
            }
        } else if (playerSelection == "PAPER") {
            switch (computerSelection) {
                case "ROCK" : return "You win! Paper beats Rock";
                case "SCISSORS" : return "You lose! Scissors beats Paper";
            }
        } else if (playerSelection == "SCISSORS") {
            switch (computerSelection) {
                case "PAPER" : return "You win! Scissors beats Paper";
                case "ROCK" : return "You lose! Rock beats Scissors";
            }
        } else {
            return "Wrong pick...";
        }
  }
   
  const playerSelection = prompt("Write your move: ");
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));