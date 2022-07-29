// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

// ```
var name = "Noah Berlove"
function capilizeAndLowercase(string) {
    var capital = string.toUpperCase()
    var lower = string.toLowerCase()
    console.log(capital)
    console.log(lower)
}
capilizeAndLowercase("Noah Berlove")
// => "HELLOhello"

// ```

// ---

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

// > Hint: You'll need to use Math.floor().
// > 

// ```
// findMiddleIndex("Hello") // => 2
// findMiddleIndex("Hello World") // => 5

// ```
function findMiddleIndex(string) {
    var middleIndex = Math.floor(string.length / 2);
    console.log(middleIndex);
}
findMiddleIndex("Noah Berlove")

// ---

// Write a function that uses `[slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)` and the other functions you've written to return the first half of the given string.

// ```
// returnFirstHalf("Hello") // => "He"
// returnFirstHalf("Hello World") // => "Hello"

// ```
function returnFirstHalf(string) {
    middleIndex = Math.ceil(string.length/2)
    var firstHalf = string.slice(0, middleIndex)
    console.log(firstHalf)
}
returnFirstHalf("Magical Universe")
// ---

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

// > Hint: If your string length is odd, use Math.floor() to round down.
// > 

// ```
// capilizeAndLowercase("Hello") // => "HEllo"
// capilizeAndLowercase("Hello World") // => "HELLO world"

// ```
function capAndLower(string) {
    middleIndex = Math.floor(string.length / 2);
    var firstHalf = string.slice(0, middleIndex);
    var secondHalf = string.slice(middleIndex);
    firstHalf = firstHalf.toUpperCase();
    secondHalf = secondHalf.toLowerCase();
    console.log(firstHalf + secondHalf);
}
capAndLower("Noah Kenney Berlove");
// ---

// ### **Optional Code Challenge**

// > (This one is a step up in difficulty and utilizes the .split() string method and .join() array method):
// > 

// Write a function that takes a string as a parameter and capitalizes any character that follows a space.

// ```
// capitalize("hey friends! practice practice practice!") // -> "Hey Friends! Practice Practice Practice!"
// ```
function capitalStart(string) {
    var letterArr = string.split("")
    var newLetterArr = []
    console.log(letterArr)
    letterArr[0] = letterArr[0].toUpperCase()
    for (var i =0; i < letterArr.length; i++) {
        if (letterArr[i] == " ") {
            letterArr[(i + 1)] = letterArr[(i + 1)].toUpperCase()
            
        }
        newLetterArr.push(letterArr[i])   
    } 
    console.log(newLetterArr.join(""))
}
capitalStart("hey friends! practice practice practice")