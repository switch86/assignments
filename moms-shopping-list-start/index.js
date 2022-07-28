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
    ul.append(li)
    li.append(itemText)
    li.append(edit)
    li.append(del)
    itemText.textContent = newItem
    edit.textContent = "Edit"
    // event listener and function to add edit form 
    edit.addEventListener("click", (event) => {
        event.preventDefault;
        var updateForm = document.createElement("form")
        var editInput = document.createElement("input")
        var saveButton = document.createElement("button")        
        edit.parentElement.prepend(updateForm)
        updateForm.append(editInput)
        updateForm.append(saveButton)
        saveButton.textContent = "save"
        // keep the previously saved item as the default form input (user experience)
        editInput.value = newItem
        itemText.textContent = ""
        // event listener to submit new input and delete the edit form
        updateForm.addEventListener("submit", (event) => {
            event.preventDefault();
            var updatedText = editInput.value
            console.log(updatedText)
            itemText.textContent = updatedText
            updateForm.remove();
        })
    });
    // delete function
    del.textContent = "X"
    del.addEventListener("click", () => {
        del.parentElement.remove();
    })
})
