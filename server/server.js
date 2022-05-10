const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config({ path: './config.env' })
const port = process.env.PORT || 5001
app.use(cors())
app.use(express.json())
app.use(require('./routes/record'))
// get driver connection
const mcm = require('./db/mongoConnectionManager')

const server = app.listen(port, async () => {
    // perform a database connection when server starts
    await mcm.connectToServer((err) => {
        if (err) console.error(err)
    })
    console.log(`Server is running on port: ${port}`)
})
module.exports = server