function getComputerChoice() {
    // We’ll use this function in the game to make the computer’s play. Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’.

    const rand = Math.floor(Math.random() * 3)
    const choices = ["Rock", "Paper", "Scissors"]

    return choices[rand]
}

function playRound(playerSelection, computerSelection) {
    // Compares player and computer selection, and decides the winner. Returns "player", "computer", or "draw".

    let result;
    const validChoices = ["rock", "paper", "scissors"];

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            result = "draw";
        }
        else if (computerSelection === "paper") {
            result = "computer";
        }
        else if (computerSelection === "scissors") {
            result = "player";
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            result = "player";
        }
        else if (computerSelection === "paper") {
            result = "draw";
        }
        else if (computerSelection === "scissors") {
            result = "computer";
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result = "computer";
        }
        else if (computerSelection === "paper") {
            result = "player";
        }
        else if (computerSelection === "scissors") {
            result = "draw";
        }
    }
    else if (!validChoices.includes(playerSelection)) {
        result = "computer";
    }

    return result;
}

function game() {
    // Repeatedly calls playRound() to play a 5-round game that keeps score and reports a winner or loser at the end.

    let playerScore = 0
    let computerScore = 0
    let round;
    let playerSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Please enter your play");
        console.log(`Player chooses ${playerSelection}`);

        computerSelection = getComputerChoice();
        console.log(`Computer chooses ${computerSelection}`);

        round = playRound(playerSelection, computerSelection);

        if (round === "player") {
            playerScore++;
            console.log("Player wins round");
        }
        else if (round === "computer") {
            computerScore++;
            console.log("Computer wins round");
        }
        else if (round === "draw") {
            console.log("This round is a draw");
        }

        console.log(`Current score: Player ${playerScore} - ${computerScore} Computer\n\n`);
    }

    console.log(`Final score: Player ${playerScore} - ${computerScore} Computer`)

    if (playerScore > computerScore) {
        console.log("Player wins!");
    }
    else if (computerScore > playerScore) {
        console.log("Computer wins!");
    }
    else {
        console.log("We have a draw!");
    }
}

game();