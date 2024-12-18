
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


console.log(getComputerChoice())






