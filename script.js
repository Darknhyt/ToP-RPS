let playerScore = 0;
let computerScore = 0;
let rounds = 5;

const bRock = document.getElementById("R");
const bPaper = document.getElementById("P");
const bScissors = document.getElementById("S");
const res = document.getElementById("result");
const pScore = document.getElementById("p-score");
const cScore = document.getElementById("c-score");

bRock.addEventListener('click', ()=>{game("ROCK")});
bPaper.addEventListener('click', ()=>{game("PAPER")});
bScissors.addEventListener('click', ()=>{game("SCISSORS")});

function game(playerGame){
    res.innerText = playRound(playerGame,getComputerChoice());
    pScore.innerText = "PLAYER: "+playerScore;
    cScore.innerText = "COMPUTER: "+computerScore;
}

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
                case "SCISSORS" : return setScore(true, playerSelection, computerSelection);
                case "PAPER" : return setScore(false, computerSelection, playerSelection);
            }
        } else if (playerSelection == "PAPER") {
            switch (computerSelection) {
                case "ROCK" : return setScore(true, playerSelection, computerSelection);
                case "SCISSORS" : return setScore(false, computerSelection, playerSelection);
            }
        } else if (playerSelection == "SCISSORS") {
            switch (computerSelection) {
                case "PAPER" : return setScore(true, playerSelection, computerSelection);
                case "ROCK" : return setScore(false, computerSelection, playerSelection);
            }
        } else {
            return "Wrong pick...";
        }
  }

function setScore(g, p, c){
    resultText = g ? "You win! ": "You lose! ";
    resultText += p +" beats " + c;
    if (g){
        playerScore++;
        if (playerScore == rounds){
            resultText += "\n😁YOU WON "+rounds+" ROUNDS!"; 
        } else if (playerScore>rounds){
            playerScore = 1;
            computerScore = 0;
        }
    } else {
        computerScore++;
        if (computerScore == rounds){
            resultText += "\n😐YOU LOSE "+rounds+" ROUNDS!"; 
        } else if (computerScore>rounds){
            playerScore = 0;
            computerScore = 1;
        }
    }
    return resultText;
}

