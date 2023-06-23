const jwt = require('jsonwebtoken')

const authntication =(req,res,next)=>{
    const token = req.headers.authorization.split(" ")[1]
    if(token){
        const decoded = jwt.verify(token,"growGlobal")
        if(decoded){
            next()
        }else{
            return  res.status(500).send({msg:"Invalid Token"})
        }
     }else{
        res.status(400).send({"msg":"Please Login First"})
     }
            

}
module.exports=authntication