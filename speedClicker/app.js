let clickTotal = document.getElementById("clicks")
let time = document.getElementById("time")

let timer = 20
let clicks = 0 
clicks = localStorage.getItem("clicks")
clickTotal.textContent = `Clicks: ${localStorage.getItem("clicks")}`

function clicking() {
    clicks++
    localStorage.setItem("clicks", clicks)
    clickTotal.textContent = `Clicks: ${localStorage.getItem("clicks")}`
}
document.addEventListener("click", clicking)

function stopClicking() {
    document.removeEventListener("click", clicking)
    clearInterval(timerCount)
}

function clock() {
    timer--
    time.textContent = `Time: ${timer} seconds`
}

let timerCount = setInterval(clock, 1000)
 

setTimeout(stopClicking, 20000)
