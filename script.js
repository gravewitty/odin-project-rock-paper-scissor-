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
    let humanDiv = document.querySelector("#human-score");
    let computerDiv = document.querySelector("#computer-score");
    let finalDiv = document.querySelector("#round-winner");
    let userChooseDiv = document.querySelector("#user-choose");
    let computerChooseDiv = document.querySelector("#computer-choose");

    if (humanChoice == "scissor" && computerChoice == "paper") {
        userChooseDiv.textContent = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChooseDiv.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)

        finalDiv.textContent = "You Won !"
        humanScore++;
        humanDiv.textContent = `${humanScore}`
        computerDiv.textContent = ` ${computerScore}`



    } else if (humanChoice == "paper" && computerChoice == "rock") {
        userChooseDiv.textContent = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChooseDiv.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)

        finalDiv.textContent = "You Won !"
        humanScore++;
        humanDiv.textContent = `${humanScore}`
        computerDiv.textContent = ` ${computerScore}`


    } else if (humanChoice == "rock" && computerChoice == "scissor") {
        userChooseDiv.textContent = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChooseDiv.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)

        finalDiv.textContent = "You Won !"
        humanScore++;
        humanDiv.textContent = `${humanScore}`
        computerDiv.textContent = ` ${computerScore}`

    } else if (humanChoice == "rock" && computerChoice == "paper") {
        userChooseDiv.textContent = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChooseDiv.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        finalDiv.textContent = "You lose!"


        computerScore++;
        humanDiv.textContent = `${humanScore}`
        computerDiv.textContent = ` ${computerScore}`


    } else if (humanChoice == "scissor" && computerChoice == "rock") {
        userChooseDiv.textContent = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChooseDiv.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
        computerScore++;
        humanDiv.textContent = `${humanScore}`
        computerDiv.textContent = ` ${computerScore}`
        finalDiv.textContent = "You lose !"


    } else if (humanChoice == "paper" && computerChoice == "scissor") {
        userChooseDiv.textContent = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChooseDiv.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)


        computerScore++;
        humanDiv.textContent = `${humanScore}`
        computerDiv.textContent = ` ${computerScore}`
        finalDiv.textContent = "You lose !  "


    } else if (humanChoice == computerChoice) {
        userChooseDiv.textContent = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1);
        computerChooseDiv.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);


        humanDiv.textContent = `${humanScore}`
        computerDiv.textContent = `${computerScore}`
        finalDiv.textContent = "It's a tie !"


    }

}


let rockButton = document.querySelector(".rock");
let paperButton = document.querySelector(".paper");
let scissorButton = document.querySelector(".scissor");
let roundDiv = document.querySelector("#round");
let roundNo = 0;
let finalWinnerDiv = document.querySelector("#final-winner");

rockButton.addEventListener('click', function () {
    roundNo++;
    roundDiv.textContent = `${roundNo}`;

    playRound("rock", getComputerChoice());
    if (humanScore > computerScore && roundNo == 5) {
        console.log("User wins!");
        finalWinnerDiv.textContent = "User wins!"

    } else if (humanScore < computerScore && roundNo == 5) {
        console.log("Computer wins!");
        finalWinnerDiv.textContent = "Computer wins!"
    } else if (humanScore == computerScore && roundNo == 5) {
        console.log("It's a tie match!");
        finalWinnerDiv.textContent = "It's a tie match!"

    }

})

paperButton.addEventListener('click', function () {
    roundNo++;
    roundDiv.textContent = `${roundNo}`;
    playRound("paper", getComputerChoice());
    if (humanScore > computerScore && roundNo == 5) {
        console.log("User wins!");
        finalWinnerDiv.textContent = "User wins!"

    } else if (humanScore < computerScore && roundNo == 5) {
        console.log("Computer wins!");
        finalWinnerDiv.textContent = "Computer wins!"

    } else if (humanScore == computerScore && roundNo == 5) {
        console.log("It's a tie Match!");
        finalWinnerDiv.textContent = "It's a tie Match!"

    }
})

scissorButton.addEventListener('click', function () {
    roundNo++;
    roundDiv.textContent = `${roundNo}`;
    playRound("scissor", getComputerChoice());
    if (humanScore > computerScore && roundNo == 5) {
        console.log("User wins!");
        finalWinnerDiv.textContent = "User wins!"

    } else if (humanScore < computerScore && roundNo == 5) {
        console.log("Computer wins!");
        finalWinnerDiv.textContent = "Computer wins!"

    } else if (humanScore == computerScore && roundNo == 5) {
        console.log("It's a tie Match!");
        finalWinnerDiv.textContent = "It's a tie Match!"


    }
})