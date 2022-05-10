const express = require('express')

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router()

// This will help us connect to the database
const dbConnector = require('../db/mongoConnectionManager')

// This section will help you get a list of all the records.
recordRoutes.route('/record').get(async (req, res) => {
    let dbo = await dbConnector.getDb('checkins')
    dbo.collection('checkins')
        .find({})
        .toArray((err, result) => {
            if (err) throw err
            res.json(result)
        })
})

// This section will help you create a new record.
recordRoutes.route('/record/add').post((req, res) => {
    const db_connect = dbConnector.getDb()
    const ip = req.header('x-forwarded-for') || req.socket.remoteAddress
    const newObject = {
        timestamp: Date(),
        ip: ip
    }
    db_connect.collection('checkins').insertOne(newObject, (err, mongoRes) => {
        if (err) throw err
        res.json(mongoRes)
    })
})

module.exports = recordRoutes
