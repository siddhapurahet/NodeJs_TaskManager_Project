const mongoose = require('mongoose');

const connstring = 'mongodb+srv://het:het@node-express-projects.vh8cnvd.mongodb.net/Task-Manager?retryWrites=true&w=majority';

// 1st method
const connectdb = (url) => {
    return mongoose.connect(connstring);
}
module.exports = connectdb;

// ========= 2nd method to connect to database ========= 
// mongoose
// .connect(connstring)
// .then(() => console.log('Connected to DB'))  
// .catch((err) => console.log(err));