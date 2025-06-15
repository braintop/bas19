let mongoose = require('mongoose'); var Schema = mongoose.Schema;
let UserSchema = new Schema({
    username: {
        type: String,
        unique: [true, 'please provide email'],
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true, 'please provide password'],
        minlength: 3,
    },
});

module.exports = mongoose.model('users', UserSchema);