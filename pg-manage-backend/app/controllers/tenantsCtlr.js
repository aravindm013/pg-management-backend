const Tenant = require('../models/tenant')
const tenantsCtlr = {}

tenantsCtlr.list = (req, res) => {
    Tenant.find()
        .then((tenant) => {
            res.json(tenant)
        })
        .catch((err)=>{
            res.json(err)
        })
}

tenantsCtlr.create = (req, res) => {
    const body = req.body
    const tenant = new Tenant(body)
    tenant.save()
        .then((tenant)=>{
            res.json(tenant)
        })
        .catch((err)=>{
            res.json(err)
        })
}

tenantsCtlr.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    Tenant.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then((tenant) => {
            res.json(tenant)
        })
        .catch((err) => {
            res.json(err)
        })
}

tenantsCtlr.destroy = (req, res) => {
    const id = req.params.id
    Tenant.findByIdAndDelete(id)
        .then((tenant) => {
            res.json(tenant)
        })
        .catch((err) => {
            res.json(err)
        })
}

tenantsCtlr.showbyId = (req, res) => {
    const id = req.params.id
    Tenant.findById(id)
        .then((tenant)=>{
            res.json(tenant)
        })
        .catch((err)=>{
            res.json(err)
        })
}

tenantsCtlr.byRoomId = (req, res) => {
    const Id = req.params.roomId
    Tenant.find({roomId: Id})
        .then((tenant)=>{
            res.json(tenant)
        })
        .catch((err)=>{
            res.json(err)
        })
}

tenantsCtlr.byBuildingId = (req, res) => {
    const buildingId = req.params.buildingId
    Tenant.find({buildingId: buildingId})
        .then((tenant)=>{
            res.json(tenant)
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = tenantsCtlr