const readline = require("readline-sync");
const transphobes = ["a cashier", "your parent", "a stranger in the restroom", "someone on social media", "a co-worker", "a childhood friend", "a stranger at a bar", "a stranger at the grocery store", "a classmate", "your cousin", "your sibling"]
const transphobeComments = ["uses the wrong pronoun", "uses your dead name", "tells you you're in the wrong bathroom", "invalidates your gender", "says something transphobic about a celebrity", "makes a joke about you being in drag", "calls you a slur", "starts talking loudly about how gender is just basic biology", "calls women 'females'", "jokes about how gay men think vagina's are gross", "says you'll always be their brother/sister"]
console.log("Welcome to the trans experience! You'll encounter all kinds of people in this world and have to choose how to respond.")
let patience = 10

function walk() {
let answer = readline.question("Do you want to walk (w), or stay home (h)?")
    if (answer === "w") {
        takeAChance()
    } else if (answer === "h") {
        hermit()
    }  
}

function takeAChance() {
    random = Math.floor(Math.random() * 11)
    if (random % 2 === 0) {
        console.log("You encounter " + transphobes[random] + ", who " + transphobeComments[random]) 
        transphobe()
    } else {
        friendTrust()
    }
}

function transphobe() {
    let answer = readline.question("Do you take the time to educate (e) or keep walking (w)?")
    if (answer === "e") {
        teach()
    } else {
        patience = patience - 1
    }
}

function teach() {
    random = Math.floor(Math.random() * 11)
    if (random % 2 === 0) {
        console.log("They seem to understand and thank you for explaining")
        patience++
    } else {
        console.log("They get angry until you give up");
        patience = patience - Math.floor(random/2)
    }
}

function friendTrust() {
    let answer = readline.question("You've run into a friend! Do you confide in them (c) or just make small talk (s)")
    if (answer === "c") {
        friend()
    } else {
        patience = patience - 3
    }
}
function friend() {
    random = Math.floor(Math.random() * 10)
    if (random % 2 === 0) {
        console.log("Your friend affirms your gender and helps you feel better")
        patience = patience + Math.floor(random/2)
    } else {
        console.log("Your friend says something that ends up making you feel worse")
        patience = patience - Math.floor(random/2)
    }
}

function hermit() {
    
    random = Math.floor(Math.random() * 11)
    if (random % 2 === 0) { 
        console.log("It's safest to be alone, you feel re-energized")
        patience = patience + (Math.floor(random/2+1))
    } else {
        console.log("Staying home just makes you feel isolated.")
        patience = patience - (Math.floor(random/2+1))
    }
}


while (patience > 0) {
    console.log(patience)
    walk()
}
