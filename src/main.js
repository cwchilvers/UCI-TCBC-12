const inquirer = require("./utilities/inquirer.js");  // Import inquirer.js

const mainMenu = async () =>{
    // Main menu
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

const viewAllEmployees = async () => {
    // View all employees
    const data = await inquirer.viewAllEmployees();
}

const addEmployee = async () => {
    // Add employee
    const data = await inquirer.addEmployee();
}

const updateEmployeeRole = async () => {
    // Update employee role
    const data = await inquirer.updateEmployeeRole();
}

const viewAllRoles = async () => {
    // View all roles
    const data = await inquirer.viewAllRoles();
}

const addRole = async () => {
    // Add role
    const data = await inquirer.addRole();
}

const viewAllDepartments = async () => {
    // View all departments
    const data = await inquirer.viewAllDepartments();
}

const addDepartment = async () => {
    // Add department
    const data = await inquirer.addDepartment();
}

const quit = async () => {
    // Quit
}

module.exports = mainMenu;