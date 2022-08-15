const form = document.form
const hitList = document.getElementById("hitList")
const goombaTotal = document.getElementById("goombaTotal")
const bobombTotal = document.getElementById("bobombTotal")
const cheepTotal = document.getElementById("cheepTotal")
const killsTotal = document.getElementById("killsTotal")
const coinsTotal = document.getElementById("coinsTotal")
const cumulativeTotal = document.getElementById("cumulativeTotal")

let goomba = 0
let bobomb = 0
let cheep = 0
let totalGoomba = 0
let totalBobomb = 0
let totalCheep = 0
let totalCoins = 0
let kills = 0

form.addEventListener("submit", (event) => {
    event.preventDefault();
    goomba = form.goomba.valueAsNumber
    bobomb = form.bobomb.valueAsNumber
    cheep = form.cheep.valueAsNumber
    form.goomba.value = null 
    form.bobomb.value = null
    form.cheep.value = null
    totalGoomba = totalGoomba + goomba
    totalBobomb = totalBobomb + bobomb
    totalCheep = totalCheep + cheep
    kills = kills + goomba + bobomb + cheep
    Coins()
})

function Coins() {
    let points = [] 
    if (goomba > 0) {
        let newGoombaCoins = goomba * 5
        totalCoins = totalCoins + newGoombaCoins
        let span = document.createElement("span")
        span.textContent = `${totalCoins} coins`
        cumulativeTotal.appendChild(span)
        points.push(`${goomba} Goomba:      ${newGoombaCoins} coins`)
    } if (bobomb > 0) {
        let newBobombCoins = bobomb * 7
        totalCoins = totalCoins + newBobombCoins
        let span = document.createElement("span")
        span.textContent = `${totalCoins} coins`
        cumulativeTotal.appendChild(span)
        points.push(`${bobomb} Bob-omb:     ${newBobombCoins} coins`)
    } if (cheep > 0) {
        let newCheepCoins = cheep * 11
        totalCoins = totalCoins + newCheepCoins
        let span = document.createElement("span")
        span.textContent = `${totalCoins} coins`
        cumulativeTotal.appendChild(span)
        points.push(`${cheep} Cheep-Cheep: ${newCheepCoins} coins`)
    }
    console.log(points)
    for (let i = 0; i < points.length; i++) {
        let span = document.createElement("span")
        span.textContent = points[i]
        hitList.appendChild(span)

    }
    coinsTotal.textContent =  `Total Coins:        ${totalCoins}`
    killsTotal.textContent =  `Total Kills:        ${kills}`
    goombaTotal.textContent = `Total Goomba:       ${totalGoomba}`
    bobombTotal.textContent = `Total Bob-omb:      ${totalBobomb}`
    cheepTotal.textContent =  `Total Cheep-Cheep:  ${totalCheep}`
}