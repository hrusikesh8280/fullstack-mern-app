const express = require('express')
const cors = require('cors')
const { connect } = require('./server/db')
const userRouter = require('./routes/userRoutes')
const postRoute = require('./routes/postRoutes')
require("dotenv").config()



const app = express()

app.use(express.json())
app.use(cors())


app.use('/api/user',userRouter)
app.use('/api/post',postRoute)

 const port= process.env.port || 5001;
 // Start the server and listen on port
 app.listen(port,async()=>{
    try{
        await connect
        console.log(`MongoDb server Connected `)

    }catch(err){
        console.log(`Error in starting Server ${err}`)
    }
    console.log(`server is Running at ${port}`)
 })






