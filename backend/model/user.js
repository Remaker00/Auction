const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
    },
    premium: {
        type: Boolean,
        default: false,
    },
});


module.exports = mongoose.model('User', userSchema);
