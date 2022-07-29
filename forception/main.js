
var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"


function forception(people, alphabet){
    // add : to each name
    for (var i = 0; i < people.length; i++) {
        people[i] = people[i] + ":"
    }
    // split alphabet into a new array containing all letters
    alphabetArr = alphabet.split("")
    console.log(alphabetArr)

    // loop both arrays together into newArray
    var newArr = []
    for (var i = 0; i < people.length; i++) {
        newArr.push(people[i]);
        for (var j = 0; j < alphabetArr.length; j++) {
            newArr.push(alphabetArr[j]);
        }
    }
    return newArr
}
console.log(forception(people, alphabet))



// Output:
// ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
