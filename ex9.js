
let randomNumber = Math.round(Math.random() * 99) + 1;;


function guessNumber() {
    let nr;
    while (nr !== randomNumber) {
        nr = parseInt(prompt("Guess a number between 1 and 100:"));
        if (isNaN(nr)) {
            console.log("Please enter a valid number.");
        } else if (nr < randomNumber) {
            console.log("Too low! Try again.");
        } else if (nr > randomNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log("Correct! The number was " + randomNumber);
            break;
        }
    }
}

guessNumber();