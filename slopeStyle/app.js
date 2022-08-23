// Use the rest function to help this function return an array of animals, no matter how many animals are passed to it:

// function collectAnimals(...animals) { 
//     return animals;
// }

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

// ["dog", "cat", "mouse", "jackolope", "platypus"]


// Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:
// const food = {}

// let combineFruit = (fruit, sweets, vegetables) => {
//     food.fruit = fruit;
//     food.sweets = sweets;
//     food.vegetables = vegetables;
//     return food
// }

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"]))
// //=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }

// Use destructuring to use the property names as variables. Destructure the object in the parameter:

// function parseSentence({location, duration}){
//     return `We're going to have a good time in ${location} for ${duration}`
//   }
  
//   console.log(parseSentence({
//     location: "Burly Idaho",
//     duration: "2 weeks"
//   }));

// Use array destructuring to make this code ES6:

// function returnFirst(items){
//     const [firstItem] = items; 
//     return firstItem
// }

// console.log(returnFirst(["one","two","three","four"]))


// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     let [firstFav, secondFav, thirdFav] = favoriteActivities
//     return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
// }

// console.log(returnFavorites(favoriteActivities))


// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

// function combineAnimals(arr1, arr2, arr3) { 
//     const arrs = [...arr1, ...arr2, ...arr3]
//     return arrs
// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));

// ["dog", "cat", "mouse", "jackolope", "platypus"]

// Try to make the following function more ES6y:

function product([...vars]) { return vars.reduce((final, variable) => final * variable)}

  console.log(product([2,4,6,8,10]))

//   Make the following function more ES6y. Use at least both the rest and spread operators:

// let unshift = (array, a, b, c, d, e) => [...array, a, b, c, d, e];

// console.log(unshift([1,2,3], 4, 5, 6, 7, 8))

// Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

function populatePeople([...names]){
    return names.map((name) => {
        let [firstName, lastName] = name.split(" ")
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]