const mongoose = require('mongoose')
const { schemeOptions } = require('./modelOptions')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    }
}, schemeOptions)

module.exports = mongoose.model('User',userSchema)