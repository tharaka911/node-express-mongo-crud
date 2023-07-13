const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema({

    name: {
        type: String,
        required: false,
        default: "Test1"
    },
    tech: {
        type: String,
        required: false,
        default:  "Test"
    },
    sub: {
        type: Boolean,
        required: true,
        default: true
    }

})

module.exports = mongoose.model('Alien',alienSchema)