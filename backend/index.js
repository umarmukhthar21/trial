const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const StudentData = require('./models/studentData');
const EmployerData = require('./models/employerData');

var app = new express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// create student
app.post('/api/student/register', (req, res)=> {
  console.log(req.body);

  var student = {
    name: req.body.name ,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    qualification: req.body.qualification,
    passout: req.body.passout,
    skills: req.body. skills,
    employmentStatus: req.body.employmentStatus,
    techtraining: req.body. techtraining,
    course:req.body. course,
    image:req.body.image,
    exitexammark:req.body.exitexammark
  };

  console.log('student profile - backend', student)

  var newStudent = new StudentData(student);
  newStudent.save();

})


//get all students
app.get('/api/students', (req, res)=> {

  StudentData.find()
    .then((data)=> {
      console.log(data);
      res.send(data);
    });
})


//delete  student by id
app.delete('/api/student/delete/:id',(req,res)=>{  
  id = req.params.id;
  StudentData.findByIdAndDelete({"_id":id})
  .then(()=>{
      console.log('success')
      res.send();
  })
});


// get single student using _id
app.get('/api/student/:id',function(req,res){  
  res.header("Acces-Control-Allow-Origin","*");
  res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
  console.log('id')
  let id=req.params.id;
  StudentData.findOne({_id:id},function(err,student){ 
      res.send(student)
  })
});

// update student
app.put('/api/update-student',(req,res)=>{
  res.header("Acces-Control-Allow-Origin","*");
  res.header("Acces-Control-Allow-Methods: GET, POST, PATH, PUT, DELETE, HEAD"); 
  console.log(req.body)
  let id=req.body.student._id
  StudentData.findByIdAndUpdate({"_id":id},
  {
      $set:{
          name:req.body.student.name ,
          email:req.body.student.email,
          phone:req.body.student.phone,
          address:req.body.student.address,
          qualification:req.body.student.qualification,
          passout:req.body.student.passout,
          skills:req.body.student.skillset,
          employmentStatus:req.body.student.employmentStatus,
          techtraining:req.body.student.technologyTraining,
          course:req.body.student.course,
          exitexammark:req.body.student.exitexammark
          }
  }) .then((data)=>{
  console.log(data); 
  res.send(data)
})
})

// create employer
app.post('/api/employer/register', (req, res)=> {
  console.log(req.body);

  var employer = {
    organisationname: req.body.organisationname ,
    email: req.body.email,
    
  };

  console.log('employer profile - backend', employer)

  var newEmployer = new EmployerData(employer);
  newEmployer.save();

})


//get all employer
app.get('/api/employer', (req, res)=> {

  EmployerData.find()
    .then((data)=> {
      console.log(data);
      res.send(data);
    });
})










//---------------------------------------------------------------\\
app.get("/", (req, res)=> {     // for local dev
  res.send('Hi')
});

app.listen(3333, ()=> {
  console.log(`Listening to 3333`);
});