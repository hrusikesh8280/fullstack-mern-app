
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    password:String


})

const userModel = mongoose.model("user",userSchema)
module.exports={userModel};

// "name":"bapun",
//"email":"bapun@gmail.com",
//"password":"bapun"