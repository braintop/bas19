let mongoose = require('mongoose'); var Schema = mongoose.Schema;
let UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'please provide email'],
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
        minlength: 6,
    },
    firstname: String,
    lastname: String,
});

module.exports = mongoose.model('users', UserSchema);