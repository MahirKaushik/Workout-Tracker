require('dotenv').config()

const express=require('express')

const app=express()


//middleware
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})


//requests get post put patch or delete
app.get('/',(req,res)=>{
    res.json('hello')
})

app.listen(process.env.PORT,()=>{
    console.log('listening on port',process.env.PORT)
})