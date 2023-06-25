// Import modules
const inquirer = require('inquirer');

// Get user input
function mainMenu() {
    const data = inquirer.prompt([
        type: 'list',
        message: 'What would you like to do?',
        name: 'mainMenu',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit',
        ],
    ])

    return data;
}

module.exports = mainMenu;