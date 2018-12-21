const mongoose = require('mongoose')

mongoose.connect('mongodb://admin:admin9090@ds255787.mlab.com:55787/db_nodeapi')

module.exports = mongoose