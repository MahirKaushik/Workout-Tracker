require('dotenv').config()

const express=require('express')
const mongoose=require('mongoose')
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

//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    //website will work on localhost:4000 defined in env file
    app.listen(process.env.PORT,()=>{
    console.log('connected to db & listening on port',process.env.PORT)
})
})
.catch((err)=>{
    console.log(err)
})


