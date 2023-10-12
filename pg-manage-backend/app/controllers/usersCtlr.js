const jwt = require('jsonwebtoken')
const secretKey = 'jvlJtF6Iir'
const User = require('../models/userLogin')
const usersCtlr = {}

usersCtlr.list = (req, res) => {
    User.find()
        .then((users) => {
            res.json(users)
        })
        .catch((err) => {
            res.json(err)
        })
}

usersCtlr.create = (req, res) => {
    const body = req.body
    const user = new User(body)
    user.save()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err)
        })
}

usersCtlr.show = (req, res) => {
    const id = req.params.id
    User.findById(id)
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err)
        })
}

usersCtlr.update = (req, res) => {
    const id = req.params.id
    const body = req.body
    User.findByIdAndUpdate(id, body, {new: true, runValidators: true})
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err)
        })
}

usersCtlr.destroy = (req, res) => {
    const id = req.params.id
    User.findByIdAndDelete(id)
        .then((user)=>{
            res.json(user)
        })
        .catch((err)=>{
            res.json(err)
        })
}

// usersCtlr.check = (req, res) => {
//     const name = req.body.name
//     const password = req.body.password
//     User.findOne({name: name, password: password})
//         .then((user)=>{
//             // console.log('user', user)
//             if(!user){
//                 return res.status(401).json({message: "user not found"})
            
//             }else
//             if (user.name === req.body.name && user.password === req.body.password) {
//                 return res.json({exists: true, user: user})
//                 // make a jwt token and return it to user
//             }
//         })
//         .catch((err)=>{
//             res.json(err)
//         })
// }

usersCtlr.check = (req, res) => {
    const name = req.body.name
    const password = req.body.password
    User.findOne({name: name, password: password})
        .then((user)=>{
            if(!user){
                return res.status(401).json({message: "user not found"})
            } else if (user.name === req.body.name && user.password === req.body.password) {
                const payload = { id: user._id }
                const token = jwt.sign(payload, secretKey)
                // console.log(token)
                res.json({ token: token })
            }
        })
        .catch((err)=>{
            res.json(err)
        })
}

module.exports = usersCtlr