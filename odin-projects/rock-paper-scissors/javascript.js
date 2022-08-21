function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let userInput = prompt('Rock, Paper or Scissors?', 'insert your choice here');
userInput = userInput.toLowerCase();


function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === computerSelection) {
        return "Draw";
    }
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lost, computer won";
        } else {
            return "You won!!";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lost, computer won";
        } else {
            return "You won!!";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lost, computer won";
        } else {
            return "You won!!";
        }
}
}

function playGame() {
    const playerSelection = userInput;
    const computerSelection = getComputerChoice();
    console.log(playerSelection);
    console.log(computerSelection);
    playRound(playerSelection, computerSelection);
    console.log(playRound(playerSelection, computerSelection));
}


function game() {
    for (let i = 0; i < 5; i++) {
        playGame();
    }
}

game();