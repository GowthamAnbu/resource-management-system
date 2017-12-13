const technologies = require('../controllers/technologies');
const levels = require('../controllers/levels');
const candidates = require('../controllers/candidates');
const designations = require('../controllers/designations');
const departments = require('../controllers/departments');
const department_details = require('../controllers/employee_details');
const employees = require('../controllers/employees');

module.exports = (app) => {

  app.get('/admin/level/list', levels.Get);
  app.get('/admin/level/:id', levels.GetById);
  app.post('/admin/level/:id/update', levels.update);
  app.post('/admin/level/create', levels.Create);

  app.get('/admin/designation/list', designations.Get);
  app.get('/admin/designation/names', designations.GetNames);
  app.get('/admin/designation/:id', designations.GetById);
  app.post('/admin/designation/:id/update', designations.update);
  app.post('/admin/designation/create', designations.Create);

  app.get('/admin/technology/list', technologies.Get);
  app.get('/admin/technology/names', technologies.GetNames);
  app.post('/admin/technology/create', technologies.Create);

  app.get('/admin/department/list', departments.Get);
  app.get('/admin/department/names', departments.GetNames);
  app.get('/admin/department/:id', departments.GetById);
  app.post('/admin/department/:id/updateName', departments.updateName);
  app.post('/admin/department/:id/updateTechnologies', departments.updateTechnologies);/* not checked yet */
  app.post('/admin/department/create', departments.Create);

  app.get('/admin/employee_details/list', department_details.Get);
  app.get('/admin/employee_details/names', department_details.GetNames);
  app.get('/admin/employee_details/:id', department_details.GetById);
  app.post('/admin/employee_details/:id/updateDob', department_details.updateDob);
  app.post('/admin/employee_details/create', department_details.Create);

  app.get('/admin/employee/list', employees.Get);
  app.get('/admin/employee/allEmployees', employees.getAllEmployeeDetails);
  app.get('/admin/employee/:id', employees.GetById);
  app.post('/admin/employee/create', employees.Create);

  app.post('/admin/candidate/create', candidates.Create);

}
