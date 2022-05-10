const { MongoClient } = require('mongodb')
const { MongoMemoryServer } = require('mongodb-memory-server')
let mongod = null
let db = null
var _db

const connectToServer = async (callback) => {
    if (process.env.NODE_ENV === 'test') {
        db = await MongoMemoryServer.create()
    } else {
        db = process.env.ATLAS_URI
    }

    const mongoDBClient = await new MongoClient(db, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoDBClient.connect(function (err, db) {
        if (db) {
            _db = db.db('checkins')
            console.log('Successfully connected to MongoDB.')
        }
        return callback(err)
    })
}

const getDb = () => {
    return _db
}

module.exports = { connectToServer, getDb }
