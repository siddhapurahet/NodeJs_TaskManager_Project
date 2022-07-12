const Task = require('./models/task'); 

const alltasks = (req, res) => {
    res.send('Get all the tasks...');
}

const newtask = (req, res) => {
    res.json(req.body);
}

const singletask = (req, res) => {
    res.send('Single Task');
} 

const updatetask = (req, res) => {
    res.send('Task Update...');
}

const deletetask = (req, res) => {
    res.send('Task deleted...');
}

module.exports = {alltasks, newtask, singletask, updatetask, deletetask};