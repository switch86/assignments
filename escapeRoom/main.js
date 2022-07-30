
const readline = require("readline-sync");
let answer = readline.question("You find yourself locked in a room. How do you proceed? A. Put hand in hole. B. Find the key. C. Open the door.");
let count = 0


const escapeRoom = (function(answer) {
    if (answer === "A" || answer === "a") {
        count++
        console.log("You have perished, please try again.");
        answer = readline.question("You find yourself locked in a room. How do you proceed? A. Put hand in hole. B. Find the key. C. Open the door.");
        escapeRoom(answer);
    } else if (answer === "B" || answer === "b") {
        count++
        console.log("You have found the key! It is stored safely in the room, even if you perish.");
        secondStage();
    } else if (answer === "C" || answer === "c") {
        count++
        console.log("Drat! The door is locked! Please try again");
        answer = readline.question("You find yourself locked in a room. How do you proceed? A. Put hand in hole. B. Find the key. C. Open the door.");
        escapeRoom(answer);  
    } else {
        count++
        console.log("Invalid Entry, please try again.")
        answer = readline.question("You find yourself locked in a room. How do you proceed? A. Put hand in hole. B. Find the key. C. Open the door.")
        escapeRoom(answer)
    }
}) 

const secondStage = function() {
    let answer2 = readline.question("What do you want to do next? A. Put hand in hole. B. Open the door.")
    if (answer2 === "A" || answer2 === "a") {
        count++
        console.log("You have perished, please try again.");
        secondStage();
    } else if (answer2 === "B" || answer2 === "b") {
        count++
        let score = 102 - count;
        console.log("You've escaped! Congratulations, you are a winner!");
        console.log(`Score: ${score}`)
        return null;
    } else {
        count++
        console.log("Invalid Entry, please try again.")
        secondStage()
    }
}
escapeRoom(answer);
