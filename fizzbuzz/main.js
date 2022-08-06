let fizz = 0; 
let buzz = 0;
let fizzbuzz = 0;
let i = 0

while (i <= 100) {
    let answer = i;
    if (i % 3 === 0) {
        answer = "fizz";
        fizz++;
    }
    if (i % 5 === 0) {
        answer = "buzz";
        buzz++;
    }
    if (i % 5 === 0 & i % 3 === 0) {
        answer = "fizzbuzz";
        fizzbuzz++;
    }
    console.log(answer)
    i++;
}

console.log("Fizz: " + fizz)
console.log("Buzz: " + buzz)
console.log("FizzBuzz: " + fizzbuzz)