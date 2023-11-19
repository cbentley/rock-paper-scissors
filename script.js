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
    let playerScore = 0;
    let computerScore = 0;
    let round;
    let playerSelection;
    let computerSelection;
    let roundNum = 0;
    let gameResult = '';

    const buttons = document.querySelectorAll('button');
    const result = document.querySelector('.result');

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            roundNum++;

            result.innerHTML += `Round ${roundNum}<br>`;

            // Player selection
            playerSelection = e.target.textContent;
            result.innerHTML += `Player chooses ${playerSelection}<br>`;

            // Computer selection
            computerSelection = getComputerChoice();
            result.innerHTML += `Computer chooses ${computerSelection}<br>`;

            round = playRound(playerSelection, computerSelection);

            // Determine round result
            if (round === "player") {
                playerScore++;
                result.innerHTML += 'Player wins round<br>';
            }
            else if (round === "computer") {
                computerScore++;
                result.innerHTML += 'Computer wins round<br>';
            }
            else if (round === "draw") {
                result.innerHTML += 'This round is a draw<br>';
            }
            result.innerHTML += `Current score: Player ${playerScore} - ${computerScore} Computer<br>`;
            result.innerHTML += '<br>';

            // Determine game result
            if (playerScore === 5 || computerScore === 5) {
                buttons.forEach(button => {
                    button.disabled = true;
                });
                
                if (playerScore > computerScore) {
                    // result.innerHTML += 'Player wins!<br>';
                    gameResult += 'Player wins!\n';
                }
                else if (computerScore > playerScore) {
                    // result.innerHTML += 'Computer wins!<br>';
                    gameResult += 'Computer wins!\n';
                }
                else {
                    // result.innerHTML += 'We have a draw!<br>';
                    gameResult += 'We have a draw!\n';
                }

                gameResult += `Final score: Player ${playerScore} - ${computerScore} Computer`;
                // result.innerHTML += `Final score: Player ${playerScore} - ${computerScore} Computer`;
                alert(gameResult);
            }
        });
    });
}

game();