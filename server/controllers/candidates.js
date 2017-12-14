const Candidate = require('../models/candidate');

exports.Create = (request, response) => {
  let candidate = new Candidate({
    name: request.body.name,
    email: request.body.email,
    technology: request.body.technology,
    employee: request.body.employee
  });
  /* add the questions assigned to the technology manually */
  Candidate.create(candidate, (err, _candidate) => {
    if(err){
      if(err.toString().indexOf('E11000') > -1){
          err = new Error('Duplicate email Id');
      }
			return response.status(400).json({reason:err.toString()});
    }
    if (_candidate){
      response.setHeader('Content-Type', 'application/json');
      response.json(_candidate);
    }
  })
}

exports.Get = (request, response) => {
  Candidate.find({}, (err, _candidate) => {
    if(err){
			return response.status(400).json(err);
    }
    if (_candidate){
      response.setHeader('Content-Type', 'application/json');
      response.json(_candidate);
    }
  })
}

exports.GetById = (request, response) => {
  let id = request.params.id;
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Candidate.findById(id, (err, _candidate)=> {
      if(err){
        return response.status(400).json(err);
      }
      if(_candidate){
      response.setHeader('Content-Type', 'application/json');
      response.json(_candidate);
      }
    });
  }else{
      response.status(400).json({message:"not a valid id"});
  }
};
/* experimental Feature update name*/
exports.updateName = (request, response) => {
  let id = request.params.id;
  let candidate = new Candidate({
    name: request.body.name
  });
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Candidate.findByIdAndUpdate(id, {name: candidate.name}, {new: true}, (err, _candidate) => {
      if (err) {
        return response.status(400).json(err);
      }
      if (_candidate) {
        response.setHeader('Content-Type', 'application/json');
        response.json(_candidate);
      }
    })
  }else{
    response.status(400).json({message:"not a valid id"});
  }
}
/* experimental Feature update questions by push for array of ids*/
exports.updateQuestions = (request, response) => {
  let id = request.params.id;
  let candidate = new Candidate({
    questions: request.body.questions
  });
  if (id.match(/^[0-9a-fA-F]{24}$/)) {
    Candidate.findByIdAndUpdate(id, {$push:{questions: candidate.questions}}, {new: true}, (err, _candidate) => {
      if (err) {
        return response.status(400).json(err);
      }
      if (_candidate) {
        response.setHeader('Content-Type', 'application/json');
        response.json(_candidate);
      }
    })
  }else{
    response.status(400).json({message:"not a valid id"});
  }
}
