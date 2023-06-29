module.exports = async () => {
    const inquirer = require('inquirer');

    return await inquirer.prompt([
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
}