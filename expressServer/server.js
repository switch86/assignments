const express = require("express")
const app = express()


app.get("/", (req, res) => {
    res.send("Congratulations, this is pure magic!")
})

app.listen(9005, () => {
    console.log("The server is running on port 9005")
})