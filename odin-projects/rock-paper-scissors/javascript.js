const computerChoiceDisplay = document.getElementById('computer-choice');
const playerChoiceDisplay = document.getElementById('player-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');


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


// function game() {
//     for (let i = 0; i < 5; i++) {
//         playGame();
//     }
// }

// game();