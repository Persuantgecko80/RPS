// Initialize score variables
let playerWinAmount = 0;
let computerWinAmount = 0;
let tieAmount = 0;

// Get HTML elements
const rock = document.getElementById('rockBtn');
const paper = document.getElementById('paperBtn');
const scissors = document.getElementById('scissorsBtn');
const playerScoreElem = document.getElementById('playerScore');
const computerScoreElem = document.getElementById('computerScore');
const tieText = document.getElementById('resultTie');

function updateScores() {
    playerScoreElem.textContent = `Your score is: ${playerWinAmount}`;
    computerScoreElem.textContent = `The computer score is: ${computerWinAmount}`;
    tieText.textContent = `Tie rounds: ${tieAmount}`;
}

function computerPlay() {
    const options = ['rock', 'paper', 'scissors'];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let outcome;

    if (playerSelection === computerSelection) {
        outcome = "It's a tie!";
        tieAmount++;
    } else if (
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        outcome = `You win! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}!`;
        playerWinAmount++;
    } else {
        outcome = `You lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}!`;
        computerWinAmount++;
    }

    updateScores(); // Make sure to update the scores after each round, including ties

    // Check if someone won the game
    if (playerWinAmount >= 5) {
        alert('You win the game!');
        // Reset scores
        playerWinAmount = 0;
        computerWinAmount = 0;
        tieAmount = 0;
        updateScores();
    } else if (computerWinAmount >= 5) {
        alert('You lose the game!');
        // Reset scores
        playerWinAmount = 0;
        computerWinAmount = 0;
        tieAmount = 0;
        updateScores();
    }
}

rock.addEventListener('click', function() {
    playRound('rock', computerPlay());
});

paper.addEventListener('click', function() {
    playRound('paper', computerPlay());
});

scissors.addEventListener('click', function() {
    playRound('scissors', computerPlay());
});
