const technologies = require('../controllers/technologies');
const levels = require('../controllers/levels');

module.exports = (app) => {

  app.post('/admin/technology/create', technologies.Create);
  app.get('/admin/technology/list', technologies.Get);
  app.get('/admin/technology/customlist', technologies.GetCustom);

  app.post('/admin/candidate/create')

  app.post('/admin/level/create', levels.Create);
  app.get('/admin/level/list', levels.Get);
  app.post('/admin/level/:id/update', levels.update);
  app.get('/admin/level/:id', levels.GetById);
}
