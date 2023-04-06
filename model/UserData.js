const mongoose = require('mongoose')

const userDataSchema = new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    email: {
        type: String,
        require:true,
        unique:true
    },
    password: {
        type: String,
        require:true
    },
    phone_number: {
        type: Number
    }
})

module.exports = mongoose.model('UserData',userDataSchema)