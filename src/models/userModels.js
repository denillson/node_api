const mongoose = require('../database/database')

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    cars : [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref : 'car'
        }
    ]
})

const User = mongoose.model('user', userSchema)
module.exports = User