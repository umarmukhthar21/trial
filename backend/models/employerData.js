// assesing mongoose package
const mongoose = require('mongoose');
// database connection
mongoose.connection

// schema definition
const schema = mongoose.Schema;
const employerSchema= new schema({   
    email:String,
    organisationname:String,
    
});

// model
var employerdata = mongoose.model('employerdata',employerSchema);
module.exports = employerdata;