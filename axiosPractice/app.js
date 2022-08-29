const axios = require("axios");

function getData() {
    axios.get("https://api.vschool.io/berloven/todo").then(response => {
    console.log(response.data);
    }).catch(error => {
        console.log(error)
    });
}

function listData(data){
    for(let i = 0; i < data.length; i++){
        const item = document.createElement('li')
        item.textContent = data[i].title
        document.getElementById('todo-list').appendChild(item)
    }
}

const todoForm = document["todo-form"]

todoForm.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newTodo = {
        title: todoForm.title.value
    }
    
    todoForm.title.value = ""
    
    axios.post("https://api.vschool.io/natej/todo", newTodo)
        .then(res => getData())
        .catch(err => console.log(err))
})
getData()
