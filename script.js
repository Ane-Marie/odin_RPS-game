// get computer's choice using a random number:

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);

    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            console.log("Something went wrong! Please start again.");
    }
}

//get player's choice - case insesitive:

function getHumanChoice() {
    let input = prompt("Enter your choice: Rock, Paper, Scissors?");
    if(input.toLowerCase() === "rock" || input.toLowerCase() === "paper" || input.toLowerCase() === "scissors") {
        return input.toLowerCase();
    }
    else {
        console.log("Please enter a valid choice. Computer wins this round!");
    }
} 

//logic to play game(five rounds), keep scores and declare overall winner.

function playGame() {
    humanScore = 0;     //score variables
    computerScore = 0;

    for(round = 0; round < 5; round++) {
        function playRound(humanChoice, computerChoice) {  //logic to play one round
            if(humanChoice === computerChoice) {
                console.log("It's a draw!");
            }
            else if((humanChoice === "rock" && computerChoice === "scissors") ||
                    (humanChoice === "scissors" && computerChoice === "paper") ||
                    (humanChoice === "paper" && computerChoice === "rock")) 
                {
                console.log(`You win this round, ${humanChoice} beats ${computerChoice}!`);
                humanScore++;
            }
            else {
                console.log(`Computer wins this round, ${computerChoice} beats ${humanChoice}!`);
                computerScore++;
            }
        }

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }
    
    if (humanScore === computerScore) {
        console.log("It's a draw overall!")
    }
    else if (humanScore > computerScore) {
        console.log(`Your win the game and your final score is: ${humanScore}`);
    }
    else {
        console.log(`Computer wins the game and it's final score is: ${computerScore}`);
    }
}

playGame();