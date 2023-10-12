const Room = require('../models/room')
const roomsCtlr = {}

roomsCtlr.list = (req, res) => {
    Room.find()
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })
}

roomsCtlr.create = (req, res) => {
    const body = req.body
    const room = new Room(body)
    room.save()
        .then((rooms) => {
            res.json(rooms)
        })
        .catch((err) => {
            res.json(err)
        })
}

roomsCtlr.showbyId = (req, res) => {
    const id = req.params.id
    Room.findById(id)
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })
}

roomsCtlr.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Room.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })
}

roomsCtlr.destroy = (req, res) => {
    const id = req.params.id
    Room.findByIdAndDelete(id)
        .then((room) => {
            res.json(room)
        })
        .catch((err) => {
            res.json(err)
        })
}

roomsCtlr.byBuildingId = (req, res) => {
    const buildingId = req.params.buildingId
    Room.find({ buildingId: buildingId })
        .then((room)=>{
            res.json(room)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = roomsCtlr