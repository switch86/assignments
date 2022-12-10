const express = require("express")
const peopleRouter = express.Router()
const mongoose = require("mongoose")
const Person = require("../models/person")

mongoose.connect('mongodb://localhost:27017/peopledb', () => console.log('connected to database'))

//post one
peopleRouter.post('/', (req,res,next) => {
    const newPerson = new Person(req.body)
    newPerson.save((err, savedPerson) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(savedPerson)
    })
})

//get all
peopleRouter.get('/', (req, res, next) => {
    Person.find((err, people) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(people)
    })
})
//get one
peopleRouter.get("/:personId", (req, res) => {
    Person.find({_id: req.params._id}, (err, people) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(people)
    })
})

//delete one
peopleRouter.delete("/:personId", (req, res, next) => {
    Person.findOneAndDelete({_id: req.params.personId}, (err, deletedPerson) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`successfully deleted`)
    })
})

peopleRouter.put("/:personId", (req, res, next) => {
    Person.findOneAndUpdate(
        { _id: req.params.personId }, //find the one to update
        req.body, // incoming new data
        {new: true}, // request updated version
        (err, updated) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(updated)
        })
    })

module.exports = peopleRouter