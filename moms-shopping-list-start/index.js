var addItem = document.addItem
var ul = document.getElementById("list")


// function to create a new list item 
addItem.addEventListener("submit", (event) => {
    event.preventDefault()
    var newItem = addItem.newItem.value
    addItem.newItem.value = ""
    var li = document.createElement("li")
    var itemText = document.createElement("div")
    var edit = document.createElement("button")
    var del = document.createElement("button")
    li.setAttribute("class", newItem)
    edit.setAttribute("class", "edit")
    del.setAttribute("class", "delete")
    itemText.textContent = newItem
    edit.textContent = "Edit"
    edit.addEventListener("click", (event) => {
        event.preventDefault;
        var editForm = document.createElement("form")
        var editInput = document.createElement("input")
        var saveButton = document.createElement("button")
        saveButton.textContent = "save"
        editForm.setAttribute("name", "editForm")
        editInput.setAttribute("name", "editForm")
        saveButton.addEventListener("submit", (event) => {
            event.preventDefault;
            itemText.textContent = editForm.input.value;
            li.append(itemText);
        })
        edit.parentElement.append(editForm)
        editForm.append(editInput)
        editForm.append(saveButton)
    });
    del.textContent = "X"
    del.addEventListener("click", (event) => {
        event.preventDefault;
        del.parentElement.remove();
    })
    ul.append(li)
    li.append(itemText)
    li.append(edit)
    li.append(del)
})

// function save(event) => {
//     event.preventDefault;
//     itemText.textContent = editForm.value;
//     li.append(itemText);
// }
// var removeItem = document.getElementsByClassName(".delete")
// removeItem.addEventListener("click", () => {
//     removeItem.parentElement.remove();
// })
// function edit() {
//     var editForm = document.createElement("form")
//     var editInput = document.createElement("input")
//     var saveButton = document.createElement("button")
//     saveButton.textContent = "save"
//     var newValue = editInput.value
// }