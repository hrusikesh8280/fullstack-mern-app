const express = require("express")
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")
const { userModel } = require("../model/userModel")

const userRouter = express.Router()

userRouter.post("/register",async(req,res)=>{
    const{name,email,password}=req.body
    try{
        bcrypt.hash(password,7,async(err, hash) =>{
             const user = new userModel({email,password:hash,name})
             await user.save()
             res.status(200).json(user)
        });
    }catch(err){
        res.status(400).send({"msg":err.msg})
    }
})

userRouter.post('/login',async(req,res)=>{
    const{email,password}=req.body
    if(!email ||!password){
        return res.status(401).send({message:"Please enter email and password"})
        }
    try{
        const user = await userModel.findOne({email})
        if(user) {
            bcrypt.compare(password,user.password,(err, result) =>{
            if(result){
                res.status(200).send({"msg":"Login Successfull!","token":jwt.sign({"userId":"user._id"},"growGlobal")})
            }else{
                res.status(400).send({"msg":"Wrong Credentials"})
            }
            });
        } else{
            res.status(200).send({"msg":"No such User Exist "})
        }
    }catch(err){
        res.status(400).json({"msg":err.msg})
    }
})
module.exports=userRouter
