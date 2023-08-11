const mongoose = require("mongoose");



const userSchema = mongoose.Schema({
     name : String , 
     age : Number , 
     value : Number
});

const User = mongoose.model("employees",userSchema);
module.exports = User