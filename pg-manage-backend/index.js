const express = require('express')
const cors = require('cors')
const app = express()
const configureDB = require('./config/database')
const router = require('./config/routes')
const port = 3070

configureDB()
app.use(cors())
app.use(express.json())
app.use(router)

app.listen(port, () => {
    console.log('server running on port', port)
})