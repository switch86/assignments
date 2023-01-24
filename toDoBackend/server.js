const {v4: uuidv4} = require('uuid')
const morgan = require('morgan')
const express = require("express")
const app = express()

app.use(express.json())
app.use(morgan('dev'))

const todoArray = [
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "The name",
        description: "The description of the todo",
        imageUrl: "http://www.myimage....",
        completed: false,
        _id: uuidv4()
    },

]

// add new todo 
app.post("/", (req, res) => {
    let newTodo = req.body
    newTodo._id = uuidv4()
    todoArray.push(newTodo)
    res.send(`successfully added ${newTodo.name} to your to do list.`)
})

// send entire todo array when recieving a get request to /
app.get("/todo", (req, res) => {
    console.log(req.params)
    res.send(todoArray)
})

// send single todo item on get request to /todo/todoId
app.get("/todo/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todoArray.find(item => item._id === todoId)
    res.send(foundTodo)
})
//delete todo item with given Id
app.delete("/todo/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todoArray.findIndex(item => item._id === todoId)
    todoArray.splice(todoIndex, 1)
    res.send("deleted todo item")
})
// update todo item with given Id
app.put("/todo/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todoArray.findIndex(item => item._id === todoId)
    const updatedTodo = Object.assign(todoArray[todoIndex], req.body)
    res.send(`updated ${updatedTodo.name}`)
})

// run the server on port 7000
app.listen(7000, () => {
    console.log("the server is running on port 7000")
})