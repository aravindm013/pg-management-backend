const Building = require('../models/building')
const buildingsCtlr = {}

buildingsCtlr.list = (req, res) => {
    Building.find()
        .then((building) => {
            res.json(building)
        })
        .catch((err)=>{
            res.json(err)
        })
}

buildingsCtlr.create = (req, res) => {
    const body = req.body
    const building = new Building(body)
    building.save()
        .then((building)=>{
            res.json(building)
        })
        .catch((err)=>{
            res.json(err)
        })
}

buildingsCtlr.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Building.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then((building) => {
            res.json(building)
        })
        .catch((err) => {
            res.json(err)
        })
}

buildingsCtlr.destroy = (req, res) => {
    const id = req.params.id
    Building.findByIdAndDelete(id)
        .then((building) => {
            res.json(building)
        })
        .catch((err) => {
            res.json(err)
        })
}

buildingsCtlr.showbyid = (req, res) => {
    const id = req.params.id
    Building.findById(id)
        .then((building)=>{
            res.json(building)
        })
        .catch((err)=>{
            res.json(err)
        })
}

buildingsCtlr.byUserId = (req, res) => {
    const userId = req.params.userId
    Building.find({userId: userId})
        .then((building)=>{
            res.json(building)
        })
        .catch((err)=>{
            res.json(err)
        })
}
module.exports = buildingsCtlr