const { Router } = require("express");
const buildingsCtlr = require('../controllers/buildingsCtlr')
const { authenticateUser } = require('../middleware/authMiddleware')

const router = Router()
router.use(authenticateUser)

router.get('/', buildingsCtlr.list)
router.post('/', buildingsCtlr.create)
router.get('/:id', buildingsCtlr.showbyid)
router.put('/:id', buildingsCtlr.update)
router.delete('/:id', buildingsCtlr.destroy)
router.get('/getbyuser/:userId', buildingsCtlr.byUserId)

module.exports.buildingRouter = router