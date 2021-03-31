
let possiblePlay = ["rock", "paper", "scissor"];

// Get the play from user, 
// keep prompting until valid answer(a.k.a has to be in one of three possible play)
playerSelection = "";
validInput = true;
while (validInput = true) {
    let playerPlay = prompt("What is your play: ").toLowerCase();
    if (possiblePlay.includes(playerPlay)) {
        playerSelection = playerPlay;
        break
    }
    console.log("Invalid Input");
}

// Generate random computer play

let computerPlay = function() {
    let random = Math.floor(Math.random() * possiblePlay.length);
    return possiblePlay[random];
}

// Play a game and keep track of points
let playerPoint = 0;
let computerPoint = 0;

let gamePlay = function(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie");
    }   else if (playerSelection == "rock" && computerSelection == "paper") {
        console.log("Paper beats rock ! Computer won !");
        computerPoint ++;
    }   else if (playerSelection == "rock" && computerSelection == "scissor") {
        console.log("Rock beats scissor ! Player won !");
        playerPoint ++;
    }   else if (playerSelection == "paper" && computerSelection == "rock") {
        console.log("Paper beats rock ! Player won !");
        playerPoint ++;
    }   else if (playerSelection == "paper" && computerSelection == "scissor") {
        console.log("Scissor beats paper ! Computer won !");
        computerPoint ++;
    }   else if (playerSelection == "scissor" && computerSelection == "rock") {
        console.log("Rock beats scissor ! Computer won !");
        computerPoint ++;
    }   else if (playerSelection == "scissor" && computerSelection == "paper") {
        console.log("Scissor beats paper ! Player won !");
        playerPoint ++;
    }
}

let game = function(numberOfPlay) {
    if (typeof(numberOfPlay) == "number") {
        for (i = 0; i < numberOfPlay; i++) {
            computerSelection = computerPlay();
            gamePlay(playerSelection,computerSelection);
        }
        console.log(`Player points : ${playerPoint} Computer points: ${computerPoint}`);
    }
    else 
    {
        console.log("Invalid number of game play");
    }

}