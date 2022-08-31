// const axios = require("./lib/axios");

function getData() {
    axios.get("https://api.vschool.io/berloven/todo")
    .then(response => {listData(response.data)})
    .catch(error => {console.log(error)})
}

function listData(data){
    clearList()

    for(let i = 0; i < data.length; i++){
        const item = document.createElement('li')
        item.textContent = data[i].title
        document.getElementById('todo-list').appendChild(item)
    }
}

function clearList() {
    const el = document.getElementById('todo-list')
    while(el.firstChild) {
        el.removeChild(el.firstChild)
    }
}

const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value
    }
    
    todoForm.title.value = ""
    
    axios.post("https://api.vschool.io/berloven/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})

getData()
