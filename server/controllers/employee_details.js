const Employee_details = require('../models/employee_detail');

exports.Create = (request, response) => {
  let employee_details = new Employee_details({
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    dob: request.body.dob
  });

  Employee_details.create(employee_details, (err, _employee_details) => {
    if(err){
      if(err.toString().indexOf('E11000') > -1){
          err = new Error('Duplicate Name');
      }
			return response.status(400).json({reason:err.toString()});
    }
    if (_employee_details){
      response.setHeader('Content-Type', 'application/json');
      response.json(_employee_details);
    }
  })
}

exports.Get = (request, response) => {
  Employee_details.find({}, (err, _employee_details) => {
    if(err){
			return response.status(400).json(err);
    }
    if (_employee_details){
      response.setHeader('Content-Type', 'application/json');
      response.json(_employee_details);
    }
  })
}

exports.GetById = (request, response) => {
  let id = request.params.id;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Employee_details.findById(id, (err, _employee_details)=> {
      if(err){
        return response.status(400).json(err);
      }
      if(_employee_details){
      response.setHeader('Content-Type', 'application/json');
      response.json(_employee_details);
      }
    });
  }else{
      response.status(400).json({message:"not a valid id"});
  }
};

exports.GetNames = (request, response) => {
  Employee_details.find({}, (err, _employee_details) => {
    if(err){
      return response.status(400).json(err);
    }
    if (_employee_details){
      response.setHeader('Content-Type', 'application/json');
      response.json(_employee_details);
    }
  }).select({firstName:1, lastName:1})
}

exports.updateDob = (request, response) => {
  let id = request.params.id;
  let employee_details = new Employee_details({
    dob: request.body.dob
  });
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Employee_details.findByIdAndUpdate(id, {dob: employee_details.dob}, {new: true}, (err, _employee_details) => {
      if (err) {
        return response.status(400).json(err);
      }
      if (_employee_details) {
        response.setHeader('Content-Type', 'application/json');
        response.json(_employee_details);
      }
    })
  }else{
    response.status(400).json({message:"not a valid id"});
  }
}
