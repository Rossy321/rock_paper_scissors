
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

    for (let i = 0; i < 5; i++) {
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















