const Task = require('./models/task'); 

const alltasks = async(req, res) => {
    try{
        const tasks = await Task.find({})
        res.status(200).json({tasks});  
    }
    catch(error){
        res.status(500).json({msg: error});

    }
}

const newtask = async(req, res) => {
    try{
        const task = await Task.create(re.body);
        res.status(201).json({task})
    }
    catch(error){
        res.status(500).json({msg: error});
    }
}

const singletask = async(req, res) => {
    try{
        const {id: taskID} = req.params;
        const task = await Task.findOne({_id: taskID});
        if(!task){
            return res.status(404).json({msg: `No task with Id : ${taskID}`})
        }
        res.status(200).json({task});
    }   
    catch(error){
        res.status(500).json({msg: error});
    } 
} 

const updatetask = async(req, res) => {
    try{
        const {id: taskID} = req.params;
        const task = await Task.findOneAndUpdate ({_id: taskID}, req.body);
        if(!task){
            return res.status(404).json({msg: `No task with Id : ${taskID}`})
        }
        res.status(200).json({task});
    }   
     catch(error){
        res.status(500).json({msg: error});
    }}

const deletetask = async(req, res) => {
    try{
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID});
        if(!task){
            return res.status(404).json({msg: `No task with Id : ${taskID}`})
        }
        res.status(200).json({task});
    }   
    catch(error){
        res.status(500).json({msg: error});
    }
}

module.exports = {alltasks, newtask, singletask, updatetask, deletetask};