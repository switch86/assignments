const form = document.mealForm
let passenger = {
    firstName: "",
    lastName: "",
    sex: "",
    destination: "",
    meal: [],
}
form.addEventListener("submit", (event) => {
    event.preventDefault()
    passenger.firstName = document.mealForm.firstName.value
    passenger.lastName = document.mealForm.lastName.value
    passenger.sex = form.sex.value;
    passenger.destination = form.destination.value;
    for (let i = 0; i < form.diet.length; i++) {
        if (form.diet[i].checked) {
            passenger.meal.push(form.diet[i].value)
        }
    }
    alert(`First Name: ${passenger.firstName}\nLast Name: ${passenger.lastName}\nAge: ${passenger.age}\nSex: ${passenger.sex}\nDestination: ${passenger.destination}\nDietary Restrictions: ${passenger.meal}`)
})

