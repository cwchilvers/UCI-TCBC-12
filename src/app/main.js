const inquirer = require("../utilities/inquirer");                          // Import inquirer.js
const logo = require("../utilities/logo");                                  // Import logo.js
const viewAllEmployees = require("../handlers/viewAllEmployees_handler");   // Import viewAllEmployees.js

const start = async () => {
    logo();             // Display logo
    await mainMenu();   // Display main menu
}
const mainMenu = async () => {
    const data = await inquirer.mainMenu();

    // Switch statement to handle user selection
    switch (data.mainMenu) {
        case 'View All Employees':
            viewAllEmployees();
            break;
        case 'Add Employee':
            addEmployee();
            break;
        case 'Update Employee Role':
            updateEmployeeRole();
            break;
        case 'View All Roles':
            viewAllRoles();
            break;
        case 'Add Role':
            addRole();
            break;
        case 'View All Departments':
            viewAllDepartments();
            break;
        case 'Add Department':
            addDepartment();
            break;
        case 'Quit':
            quit();
            break;
    }
}

module.exports = {
    start,
    mainMenu
}