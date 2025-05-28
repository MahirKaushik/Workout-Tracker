const express=require('express')

const router=express.Router()


//get all workouts
router.get('/',(req,res)=>{
    res.json('Get all workouts')
})

// get single workout
router.get('/:id',(req,res)=>{
    res.json('Get single workout')
})


//post a single workout
router.post('/',(req,res)=>{
    res.json('Post a workout')
})


//delete a workout
router.delete('/:id',(req,res)=>{
    res.json('Delete a workout')
})

//update a workout
router.patch('/:id',(req,res)=>{
    res.json('Update a workout')
})

module.exports=router