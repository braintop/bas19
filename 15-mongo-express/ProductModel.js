var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProductSchema = new Schema({
 title:String,
 Description:String,
 price:Number
 created: Date
});
module.exports = mongoose.model('product', ProductSchema);