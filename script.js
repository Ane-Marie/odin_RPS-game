const divOne = document.createElement("div");
divOne.classList.add("intro"); 

const body = document.querySelector("body");
body.appendChild(divOne);

const header = document.createElement("h1");
header.textContent = "Welcome to our game of Rock, Paper, Scissors!";
header.style.textAlign = "center";

const para = document.createElement("p");
para.textContent = "If you would like to play please make your choice bellow to start round one:";
para.style.textAlign = "center";

divOne.appendChild(header);
divOne.appendChild(para);


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


//get player's choice:
const divTwo = document.createElement("div");
divTwo.classList.add("playerChoice");
divTwo.setAttribute("style", "display: flex; justify-content: center; gap: 110px; padding: 30px");
body.appendChild(divTwo);

const buttonRock = document.createElement("button");
buttonRock.setAttribute("id", "rock");
buttonRock.textContent = "Rock";
buttonRock.setAttribute("style", "color: black; background: lightblue; border-radius: 20px; padding: 50px");

const buttonPaper = document.createElement("button");
buttonPaper.setAttribute("id", "paper");
buttonPaper.textContent = "Paper";
buttonPaper.setAttribute("style", "color: black; background: lightblue; border-radius: 20px; padding: 50px");

const buttonScissors = document.createElement("button");
buttonScissors.setAttribute("id", "scissors");
buttonScissors.textContent = "Scissors";
buttonScissors.setAttribute("style", "color: black; background: lightblue; border-radius: 20px; padding: 50px");

divTwo.appendChild(buttonRock);
divTwo.appendChild(buttonPaper);
divTwo.appendChild(buttonScissors);



 




/*btns.forEach(function(e)) {
    e.addEventListener("click", ...
*/
