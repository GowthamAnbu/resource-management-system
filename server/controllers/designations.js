const Designation = require('../models/designation');

exports.Create = (request, response) => {
  let designation = new Designation({
    name: request.body.name
  });

  Designation.create(designation, (err, _designation) => {
    if(err){
      if(err.toString().indexOf('E11000') > -1) {
        err = new Error('Duplicate Designation name');
      }
    return response.status(400).json({reason:err.toString()});
    }
    if (_designation){
      response.setHeader('Content-Type', 'application/json');
      response.json(_designation);
    }
  })
}
exports.Get = (request, response) => {
  Designation.find({}, (err, _designation) => {
    if(err){
      return response.status(400).json(err);
    }
    if (_designation){
      response.setHeader('Content-Type', 'application/json');
      response.json(_designation);
    }
  })
}

exports.GetById = (request, response) => {
  let id = request.params.id;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Designation.findById(id, (err, _designation)=> {
      if(err){
        return response.status(400).json(err);
      }
      if(_designation){
      response.setHeader('Content-Type', 'application/json');
      response.json(_designation);
      }
    });
  }else{
      response.status(400).json({message:"not a valid id"});
  }
};

exports.GetNames = (request, response) => {
  Designation.find({}, (err, _designation) => {
    if(err){
      return response.status(400).json(err);
    }
    if (_designation){
      response.setHeader('Content-Type', 'application/json');
      response.json(_designation);
    }
  }).select({name:1})
}

exports.update = (request, response) => {
  let id = request.params.id;
  let designation = new Designation({
    name: request.body.name
  });
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Designation.findByIdAndUpdate(id, {name: designation.name}, {new: true}, (err, _designation) => {
      if (err) {
        return response.status(400).json(err);
      }
      if (_designation) {
        response.setHeader('Content-Type', 'application/json');
        response.json(_designation);
      }
    })
  }else{
    response.status(400).json({message:"not a valid id"});
  }
}
