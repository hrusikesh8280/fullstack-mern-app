const express = require("express")
const postModel = require("../model/postModel")
const authntication = require("../middleware/auth.middleware")
const postRoute = express.Router()

postRoute.get('/',authntication, async(req,res)=>{
    try{
        let post = await postModel.find()
        res.status(200).json(post)
    }catch(err){
        res.status(400).json({ message: err.message });
    }
})

postRoute.post("/add",authntication,async(req,res)=>{
    const payload = req.body
    try{
        const post = new postModel(payload)
        await post.save()
        res.status(200).json(post)
    }catch(err){
        res.status(400).send({"msg":err.msg})
    }

})

postRoute.delete("/:id",async(req,res)=>{
    const{id}=req.params
    try{
        await postModel.findByIdAndDelete({_id:id})
        res.status(200).json({"msg":"post is Deleted"})
    }catch(err){
        res.status(400).send({"msg":err.msg})
    }
})


postRoute.patch("/:id",async(req,res)=>{
    const {id} = req.params
    const payload = req.body;
    try{
        await postModel.findByIdAndUpdate(id,payload)
        res.status(200).send({"message":"posts are updated"})
    }catch(err){
        res.status(400).send({"message":err.message})
    }
})
module.exports=postRoute


