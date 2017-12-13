const Department = require('../models/department');

exports.Create = (request, response) => {
  let department = new Department({
    name: request.body.name,
    technologies: request.body.technologies,
  });
  /* add the questions assigned to the technology manually */
  Department.create(department, (err, _department) => {
    if(err){
      if(err.toString().indexOf('E11000') > -1){
          err = new Error('Duplicate Name');
      }
			return response.status(400).json({reason:err.toString()});
    }
    if (_department){
      response.setHeader('Content-Type', 'application/json');
      response.json(_department);
    }
  })
}

exports.Get = (request, response) => {
  Department.find({}, (err, _department) => {
    if(err){
			return response.status(400).json(err);
    }
    if (_department){
      response.setHeader('Content-Type', 'application/json');
      response.json(_department);
    }
  })
}

exports.GetById = (request, response) => {
  let id = request.params.id;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Department.findById(id, (err, _department)=> {
      if(err){
        return response.status(400).json(err);
      }
      if(_department){
      response.setHeader('Content-Type', 'application/json');
      response.json(_department);
      }
    });
  }else{
      response.status(400).json({message:"not a valid id"});
  }
};

exports.GetNames = (request, response) => {
  Department.find({}, (err, _department) => {
    if(err){
      return response.status(400).json(err);
    }
    if (_department){
      response.setHeader('Content-Type', 'application/json');
      response.json(_department);
    }
  }).select({name:1})
}

exports.updateName = (request, response) => {
  let id = request.params.id;
  let department = new Department({
    name: request.body.name
  });
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Department.findByIdAndUpdate(id, {name: department.name}, {new: true}, (err, _department) => {
      if (err) {
        return response.status(400).json(err);
      }
      if (_department) {
        response.setHeader('Content-Type', 'application/json');
        response.json(_department);
      }
    })
  }else{
    response.status(400).json({message:"not a valid id"});
  }
}

/* experimental Feature update questions by push for array of ids*/
exports.updateTechnologies = (request, response) => {
  let id = request.params.id;
  let department = new Department({
    technologies: request.body.technologies
  });
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Department.findByIdAndUpdate(id, {$push:{technologies: department.technologies}}, {new: true}, (err, _department) => {
      if (err) {
        return response.status(400).json(err);
      }
      if (_department) {
        response.setHeader('Content-Type', 'application/json');
        response.json(_department);
      }
    })
  }else{
    response.status(400).json({message:"not a valid id"});
  }
}
