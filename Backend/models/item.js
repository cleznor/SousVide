const mongoose = require("mongoose");

let Schema = mongoose.Schema({
	user:{type:String,index:true},
	type:String,
	count:Number,
	price:Number,
	temperature:Number
})

module.exports = mongoose.model("Item",Schema);