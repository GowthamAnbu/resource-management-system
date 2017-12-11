const technologies = require('../controllers/technologies');

module.exports = (app) => {

  app.post('/admin/technology/add', technologies.Create);

  app.get('/admin/technology/all', technologies.Get);
}
