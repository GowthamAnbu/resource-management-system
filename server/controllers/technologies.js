const Technology = require('../models/technology');

exports.Create = (request, response, next) =>{
  let technology = new Technology({
    name:request.body.name
  });
  Technology.create(technology, (err, tech) => {
    if(err){
      if(err.toString().indexOf('E11000') > -1){
          err = new Error('Duplicate technology name');
      }
      return next({reason:err.toString()});
    }
    if (tech){
      response.send(tech);
    }
  })
}

