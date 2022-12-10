const mongoose = require("mongoose")
const Schema = mongoose.Schema

const personSchema = new Schema ({
    name: {
        type: String,
        required: true, 
    },
    type: String, 
    targetGroups: Array,
    isLiving: Boolean,
    HP: Number, 
    Strength: Number
})

module.exports = mongoose.model("Person", personSchema)