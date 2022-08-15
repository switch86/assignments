const multiply = document.multiplication
const add = document.addition
const subtract = document.subtraction
const divide = document.division
let num1 = 0 
let num2 = 0
let num3 = 0
let answer
let output
let pageContent


add.addEventListener("submit", (event) => {
    event.preventDefault();
    num1 = add.num1.valueAsNumber
    num2 = add.num2.valueAsNumber
    add.num1.value = null
    add.num2.value = null
    num3 = num1 + num2
    answer = num1 + " + " + num2 + " = " + num3 
    insertAnswer(answer)
})

subtract.addEventListener("submit", (event) => {
    event.preventDefault();
    num1 = subtract.num1.valueAsNumber
    num2 = subtract.num2.valueAsNumber
    subtract.num1.value = null
    subtract.num2.value = null
    num3 = (num1 - num2)
    answer = num1 + " - " + num2 + " = " + num3
    insertAnswer(answer);
})

multiply.addEventListener("submit", (event) => {
    event.preventDefault();
    num1 = multiply.num1.valueAsNumber
    num2 = multiply.num2.valueAsNumber
    multiply.num1.value = null
    multiply.num2.value = null
    num3 = num1 * num2
    answer = num1 + " x " + num2 + " = " + num3
    insertAnswer(answer);
})
divide.addEventListener("submit", (event) => {
    event.preventDefault();
    num1 = divide.num1.valueAsNumber
    num2 = divide.num2.valueAsNumber
    divide.num1.value = null
    divide.num2.value = null
    num3 = num1 / num2
    answer = num1 + " / " + num2 + " = " + num3
    insertAnswer(answer);
})

function insertAnswer(answer) {
let output = document.getElementById("answer")
let pageContent = document.createElement("h2")
pageContent.textContent = answer
output.appendChild(pageContent)
}