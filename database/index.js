const mongose = require('mongoose')

mongose.connect('mongosedb://localhost/noderest')
mongose.Promise = global.Promise

module.exports = mongoose
