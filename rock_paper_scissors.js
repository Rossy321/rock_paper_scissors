
function getComputerChoice() {
    let randNum = Math.random();
    let newNum = randNum * 3 + 1;
    newNum = Math.floor(newNum);
    if (newNum === 1) {
        newNum = "rock";
    } 
    else if (newNum === 2) {
        newNum = "paper";
    }
    else if (newNum === 3) {
        newNum = "scissors";
    }
    return newNum;
    
}

function getHumanChoice() {
    let humanChoice = prompt("Please write either - rock, paper, or scissors");
    humanChoice = humanChoice.toLowerCase();
    return humanChoice;

}

let humanScore = 0;
let computeScore = 0; 


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice)
        return "it's a draw";
    else if (humanChoice === rock && computerChoice === scissors)
        return "human wins";
    else if (humanChoice === rock && computerChoice === paper)
        return "computer wins";
    else if (humanChoice === scissors && computerChoice === rock) 
        return "computer wins" 
    else if (humanChoice === scissors && computerChoice === paper)
        return "human wins";
    else if (humanChoice === paper && computerChoice === rock)
        return "human wins";
    else if (humanCHoice === paper && computerChoice === scissors)
        return "computer wins"  
}



    
    
}

fucntion keepScore {
    if playRound = "it's a draw" 
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();





