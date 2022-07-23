var button = document.getElementById("log")
button.addEventListener("click", getInput); 

function getInput(input) {
    var input = document.getElementById("text-value");
    console.log(input.value);
    var insert = document.createElement("p")
    insert.textContent = input.value
    document.body.append(insert)
}