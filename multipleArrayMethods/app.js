var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


function sortedOfAge(arr){
    arr = arr.reduce((final, person) => {
        if (person.age > 17) {
            final.push(`<li>${person.firstName} ${person.lastName} is ${person.age}</li>`)
        }
        return final
    }, [])
    arr.sort((a, z) => a[4] - z[4])
    return arr
 }

//  console.log(sortedOfAge(peopleArray));


// function to add a person using an array of [first name, last name, age]
 function addPerson([fName, lName, age]) {
    let person = {
        firstName: "",
        lastName: "",
        age: 0
    }
    person.firstName = fName
    person.lastName = lName
    person.age = age
    peopleArray.push(person)
 } 
// addPerson(["Noah", "Angel", 34]);

// filter for last names starting with Z and A
function za(arr) {
    arr = arr.filter(person => {
        if (person.lastName[0] == 'Z' || person.lastName[0] == 'A') {
            return person;
        }})
        return arr
}
// let zaArray = za(peopleArray)
// console.log(zaArray) 

// reverse the array 
function reverse(arr) {
    arr2 = arr.reverse();
    return arr2
}
// let reversed = reverse(peopleArray)
// console.log(reversed)

// remove the second person in the array 
function removePerson(arr) {
    arr.splice(1, 1)
    return arr
}
// removePerson(peopleArray)
// console.log(peopleArray)
