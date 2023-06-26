// Import modules
const inquirer = require('inquirer');

// Get user input
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
    pause
};