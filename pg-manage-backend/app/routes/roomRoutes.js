const { Router } = require("express");
const roomsCtlr = require('../controllers/roomsCtlr')

const router = Router()

router.get('/', roomsCtlr.list)
router.post('/', roomsCtlr.create)
router.get('/:id', roomsCtlr.showbyId)
router.put('/:id', roomsCtlr.update)
router.delete('/:id', roomsCtlr.destroy)
router.get('/getbybuilding/:buildingId', roomsCtlr.byBuildingId)

module.exports.roomRouter = router