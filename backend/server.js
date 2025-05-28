require('dotenv').config()

const express=require('express')
const wr=require('./routes/workouts')


const app=express()


//middleware
app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/workouts',wr)




//website will work on localhost:4000 defined in env file
app.listen(process.env.PORT,()=>{
    console.log('listening on port',process.env.PORT)
})