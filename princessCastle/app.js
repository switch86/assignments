const readline = require("readline-sync");

class Player {
    constructor(name) { 
        this.name = name
        this.totalCoins = 0
        this.status = "Small"
        this.hasStar = false
    }
    gotHit() {
    if (this.status === "Powered Up" && this.hasStar === false) {
        this.status = "Big"
        console.log(`You took a hit\n`)
    } else if (this.status === "Big") {
        this.status = "Small"
        console.log(`You took a hit\n`)
    } else if (this.status === "Small") {
        this.status = "Dead"
        console.log("Perished!!\n")
        clearInterval(intervalID)
        return null;
    } else if (this.status === "Powered Up" && this.hasStar) {
        console.log("\nYou took a hit, but your star protected you!\n")
        this.hasStar = false
    }}
    gotPoweredUp()  {
        if (this.status === "Small") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Powered Up") {
            this.hasStar = true
            console.log("You got a star!")
        }
        console.log(`\nYou got powered up! You are ${this.status}\n`)
    }
    addCoin() {
        this.totalCoins++
        console.log(`\nGot a coin! Now you have ${(user.totalCoins)} coins.\n`)
    }
}


function random() {
    num = Math.floor(Math.random() * 3) 
    if (num === 0 ) {
        user.gotHit()
    } else if (num === 1) {
        user.gotPoweredUp()
    } else if (num === 2) {
        user.addCoin()
    } 
    if (user.status != "Dead") {
        print()
    }  
    
}

function print() {
    console.log(`Name: ${user.name}\nStatus: ${user.status}\nTotal Coins: ${user.totalCoins}\nHas Star: ${user.hasStar}\n`)
}

const input = readline.question("Name your player: ")
const user = new Player(input)

var intervalID = setInterval(random, 2000);




