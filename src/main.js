const inquirer = require("./utilities/inquirer.js");  // Import inquirer.js

const mainMenu = async () =>{
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
    const data = await inquirer.viewAllEmployees();
}

const addEmployee = async () => {
    const data = await inquirer.addEmployee();
}

const updateEmployeeRole = async () => {
    const data = await inquirer.updateEmployeeRole();
}

const viewAllRoles = async () => {
    const data = await inquirer.viewAllRoles();
}

const addRole = async () => {
    const data = await inquirer.addRole();
}

const viewAllDepartments = async () => {
    const data = await inquirer.viewAllDepartments();
}

const addDepartment = async () => {
    const data = await inquirer.addDepartment();
}

const quit = async () => {

}

module.exports = mainMenu;