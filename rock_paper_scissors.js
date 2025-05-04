
function getComputerChoice() {
    let randNum = Math.random();
    let newNum = randNum * 3 + 1;
    let computerChoice = Math.floor(newNum);
    if (computerChoice === 1) {
        computerChoice = "rock";
    } 
    else if (computerChoice === 2) {
        computerChoice = "paper";
    }
    else if (computerChoice === 3) {
        computerChoice = "scissors";
    }
    return computerChoice;
    
}

function getHumanChoice() {
    let humanChoice = prompt("Please write either - rock, paper, or scissors");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;

}

 




let playRoundOutput = function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice)
        return "it's a draw";
    else if (humanChoice === "rock" && computerChoice === "scissors")
        return "human wins";
    else if (humanChoice === "rock" && computerChoice === "paper")
        return "computer wins";
    else if (humanChoice === "scissors" && computerChoice === "rock") 
        return "computer wins" 
    else if (humanChoice === "scissors" && computerChoice === "paper")
        return "human wins";
    else if (humanChoice === "paper" && computerChoice === "rock")
        return "human wins";
    else if (humanChoice === "paper" && computerChoice === "scissors")
        return "computer wins"; 
    
}
 



function playGame() {

    let humanScore = 0;
    let computerScore = 0;

     {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        let playGameValue = playRoundOutput(humanSelection, computerSelection);
        
        console.log(playGameValue);
        

     if (playGameValue === "human wins") humanScore += 1;
     else if (playGameValue === "computer wins") computerScore += 1;

     console.log("human score: " + humanScore);
     console.log("computer score: " + computerScore);



    }


    if (humanScore > computerScore) {
        console.log("human wins the game");

    } else if (computerScore > humanScore) {
      console.log("computer wins the game");
    }
      else if (computerScore === humanScore) {
      console.log("the games a draw");
    }
     
}


const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "Rock";
paperButton.textContent = "Paper";
scissorsButton.textContent = "Scissors";

const body = document.querySelector("body");
const div = document.createElement("div");
body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scissorsButton);
body.appendChild(div);

const humanScoreDiv = document.createElement("div");
body.appendChild(humanScoreDiv);

const computerScoreDiv = document.createElement("div");
body.appendChild(computerScoreDiv);


let humanScore = 0;
let computerScore = 0;
let result;
rockButton.addEventListener("click", () => { 
   result = playRound("rock", getComputerChoice())
    div.innerText = result;
    if (result === "human wins" ) {
        humanScore += 1;
        humanScoreDiv.textContent = humanScore;
    }
    
    else if (result === "computer wins") {
        computerScore += 1;
        computerScoreDiv.textContent = computerScore;
    };
    
 
    if (computerScore === 5) {
        alert("computer wins!");
        humanScore = 0;
        computerScore = 0;
        humanScoreDiv.textContent = humanScore;
        computerScoreDiv.textContent = computerScore;
    }
    
    else if (humanScore === 5) {
        alert("human wins!");
        humanScore = 0;
        computerScore = 0;
        humanScoreDiv.textContent = humanScore;
        computerScoreDiv.textContent = computerScore;
    };

})


paperButton.addEventListener("click", () => {
    result = playRound("paper", getComputerChoice())
    div.innerText = result;
    if (result === "human wins" ) {
        humanScore += 1;
        humanScoreDiv.textContent = humanScore;
    }
    
    else if (result === "computer wins") {
        computerScore += 1;
        computerScoreDiv.textContent = computerScore;
    };

    if (computerScore === 5) {
        alert("computer wins!");
        humanScore = 0;
        computerScore = 0;
        humanScoreDiv.textContent = humanScore;
        computerScoreDiv.textContent = computerScore;
    }
    
    else if (humanScore === 5) {
        alert("human wins!");
        humanScore = 0;
        computerScore = 0;
        humanScoreDiv.textContent = humanScore;
        computerScoreDiv.textContent = computerScore;
    };
});


scissorsButton.addEventListener("click", () => {
    result = playRound("scissors", getComputerChoice())
    div.innerText = result;
       if (result === "human wins" ) {
        humanScore += 1;
        humanScoreDiv.textContent = humanScore;
    }
    
    else if (result === "computer wins") {
        computerScore += 1;
        computerScoreDiv.textContent = computerScore;
    }; 

    if (computerScore === 5) {
        alert("computer wins!");
        humanScore = 0;
        computerScore = 0;
        humanScoreDiv.textContent = humanScore;
        computerScoreDiv.textContent = computerScore;
    }
    
    else if (humanScore === 5) {
        alert("human wins!");
        humanScore = 0;
        computerScore = 0;
        humanScoreDiv.textContent = humanScore;
        computerScoreDiv.textContent = computerScore;
    };
});




    










