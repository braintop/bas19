let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let PersonSchema = new Schema({
    firstname: String,
    lastname: String,
    city: String,
    salary: Number,
    country: String
});
module.exports = mongoose.model('persons', PersonSchema);