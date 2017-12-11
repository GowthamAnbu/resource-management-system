const Technology = require('../models/technology');

exports.Create = (request, response, next) =>{
  let technology = new Technology({
    name:request.body.name
  });
  Technology.create(technology, (err, _technology) => {
    if(err){
      if(err.toString().indexOf('E11000') > -1){
          err = new Error('Duplicate technology name');
      }
			response.status(400);
			return response.send({reason:err.toString()});
    }
    if (_technology){
      response.send(_technology);
    }else{
      return next(err);
    }
  })
}

exports.Get = (request, response, next) =>{
  Technology.find({}, (err, _technology) => {
    if(err){
      return next(err);
    }
    if (_technology){
      response.send(_technology);
    }
  })

}
