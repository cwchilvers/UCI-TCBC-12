// Import express and create router
const app = require('express').Router();  

// Import handlers in an object
const handlers = {
    viewEmployees: require('../handlers/viewEmployees_handler'),
    addEmployee: require('../handlers/addEmployee_handler'),
    updateEmployee: require('../handlers/updateEmployee_handler'),
    viewRoles: require('../handlers/viewRoles_handler'),
    addRole: require('../handlers/addRole_handler'),
    viewDepartments: require('../handlers/viewDepartments_handler'),
    addDepartment: require('../handlers/addDepartment_handler'),
};

// Route requests to their respective handlers
app
    .get('/employees', handlers.viewEmployees)
    .post('/add-employee', handlers.addEmployee)
    .post('/update-employee', handlers.updateEmployee)
    .get('/roles', handlers.viewRoles)
    .post('/add-role', handlers.addRole)
    .get('/departments', handlers.viewDepartments)
    .post('/add-department', handlers.addDepartment);

// Export router to server.js
module.exports = app;