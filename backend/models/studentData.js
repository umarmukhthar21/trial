// assesing mongoose package
const mongoose = require('mongoose');
// database connection
mongoose.connect('mongodb://127.0.0.1/Students');


// schema definition
const schema = mongoose.Schema;
const studentSchema= new schema({   
    name:String,
    email:String,
    phone:String,
    address:String,
    qualification:String,
    passout:String,
    skills:String,
    employmentStatus:String,
    techtraining:String,
    course:String,
    image:String,
    exitexammark:String,
    
});

// model
var studentdata = mongoose.model('studentdata',studentSchema);
module.exports = studentdata;