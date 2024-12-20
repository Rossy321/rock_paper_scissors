
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





