function getComputerChoice() {
    let rock = "rock";
    let paper = "paper"
    let scissors = "scissor"
    let randomNo = Math.floor(Math.random() * 3 + 1);
    if (randomNo == 1) {
        return rock;
    } else if (randomNo == 2) {
        return paper;
    } else if (randomNo == 3) {
        return scissors;
    }
}


function getHumanChoice() {
    let userChoice = prompt("Enter Rock Paper Or Scissor");
    return userChoice;
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // your code here!
    
    if (humanChoice == "scissor" && computerChoice == "paper") {
        console.log("Scissor Beats paper! You Won The Game");
        humanScore++;
        console.log(`your score is : ${humanScore}`);
        console.log(`Computer score is : ${computerScore}`);

    } else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("Paper Beats rock! You Won The Game");
        humanScore++;
        console.log(`your score is : ${humanScore}`);
        console.log(`Computer score is : ${computerScore}`);

    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        console.log("Rock Beats Scissor! You Won The Game");
        humanScore++;
        console.log(`your score is : ${humanScore}`);
        console.log(`Computer score is : ${computerScore}`);

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose the game! Paper Beats Rock");
        computerScore++;
        console.log(`your score is : ${humanScore}`);
        console.log(`Computer score is : ${computerScore}`);

    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        console.log("You lose the game ! Rock Beats scissor");
        computerScore++;
        console.log(`your score is : ${humanScore}`);
        console.log(`Computer score is : ${computerScore}`);

    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        console.log("You lose the game ! Scissor Beat Paper ");
        computerScore++;
        console.log(`your score is : ${humanScore}`);
        console.log(`Computer score is : ${computerScore}`);

    } else if (humanChoice == computerChoice) {
        console.log("It's a tie !");
        console.log(`your score is : ${humanScore}`);
        console.log(`Computer score is : ${computerScore}`);

    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        let humanSelection = getHumanChoice();
        humanSelection = humanSelection.toLowerCase();
        let computerSelection = getComputerChoice();
        console.log("Round " + (i + 1) + ":")
        console.log("Computer Choicer: " + computerSelection);
        console.log("Human Choice: " + humanSelection);
        const result = playRound(humanSelection,computerSelection)
        console.log("User Score: " + humanScore)
        console.log("Computer Score: " + computerScore)
        console.log(result)
        console.log("-----------------------------------")
        }

        if (humanScore> computerScore) {
            console.log("User win the game")
        } else if (humanScore < computerScore) {
            console.log("Computer win the game")
        } else {
            console.log("Tie !")
        }   
} playGame()