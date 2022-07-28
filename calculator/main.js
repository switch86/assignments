const readline = require("readline-sync");

var num1 = Number(readline.question("Please enter your first number: "));
var num2 = Number(readline.question("Please enter your second number: "));
const operationInput = readline.question("Please enter the operation (add, sub, mul, div) to perform: ");

if (operationInput == "add") {
    console.log(num1 + num2);
} if (operationInput == "sub") {
    console.log(num1 - num2);
} if (operationInput == "mul")  {
    console.log(num1 * num2);
} if (operationInput == "div")  {
    console.log(num1 / num2);
} else {
    console.log("error: please enter a valid operation");
}