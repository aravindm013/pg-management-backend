const express = require('express')
const router = express.Router()
const { userRouter } = require('../app/routes/userRoutes')
const { buildingRouter } = require('../app/routes/buildingRoutes')
const { roomRouter } = require('../app/routes/roomRoutes')
const { tenantRouter } = require('../app/routes/tenantRoutes')

router.use("/api/users", userRouter)
router.use("/api/buildings", buildingRouter)
router.use("/api/rooms", roomRouter)
router.use("/api/tenants", tenantRouter)

module.exports = router

