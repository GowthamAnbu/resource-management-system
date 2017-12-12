const Level = require('../models/level');

exports.Create = (request, response) => {
  let level = new Level({
    name: request.body.name
  });

  Level.create(level, (err, _level) => {
    if(err){
      if(err.toString().indexOf('E11000') > -1) {
        err = new Error('Duplicate email name');
      }
    return response.status(400).json({reason:err.toString()});
    }
    if (_level){
      response.setHeader('Content-Type', 'application/json');
      response.json(_level);
    }
  })
}
exports.Get = (request, response) => {
  Level.find({}, (err, _level) => {
    if(err){
      return response.status(400).json(err);
    }
    if (_level){
      response.setHeader('Content-Type', 'application/json');
      response.json(_level);
    }
  })
}

exports.GetById = (request, response) => {
  let id = request.params.id;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Level.findById(id, (err, _level)=> {
      if(err){
        return response.status(400).json(err);
      }
      if(_level){
      response.setHeader('Content-Type', 'application/json');
      response.json(_level);
      }
    });
  }else{
      response.status(400).json({message:"not a valid id"});
  }
};

exports.update = (request, response) => {
  let id = request.params.id;
  let level = new Level({
    name: request.body.name
  });
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Level.findByIdAndUpdate(id, {name: level.name}, {new: true}, (err, _level) => {
      if (err) {
        return response.status(400).json(err);
      }
      if (_level) {
        response.setHeader('Content-Type', 'application/json');
        response.json(_level);
      }
    })
  }else{
    response.status(400).json({message:"not a valid id"});
  }
}
