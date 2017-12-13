const Employee = require('../models/employee');
const mongoose = require('mongoose');

exports.Create = (request, response) => {
  let employee = new Employee({
    employee_details: request.body.employee_details,
    department: request.body.department,
    designation: request.body.designation,
    technologies: request.body.technologies
  });

  Employee.create(employee, (err, _employee) => {
    if(err){
      if(err.toString().indexOf('E11000') > -1){
          err = new Error('Duplicate Name');
      }
			return response.status(400).json({reason:err.toString()});
    }
    if (_employee){
      response.setHeader('Content-Type', 'application/json');
      response.json(_employee);
    }
  })
}

exports.Get = (request, response) => {
  Employee.find({}, (err, _employee) => {
    if(err){
			return response.status(400).json(err);
    }
    if (_employee){
      response.setHeader('Content-Type', 'application/json');
      response.json(_employee);
    }
  })
}

exports.GetById = (request, response) => {
  let id = request.params.id;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Employee.findById(id, (err, _employee)=> {
      if(err){
        return response.status(400).json(err);
      }
      if(_employee){
      response.setHeader('Content-Type', 'application/json');
      response.json(_employee);
      }
    });
  }else{
      response.status(400).json({message:"not a valid id"});
  }
};
/* Employee firstname and lastname from sub document */
exports.getAllEmployeeDetails = (request, response) => {
  Employee.find({}).select({employee_details: 1})
  .populate({
    path :'employee_details',
    select: ['firstName', 'lastName']
  })
  .exec( (err, _employee) => {
    if(err){
      return response.status(400).json(err);
    }
    if(_employee){
    response.setHeader('Content-Type', 'application/json');
    response.json(_employee);
    }
  })
}

/* Employee firstname,lastname,designation from sub documents */
exports.getHrEmployees = (request, response) => {
  let id = mongoose.Types.ObjectId('5a30e379e0644a31e81feeb6');
  Employee.find({department: id}).select({employee_details: 1})
  .populate({
    path :'employee_details',
    select: ['firstName', 'lastName']
  })
  .populate({
    path :'designation',
    select: 'name'
  })
  .exec( (err, _employee) => {
    if(err){
      return response.status(400).json(err);
    }
    if(_employee){
    response.setHeader('Content-Type', 'application/json');
    response.json(_employee);
    }
  })
}
