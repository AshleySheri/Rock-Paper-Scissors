let humanScore = 0;
let computerScore = 0;

const gameChoices = "Rock,Paper,Scissors";
const rounds = 5;

function getComputerChoice(){ 
    const singleChoice = gameChoices.split(","); 
    const randomize = Math.floor(Math.random() * singleChoice.length); 
    return singleChoice[randomize].toLowerCase();
}

function getHumanChoice(){
    let answer = prompt("Choose: Rock, Paper, or Scissors? ")
    return answer ? answer.trim().toLowerCase() : "";
}

        
function playRound( humanChoice, computerChoice) {
    
    const computerWins = 
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock");
    
    if (computerWins) {
        computerScore++
            console.log(`You Lose! ${computerChoice} beats ${humanChoice}`);
        } else {
            humanScore++
            console.log(`You Win! ${humanChoice} beats ${computerChoice}`);
        }
       
    if (humanChoice === computerChoice) {
        console.log("It's a Tie!");
        return;
    } 
}
 

function playGame() {

    humanScore = 0;
    computerScore = 0;
    
    for (let i = 0; i < rounds; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    const finalScore = humanScore > computerScore ? console.log("Game Over! You Won! " + humanScore + " to " + computerScore) : console.log("Game Over! You Lost! " + humanScore + " to " + computerScore);
    
    console.log(finalScore);
}


playGame();