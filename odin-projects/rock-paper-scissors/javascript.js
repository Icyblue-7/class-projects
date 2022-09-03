const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');


let computerChoice

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber) {
        case 0:
            computerChoice = "rock";
            break;
        case 1:
            computerChoice = "paper";
            break;
        case 2:
            computerChoice = "scissors";
            break;
    }

    computerChoiceDisplay.innerHTML = computerChoice;
};


let userInput 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userInput = e.target.id
    playerChoiceDisplay.innerHTML = userInput;
    getComputerChoice();
    getResult();
    showScore();
}));


let result

function getResult() {

    if (userInput === "rock") {
        if (computerChoice === "paper") {
            result = "You lost, computer won";
        } else {
            result = "You won!!";
        }
    };
    if (userInput === "paper") {
        if (computerChoice === "scissors") {
            result = "You lost, computer won";
        } else {
            result = "You won!!";
        }
    };
    if (userInput === "scissors") {
        if (computerChoice === "rock") {
            result = "You lost, computer won";
        } else {
            result = "You won!!";
        }
};
    if (userInput === computerChoice) {
    result = "Draw";
};
    resultDisplay.innerHTML = result;
};

let score;
let playerScore = 0;
let computerScore = 0;

function showScore() {
    if (result === "You won!!") {
        playerScore++;
    };
    playerScoreDisplay.innerHTML = playerScore;
    if (result === "You lost, computer won") {
        computerScore++;
    }
    computerScoreDisplay.innerHTML = computerScore;
}


// function game() {
//     for (let i = 0; i < 5; i++) {
//         playGame();
//     }
// }

// game();