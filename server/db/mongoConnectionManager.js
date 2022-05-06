const { MongoClient } = require('mongodb')
const Db = process.env.ATLAS_URI
const mongoDBClient = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var _db

module.exports = {
    connectToServer: function (callback) {
        mongoDBClient.connect(function (err, db) {
            if (db) {
                _db = db.db('checkins')
                console.log('Successfully connected to MongoDB.')
            }
            return callback(err)
        })
    },

    getDb: function () {
        return _db
    }
}
