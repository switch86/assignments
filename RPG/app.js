const readline = require("readline-sync");
let transphobes = ["a cashier", "your parent", "a stranger in the restroom", "someone on social media", "a co-worker", "a childhood friend", "a stranger at a bar", "a stranger at the grocery store", "a classmate", "your cousin", "your sibling"]
const transphobeComments = ["uses the wrong pronoun", "uses your dead name", "tells you you're in the wrong bathroom", "invalidates your gender", "says something transphobic about a celebrity", "makes a joke about you being in drag", "calls you a slur", "starts talking loudly about how gender is just basic biology", "calls women 'females'", "jokes about how gay men think vagina's are gross", "says you'll always be their brother/sister"]
const awards = ["Marsha P. Johnson's stilleto pump", "Laverne Cox' bright orange jumper", "Lou Sullivan's teenage journal", "Elliot Page's oversized suit", "A big hug from Miss Major Griffen-Gracy", "Willi Ninja's fanciest dance shoes", "Billy Tipton's hit jazz single", "A ride in One-Eyed Charley's stagecoach", "Cece McDonald's handbag", "Patricio 'Cacahuate' Manuel's boxing gloves", "Kylar Broadus' legal notebook", "Kortney Kyan Ziegler's latest film", "Angelica Ross' laptop"]



let answer
let patience
let transphobe
let transphobeRQ
let battlePoints
let BP
let penalty
let energy = 0
let opponent
let player = {
    awards: [],
    defeated: [],
    rq: patience, 
}

// Greeting
console.log("Welcome to the trans experience! Imagine yourself existing in the world as a trans person. Life isn't easy, but there are good things too. You'll encounter all kinds of transphobic people in this world and will have to decide how to interact with them. Type (q) at any time to quit the game, or (i) to check your inventory.")

player.name = readline.question("To get started, what is your name?")
console.log("Great! Thanks for playing, " + player.name + "!")
let level = readline.question("Do you want to start as an egg (a), a trans youth (b), or a trans elder (c)?")

ageSelect()
function ageSelect() {
    while (level != "a" & level != "b" & level != "c") {
        level = readline.question("Do you want to start as a trans baby (a), a trans youth (b), or a trans elder (c)?") 
    }

    if (level === "a") {
        patience = 10;
        opponent = 10;
    } else if (level === "b") {
        patience = 25;
        opponent = 25;
    } else if (level ==="c") {
        patience = 50;
        opponent = 50;
    } 
}

function walk() {
    answer = readline.question("Select an option: (a) go for a walk, (b) stay home?")
        if (answer === "a") {
            takeAChance()
        } else if (answer === "b") {
            hermit()
        } else if (answer === "c") {
            console.log(player);
        } else if (answer === "d") {
            console.log("Thanks for playing.")
            patience = 0
        }
}

function takeAChance() {
    depression = 0 
    random = Math.floor(Math.random() * transphobes.length)
    if (random % 2 === 0) {
        transphobe = transphobes[random]
        player.defeated.push(transphobe)
        transphobes = transphobes.filter(input => input != transphobe)
        console.log("You encounter " + transphobe + ", who " + transphobeComments[random]) 
        encounter()
    } else if (random % 3 === 0) {
        friendTrust()
    } else {
        console.log("You had a pleasant time walking out in the world alone. Your Resistance Quotient increases by one point");
        patience++
    }
}
// When you encounter a transphobe, you can choose to do battle or keep walking.
function encounter() {
    answer = readline.question("Please choose: (a) walk away, (b) do battle?")
    if (answer === "b") {
        chooseEnergy();
    } else if (answer === "a") {
        keepWalking();
    }
}

// If you try to ignore a transphobe you have encountered, there is a chance of whether this will impact you positively or negatively. The amount of damage/boost is also random with roughly 30% chance of having no impact at all. 
function keepWalking()      { 
    random = Math.floor(Math.random() * 10) - 3;
        if (random % 2 === 0 & random > 0) {
            console.log("The encounter leaves you feeling dejected. Your Resistance Quotient drops " + random + " points.");
            patience = patience - random;
        }
        else {
            console.log("You walk away feeling empowered by ignoring the hater. Congratulations your Resistance Quotient has increased by " + random + " points!");
            patience = patience + random; 
        }
} 

function chooseEnergy() {
    energy = patience + 1
        do {energy = readline.question("You have a total Resistance Quotient of " + patience + " points. How much are you willing to risk in this encounter?")}
        while (energy > patience || energy <= 0 );
        penalty = energy 
        console.log(penalty)
    battle();
}

function battle() {
    transphobeRQ = (Math.floor(Math.random() * opponent) + 1)
    let fight = true    
    while ((transphobeRQ > 0) && (energy > 0) && (fight === true) && (answer != "q") && (answer != "i")) {
        console.log("You: " + energy + "\nTransphobe:" + transphobeRQ)
        answer = readline.question("Select (a) attack, or (b) run away?")
        if (answer === "a") {
            Attack()
        } else if (answer === "b") {
            fight = false
        }
    }
    if (fight === false) {
        keepWalking()
    } else if (energy <= 0) {
        console.log("Foiled again!! The transphobes have beat you but you'll get them next time!")
        patience = patience - penalty;
    } else if (transphobeRQ <= 0) {
        battleWon()
    }
}

function Attack() {
    random = Math.floor(Math.random() * 11)
    points = Math.floor(Math.random() * 5) + 1
    if (random % 2 === 0) {
        console.log("The transphobe is enraged and and argues back ferociusly. Your Resistance Quotient decreases by " + points + " points.");
        energy = energy - points;
        }      
    else  {
        console.log("You've made a good point. Your opponents' score drops by " + points + " points.")
        transphobeRQ = transphobeRQ - points
    } 
}

function battleWon() {
    let i = Math.floor(Math.random() * 10)
    console.log("You have emerged victorious!!! Relish in the spoils. Your Resistance Quotient increases by 10 points and you are awarded with " + awards[i] + ". What an honor!!! It has been added to your inventory. Congratulations!")
    patience = patience - (penalty - energy)
    patience = patience + 10
    player.awards.push(awards[i])
}

function friendTrust() {
    let answer = readline.question("You've run into a friend! Do you (a) confide in them or (b) just make small talk")
    if (answer === "a") {
        friend()
    } else if (answer === "b") {
        SmallTalk()
    } 
}

function SmallTalk() {
    let random = Math.floor(Math.random() * 10)
    if (random % 2 === 0) {
        console.log("You feel upset that you aren't able to trust your friend and end up feeling lonelier after seeing them. You Resistance Quotient decreases by three points")
        patience = patience - 3
    } else {
        console.log("It was nice seeing your friend and you enjoy keeping everything light. Your Resistance Quotient increases by two points")
        patience = patience + 3
    }
}
function friend() {
    random = Math.floor(Math.random() * 6)
    points = Math.floor(random/2) + 1
    if (random % 2 === 0) {
        console.log("Your friend affirms your gender and helps you feel better. Your Resistance Quotient increases by " + points + " points.")
        patience = patience + points
    } else {
        console.log("Your friend says something that ends up making you feel worse. Your Resistance Quotient decreases by " + points + " points.")
        patience = patience - points
    }
}

function hermit() {
    depression++
    if (depression <= 3) { 
        console.log("It's safest to be alone, you feel re-energized and your Resistance Quotient increases one point.")
        patience = patience + 1
    } else {
        console.log("Staying home just makes you feel isolated and depressed. Your resistance quotience decreases by five points.")
        patience = patience - 5
    }
}


while (patience > 0) {
    if (player.awards.length > 10) {
        console.log("Congratulations!You have increased your social support network and are confidently living your best life! You ended up with a Resistance Quotient of " + patience + " points. You are a winner! \n\nThroughout your transition you gathered the following awards: " + player.awards + "\n\nYou successfully overcame transphobia from: " + player.defeated)
    } 
    if (answer === "q" || player.awards.length > 10) {
        return null
    } else if (answer === "i") {
        console.log("Hi, " + player.name + "! Welcome to your inventory. So far you've helped these foes understand the errors of their ways: " + player.defeated + "\nYou have won these items for your troubles: " + player.awards)
        answer = ""
    }
    console.log("RQ: " + patience)
    console.log(player.awards.length)
    walk()
    }
