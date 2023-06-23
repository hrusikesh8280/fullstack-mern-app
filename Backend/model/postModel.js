const mongoose = require('mongoose')


const postSchema = mongoose.Schema({
    title: String,
    content:String,
    subject:String,
    date:{
        type:Date,
        default: Date.now()
        },
    userId:String
})
const postModel = mongoose.model("post",postSchema)
module.exports=postModel;