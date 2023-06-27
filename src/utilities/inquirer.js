// Import modules
const inquirer = require('inquirer');

// Import utilities
const db_roles = require('../utilities/db_roles');
const db_managers = require('../utilities/db_managers');

// Update choices
const update = async () => {
    const roles = await db_roles();
    const managers = await db_managers();

    return { roles, managers };
};

// Main menu
const mainMenu = async () => {
    const data = await inquirer.prompt([
        {
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
        }
    ]);

    return data;
};

// Add new employee
const addEmployee = async () => {
    const { roles, managers } = await update();

    const data = await inquirer.prompt([
        {
            type: 'input',
            message: 'Employee\'s first name:',
            name: 'first_name',
        },
        {
            type: 'input',
            message: 'Employee\'s last name:',
            name: 'last_name',
        },
        {
            type: 'list',
            message: 'Employee\'s Role:',
            name: 'role_id',
            choices: roles,
        },
        {
            type: 'list',
            message: 'Employee\'s Manager:',
            name: 'manager_id',
            choices: managers,
        },
    ]);

    return data;
};

// Pause
const pause = async () => {
    const data = await inquirer.prompt([
        {
            type: 'input',
            message: 'Press enter to continue...\n',
            name: 'pause',
        }
    ]);
};

module.exports = {
    mainMenu,
    addEmployee,
    pause
};