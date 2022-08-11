const form = document.mealForm
let passenger = {
    firstName: "",
    lastName: "",
    sex: "",
    destination: "",
    meal: "",
}
form.addEventListener("submit", (event) => {
    event.preventDefault()
    passenger.firstName = form.firstName.value
    passenger.lastName = form.lastname.value
    passenger.sex = form.sex.value;
    passenger.destination = form.destination.value;
    passenger.meal = form.diet.value;
    console.log(passenger)
})

