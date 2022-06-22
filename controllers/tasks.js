const Task = require('../models/Task')


const getAllTasks = async (req,res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    }catch(err){

    }
}


const createTask = async (req,res) => {
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(err){
        res.status(500).json({msg:err})
    }
}


const getTask = async (req,res) => {
   try{
       const id = req.params.id
       const task = await Task.findOne({_id:id})
       if(!task){
           res.status(404).json({msg:'not task with id' + id})
       }
        res.status(200).json({task})
   }catch(err){
       res.status(500).json({msg:err})
   }
}


const deleteTask = async (req,res) => {
    try{
        const id = req.params.id
        const task = await Task.findOneAndDelete({_id:id})
        if(!task){
            res.status(404).json({msg:'not task with id' + id})
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg:err})
    }
}


const updateTask = async (req,res) => {
    try{
        const {id:taskID} = req.params
        const task = await Task.findOneAndUpdate({_id:taskID},req.body,{
            new:true,
            runValidators:true,
        })
        if(!task){
            res.status(404).json({msg:'not task with id' + id})
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg:err})
    }



}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}