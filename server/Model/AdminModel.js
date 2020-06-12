const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//creates
let adminSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('admin', adminSchema);