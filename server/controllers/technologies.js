const Technology = require('../models/technology');

exports.Create = (request, response) =>{
  let technology = new Technology({
    name:request.body.name
  });
  Technology.create(technology, (err, _technology) => {
    if(err){
      if(err.toString().indexOf('E11000') > -1){
          err = new Error('Duplicate technology name');
      }
			return response.status(400).json({reason:err.toString()});
    }
    if (_technology){
      response.setHeader('Content-Type', 'application/json');
      response.json(_technology);
    }
  })
}

exports.Get = (request, response) => {
  Technology.find({}, (err, _technology) => {
    if(err){
			return response.status(400).json(err);
    }
    if (_technology){
      response.setHeader('Content-Type', 'application/json');
      response.json(_technology);
    }
  })
}

exports.GetCustom = (request, response) => {
  Technology.find({}, (err, _technology) => {
    if(err){
			return response.status(400).json(err);
    }
    if (_technology){
      response.setHeader('Content-Type', 'application/json');
      response.json(_technology);
    }
  }).select({name:1})
}

exports.GetById = (request, response) => {
  let id = request.params.id;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Technology.findById(id, (err, _technology)=> {
      if(err){
        return response.status(400).json(err);
      }
      if(_technology){
      response.setHeader('Content-Type', 'application/json');
      response.json(_technology);
      }
    });
  }else{
      response.status(400).json({message:"not a valid id"});
  }
};
/* experimental Feature update name*/
exports.update = (request, response) => {
  let id = request.params.id;
  let technology = new Technology({
    name: request.body.name
  });
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Technology.findByIdAndUpdate(id, {name: technology.name}, {new: true}, (err, _technology) => {
      if (err) {
        return response.status(400).json(err);
      }
      if (_technology) {
        response.setHeader('Content-Type', 'application/json');
        response.json(_technology);
      }
    })
  }else{
    response.status(400).json({message:"not a valid id"});
  }
}
/* experimental Feature update questions by push for array of ids*/
exports.update = (request, response) => {
  let id = request.params.id;
  let technology = new Technology({
    questions: request.body.questions
  });
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Technology.findByIdAndUpdate(id, {$push:{questions: technology.questions}}, {new: true}, (err, _technology) => {
      if (err) {
        return response.status(400).json(err);
      }
      if (_technology) {
        response.setHeader('Content-Type', 'application/json');
        response.json(_technology);
      }
    })
  }else{
    response.status(400).json({message:"not a valid id"});
  }
}
