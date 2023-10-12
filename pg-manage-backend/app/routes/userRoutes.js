const { Router } = require("express")
const usersCtlr = require("../controllers/usersCtlr")

const router = Router()

router.get('/', usersCtlr.list)
router.post('/', usersCtlr.create)
router.get('/:id', usersCtlr.show)
router.put('/:id', usersCtlr.update)
router.delete('/:id', usersCtlr.destroy)
router.post('/login', usersCtlr.check)


module.exports.userRouter = router