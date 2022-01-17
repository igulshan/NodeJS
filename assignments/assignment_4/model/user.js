const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userschema = new Schema({
    name: String,
    email: {type:String,unique:true},
    isPromoted:Boolean
})

const userTab = mongoose.model("UserTab",userschema);

module.exports = userTab;