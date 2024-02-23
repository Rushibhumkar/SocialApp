const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 8000;
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose
  .connect(
    'mongodb+srv://rushibhumkar:rushibhumkar@cluster0.cfw3tr5.mongodb.net/',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    console.log('Connected to Mongodb');
  })
  .catch(err => {
    console.log('Error connecting to mongodb', err);
  });

app.listen(port, () => {
  console.log('Server is running on port 8000');
});

const Employee = require('./models/employee');
const Attendance = require('./models/attendance');

//endpoint to register employee
app.post('/addEmployee', async (req, res) => {
  try {
    const {
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    } = req.body;

    //create a new Employee
    const newEmployee = new Employee({
      employeeName,
      employeeId,
      designation,
      phoneNumber,
      dateOfBirth,
      joiningDate,
      activeEmployee,
      salary,
      address,
    });

    await newEmployee.save();

    res
      .status(200)
      .json({message: 'Employee saved successfully', employee: newEmployee});
  } catch (err) {
    console.log('Error creating employee', error);
    res.status(500).josn({message: 'Failed to add an employee'});
  }
});

//endpoint to fetch all the employees
app.get('/employees', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({message: 'Failed to retrieve the employee'});
  }
});

app.get('/attendance', async (req, res) => {
  try {
    const {employeeId, employeeName, date, status} = req.body;

    const existingAttendance = await Attendance.findOne({employeeId, data});
  } catch (err) {
    res.status(500).json({message: 'Error submitting the attendance'});
  }
});
