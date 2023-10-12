const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    buildingId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    name : {
        type: String,
        required: true
    }
})

const Room = mongoose.model('Room', userSchema)

module.exports = Room