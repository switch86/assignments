// var numbersArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var fruitArray = ["banana", "orange", "apple", "kiwi"];
// var newNumbers = []

// // for loop to console log numbers at all indices
// for (var i = 0; i < numbersArray.length; i++) {
//     console.log(numbersArray[i]);
// }
// //for loop to console log numbers at all indices in reverse
// for (var i = numbersArray.length-1; i >0; i--) {
//     console.log(numbersArray[i])
// }

// //for loot to console log fruit at all indices
// for (var i = 0; i < fruitArray.length; i++) {
//     console.log(fruitArray[i]);
// }
// // for loop to each value in numbers to newNumbers and then console log the new array
// for (var i = 0; i < numbersArray.length; i++) {
//     newNumbers[i] = numbersArray[i];
// }
// console.log(newNumbers)

// // for loop to console log even numbers between 0-100
// for (var i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }
// // for loop that will push fruit at every other index
// var halfFruit = []
// for (var i =0, j=0; i < fruitArray.length; i++) {
//     if (i % 2 === 0) {
//         halfFruit[j] = fruitArray[i]
//         j++;
//     }
// }
// console.log(halfFruit)

// var namesArray = []
// var occupationsArray = []
// const peopleArray = [
//     {
//       name: "Harrison Ford",
//       occupation: "Actor"
//     },
//     {
//       name: "Justin Bieber",
//       occupation: "Singer"
//     },
//     {
//       name: "Vladimir Putin",
//       occupation: "Politician"
//     },
//     {
//       name: "Oprah",
//       occupation: "Entertainer"
//     }
//   ]
//   for (var i = 0; i < peopleArray.length; i++) {
//     console.log(peopleArray[i].name);
//     namesArray[i] = peopleArray[i].name;
//     occupationsArray[i] = peopleArray[i].occupation;
//   }
//   console.log(namesArray);
//   console.log(occupationsArray);

// var halfNamesArray = [];
// var halfOccupationsArray = [];
// for (var i = 0, j = 0; i < peopleArray.length; i++) {
//     if (i % 2 === 0) {
//         halfNamesArray[j] = peopleArray[i].name;
//         halfOccupationsArray[j] = peopleArray[i].occupation;
//         j++;
//     }
// }
// console.log(halfNamesArray);
// console.log(halfOccupationsArray);

// create an array that mimics a grid like the collowing using nested for loops
var arrArray1 = [[], [], []]

for (var i = 0; i < arrArray1.length; i++) {
    for (var j = 0; j < 3; j++) {
        arrArray1[i][j] = 0;
    }
}
console.log(arrArray1)

// #2
var arrArray2 = [[], [], []]

for (var i = 0; i < arrArray2.length; i++) {
    for (var j = 0; j < 3; j++) {
        arrArray2[i][j] = i;
    }
}
console.log(arrArray2)

// #3
var arrArray3 = [[], [], []]

for (var i = 0; i < arrArray3.length; i++) {
    for (var j = 0; j < 3; j++) {
        arrArray3[i][j] = j;
    }
}
console.log(arrArray3);

for (var i = 0; i < arrArray3.length; i++) {
    for (var j = 0; j < 3; j++) {
        arrArray3[i][j] = "x";
    }
}
console.log(arrArray3);