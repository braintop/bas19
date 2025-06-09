let mongoose = require("mongoose");
let Schema = mongoose.Schema;
let TodoSchema = new Schema({
    mission: String,
    description: String,
    isDone: Number// 0 - not done, 1 done , 2 half done 
    
});
module.exports = mongoose.model('todos', TodoSchema);