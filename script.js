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
