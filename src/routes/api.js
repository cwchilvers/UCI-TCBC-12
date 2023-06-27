const app = require('express').Router();  
// Handlers
const viewAllEmployees = require('../handlers/viewAllEmployees_handler');

// View all employees
app.get('/employees', (req, res) => {
    viewAllEmployees(req, res);
});

// Add employee
app.post('/employees', (req, res) => {

});






// Update employee role

// View all roles

// Add role

// View all departments

// Add department

module.exports = app;