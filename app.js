const express = require('express')
const app = express();
const tasks = require('./routes/tasks');
const connectdb = require('./dbconnect');
require('dotenv').config();
//middleware
app.use(express.json());

//routes
app.get('/hello', (req, res) => {
    res.send('Task Manager app');
})

app.use('/api/v1/tasks', tasks);
app.use('/api/v1/tasks', tasks);
app.get('/api/v1/tasks/:id', tasks);
app.get('/api/v1/tasks/:id', tasks);
app.get('/api/v1/tasks/:id', tasks);


const port = 3000;

const start = async() => {
    try{
        await connectdb()
        app.listen(port,console.log(`Server is ON : port -> ${port}...`));
}
    
    catch(error) {
        console.log(error);
    }
}

start();


/*========= Examples of crud function by creating sample api's =============

app.get('/api/v1/tasks')        -   get all the tasks.
app.post('/api/v1/tasks')       -   create a new task
app.get('/api/v1/tasks/:id')    -   get a single task
app.patch('/api/v1/tasks/:id')  -   update task
app.delete('/api/v1/tasks/:id') -   delete task
 */

