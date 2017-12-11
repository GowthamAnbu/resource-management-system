const Candidate = require('../models/candidate');

exports.Create = (request, response, next) => {
  let candidate = new Candidate({
    name: response.body.name,
    eamil: response.body.email,
    technology: response.body.technology,
  });
  /* add the questions assigned to the technology manually */
  Candidate.create(candidate, (err, _candidate) => {
    if(err){
      if(err.toString().indexOf('E11000') > -1){
          err = new Error('Duplicate email Id');
      }
			response.status(400);
			return response.send({reason:err.toString()});
    }
    if (_candidate){
      response.send(_candidate);
    }
  })
}
