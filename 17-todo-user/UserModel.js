let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: Number,
});
module.exports = mongoose.model('users', UserSchema);