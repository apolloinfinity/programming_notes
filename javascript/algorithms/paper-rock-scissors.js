//prompts user to make a choice.
var userChoice = prompt("Do you choose rock, paper or scissors?");

//computerChoice is assigned Math.random method
var computerChoice = Math.random(); //computerChoice is assigned Math.random method

//running an if/else to correspond rock, paper or scissors to a number from computerChoice
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}
console.log("Computer: " + computerChoice);

//A function to compare the choices made by the client and the computerChoice. 
function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return "The result is a tie!";
    } else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            return "rock wins";
        } else {
            return "paper wins";
        }

    } else if (choice1 === "paper") {
        if (choice2 === "rock") {
            return "paper wins";
        } else {
            return "scissors wins";
        }

    } else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            return "rock wins";
        } else {
            return "scissors wins";
        }
    }
}

compare(userChoice, computerChoice);