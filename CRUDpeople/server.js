express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/peopledb', () => console.log('connected to database'))

app.use("/people", require("./routes/peopleRouter.js"))


// app.post('/people', (req,res,next) => {
//     const newPerson = new personalbar(req.body)
//     newPerson.save((err, savedPerson) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(savedPerson)
//     })
// })

// app.get('/people', (req, res, next) => {
//     Person.find((err, people) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(people)
//     })
// })

// app.delete("/people/:personId", (req, res, next) => {
//     Person.findOneAndDelete({_id: req.params.personId}, (err, deletedPerson) => {
//         if (err) {
//             res.status(500)
//             return next(err)
//         }
//         return res.status(200).send(`successfully deleted`)
//     })
// })

app.use((err, req, res, next) => {
    console.log(err)
    return res.status(err.status).send({errMsg: err.message})
})

app.listen(3456, () => {
    console.log("Server is running on port 3456")
})