const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tenantSchema = new Schema({
    name : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    aadharNumber : {
        type: Number,
        required: true
    },
    mobile: {
        type: Number,
        required: true
    },
    roomId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },    
    buildingId : {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

const Tenant = mongoose.model('Tenant', tenantSchema)

module.exports = Tenant