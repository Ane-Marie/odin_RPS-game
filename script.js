// create a function to get computer's choice using a random number:

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);

    if(choice === 0) {
        return "rock";
    }
    else if(choice === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

//create a function to get player choice/ case insesitive:

function getHumanChoice() {
    let input = prompt("Enter your choice: Rock, Paper, Scissors?");
    if(input.toLowerCase() === "rock" || input.toLowerCase() === "paper" || input.toLowerCase() === "scissors") {
        return input;
    }
    else {
        console.log("Please enter a valid choice. Computer wins this round!");
    }
}

humanScore = 0;
computerScore = 0; //create score variables


