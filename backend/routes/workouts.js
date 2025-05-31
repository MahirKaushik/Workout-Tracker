const express=require('express')
const Workout=require('../models/workoutModel')

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
router.post('/',async(req,res)=>{
    const {title, load, reps} = req.body

    try{
        const workout=await Workout.create({title, load, reps})
        res.status(200).json(workout)
    }catch(error){
        res.status(400).json({error: error.message})
    }
    // res.json('Post a workout')
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