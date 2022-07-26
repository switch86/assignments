var addItem = document.addItem
var ul = document.getElementById("list")


// function to create a new list item 
addItem.addEventListener("submit", (event) => {
    event.preventDefault()
    var newItem = addItem.newItem.value
    addItem.newItem.value = ""
    var li = document.createElement("li")
    var div = document.createElement("div")
    var edit = document.createElement("button")
    var del = document.createElement("button")
    li.setAttribute("class", newItem)
    edit.setAttribute("class", "edit")
    del.setAttribute("class", "delete")
    div.textContent = newItem
    edit.textContent = "Edit"
    del.textContent = "X"
    ul.append(li)
    li.append(div)
    li.append(edit)
    li.append(del)
})

var removeItem = document.getElementsByClassName(".delete")
removeItem.addEventListener("click", () => {
    console.log("delete initiated")
})