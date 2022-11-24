const {v4: uuidv4} = require('uuid')
const express = require("express")
const app = express()

app.use(express.json())



const transphobes = [
    {
        firstName: "JK",
        lastName: "Rowling",
        isLiving: true,
        amount: 2000,
        type: "TERF",
        _id: uuidv4()
    },
    {
        firstName: "Donald",
        lastName: "Trump",
        isLiving: true,
        amount: 5000,
        type: "Sexist",
        _id: uuidv4()
    },
    {
        firstName: "Bette",
        lastName: "Midler",
        isLiving: true,
        amount: 2000,
        type: "TERF",
        _id: uuidv4()
    },
    {
        firstName: "Caitlyn",
        lastName: "Jenner",
        isLiving: true,
        amount: 200,
        type: "Internalized",
        _id: uuidv4()
    }
]
//post one
app.post("/", (req, res) => {
    let newTransphobe = req.body
    newTransphobe._id =  uuidv4()
    transphobes.push(newTransphobe)
    res.send(`successfully added ${newTransphobe.firstName} ${newTransphobe.lastName}`)
})  

//get all
app.get("/", (req, res) => {
    res.send(transphobes)
})
// get one
app.get("/:transphobeId", (req, res) => {
    const transphobeId = req.params.transphobeId
    const foundTransphobe = transphobes.find(item => item._id = transphobeId)
    res.send(foundTransphobe)
})

//get by type
app.get("/search/type/", (req, res) => {
    const type = req.query.type
    const arr = transphobes.filter(item => item.type === type)
    res.send(arr)
}) 

app.listen(9005, () => {
    console.log("The server is running on port 9005")
})