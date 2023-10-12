const { Router } = require("express");
const tenantsCtlr = require('../controllers/tenantsCtlr')

const router = Router()

router.get('/', tenantsCtlr.list)
router.post('/', tenantsCtlr.create)
router.get('/:id', tenantsCtlr.showbyId)
router.put('/:id', tenantsCtlr.update)
router.delete('/:id', tenantsCtlr.destroy)
router.get('/getbyRoom/:roomId', tenantsCtlr.byRoomId)
router.get('/getbybuilding/:buildingId', tenantsCtlr.byBuildingId)

module.exports.tenantRouter = router