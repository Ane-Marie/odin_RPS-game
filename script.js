//intro
const divOne = document.createElement("div");
divOne.setAttribute("id", "intro"); 

const body = document.querySelector("body");
body.appendChild(divOne);

const header = document.createElement("h1");
header.textContent = "Welcome to Rock, Paper, Scissors!";
header.style.textAlign = "center";
header.style.fontFamily = "Verdana";

const para = document.createElement("p");
para.textContent = "First to 5 points wins. Please make your choice bellow to start:";
para.setAttribute("style", "text-align: center; font-weight: bold; font-family: Verdana; font-style: italic;")

divOne.appendChild(header);
divOne.appendChild(para);


//get player's choice 

const divTwo = document.createElement("div");
divTwo.setAttribute("id", "playerChoice");
divTwo.setAttribute
("style", "display: flex; justify-content: center; gap: 110px; margin-top: 50px; padding: 30px; border-top: solid black 5px; border-bottom: solid black 5px; margin-bottom: 10px;");
body.appendChild(divTwo);

const buttonRock = document.createElement("button");
buttonRock.textContent = "Rock";
buttonRock.setAttribute("style", "color: white; font-size: 35px; background: black; border-radius: 20px; padding: 30px");

const buttonPaper = document.createElement("button");
buttonPaper.textContent = "Paper";
buttonPaper.setAttribute("style", "color: white; font-size: 35px; background: black; border-radius: 20px; padding: 30px");

const buttonScissors = document.createElement("button");
buttonScissors.textContent = "Scissors";
buttonScissors.setAttribute("style", "color: white; font-size: 35px; background: black; border-radius: 20px; padding: 30px");

divTwo.appendChild(buttonRock);
divTwo.appendChild(buttonPaper);
divTwo.appendChild(buttonScissors);


// get computer's choice using a random number

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
            
    }
};

//play game, keep scores and declare overall winner

const divThree = document.createElement("div");
divThree.setAttribute("id", "scores");
divThree.setAttribute("style", "display: flex; justify-content: center; gap: 80px; font-size: 30px; font-weight: bold; font-family: Verdana;");
body.appendChild(divThree);
    
const humanWins = document.createElement("p");
divThree.appendChild(humanWins);
    
const computerWins = document.createElement("p");
divThree.appendChild(computerWins);
    
const divFour = document.createElement("div");
divFour.setAttribute("id", "results");
body.appendChild(divFour);

const roundResult = document.createElement("p");
roundResult.setAttribute("style", "text-align: center; font-weight: bold; font-family: Verdana; font-style: italic;")
divFour.appendChild(roundResult);

const gameResult = document.createElement("p");
gameResult.setAttribute("style", "text-align: center; font-weight: bold; font-family: Verdana; font-style: italic;")
divFour.appendChild(gameResult);


function playGame() {

    let humanScore = 0;     //score variables
    let computerScore = 0;
    
//logic to play one round
    function playRound(humanChoice) {  
        const computerChoice = getComputerChoice();
        gameResult.textContent = "";
            
        if(humanChoice === computerChoice) {
                roundResult.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. It's a tie!`;
        }
        else if((humanChoice === "rock" && computerChoice === "scissors") ||
                    (humanChoice === "scissors" && computerChoice === "paper") ||
                    (humanChoice === "paper" && computerChoice === "rock")) 
                {
                roundResult.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. You win this round!`;
                humanScore++;
        }
        else {
                roundResult.textContent = `You chose ${humanChoice}, computer chose ${computerChoice}. Computer wins this round!`;
                computerScore++;
        }
        
        humanWins.textContent = `PLAYER: ${humanScore}`;
        computerWins.textContent = `COMPUTER: ${computerScore}`;

// function that resets scores and in turn resets the game
        resetScores = () => {
            humanScore = 0;
            computerScore = 0;
        }

        if (humanScore === 5) {
            gameResult.textContent =
            `Congratulations! You have won the game!`;
            gameResult.style.color = "green";
            resetScores();
            
            } else if (computerScore === 5) {
            gameResult.textContent =
            `You lost this game! Better luck next time.`;
            gameResult.style.color = "red";
            resetScores();
            }
    }

//event listeners that call "playRound" function with the correct playerSelection every time a button is clicked
    buttonRock.addEventListener("click", () => {
        playRound("rock")
    });
    buttonPaper.addEventListener("click", () => {
            playRound("paper")
    });
    buttonScissors.addEventListener("click", () => {
            playRound("scissors")
    });
       
} 
    
playGame();
