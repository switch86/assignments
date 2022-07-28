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
    itemText.textContent = newItem
    edit.textContent = "Edit"
    // event listener and function to add edit form 
    edit.addEventListener("click", (event) => {
        event.preventDefault;
        var updateForm = document.createElement("form")
        var editInput = document.createElement("input")
        var saveButton = document.createElement("button")
        saveButton.textContent = "save"
        updateForm.setAttribute("name", "editForm")        
        editInput.setAttribute("name", "updatedInput")
        saveButton.setAttribute("name", "editForm")
        // keep the previously saved item as the default form input (user experience)
        editInput.value = edit.previousElementSibling.textContent
        edit.previousElementSibling.textContent = ""
        // event listener to submit new input and delete the edit form
        updateForm.addEventListener("submit", (event) => {
            event.preventDefault();
            var updatedText = editForm.updatedInput.value
            edit.previousElementSibling.textContent = updatedText
            editForm.remove();
        })
        edit.parentElement.prepend(updateForm)
        updateForm.append(editInput)
        updateForm.append(saveButton)
    });
    // delete function
    del.textContent = "X"
    del.addEventListener("click", () => {
        del.parentElement.remove();
    })
    ul.append(li)
    li.append(itemText)
    li.append(edit)
    li.append(del)
})
