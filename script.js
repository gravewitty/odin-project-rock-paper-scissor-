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

function playGame() {
    let humanSelection1 = getHumanChoice().toLowerCase();
    let computerSelection1 = getComputerChoice();
    console.log("Round 1:");
    console.log("Computer Choice: " + computerSelection1);
    console.log("Human Choice: " + humanSelection1);
    playRound(humanSelection1, computerSelection1);
    console.log("-----------------------------------");

    let humanSelection2 = getHumanChoice().toLowerCase();
    let computerSelection2 = getComputerChoice();
    console.log("Round 2:");
    console.log("Computer Choice: " + computerSelection2);
    console.log("Human Choice: " + humanSelection2);
    playRound(humanSelection2, computerSelection2);
    console.log("-----------------------------------");

    let humanSelection3 = getHumanChoice().toLowerCase();
    let computerSelection3 = getComputerChoice();
    console.log("Round 3:");
    console.log("Computer Choice: " + computerSelection3);
    console.log("Human Choice: " + humanSelection3);
    playRound(humanSelection3, computerSelection3);
    console.log("-----------------------------------");

    let humanSelection4 = getHumanChoice().toLowerCase();
    let computerSelection4 = getComputerChoice();
    console.log("Round 4:");
    console.log("Computer Choice: " + computerSelection4);
    console.log("Human Choice: " + humanSelection4);
    playRound(humanSelection4, computerSelection4);
    console.log("-----------------------------------");

    let humanSelection5 = getHumanChoice().toLowerCase();
    let computerSelection5 = getComputerChoice();
    console.log("Round 5:");
    console.log("Computer Choice: " + computerSelection5);
    console.log("Human Choice: " + humanSelection5);
    playRound(humanSelection5, computerSelection5);
    console.log("-----------------------------------");

    if (humanScore > computerScore) {
        console.log("User wins the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie!");
    }
}

playGame();
