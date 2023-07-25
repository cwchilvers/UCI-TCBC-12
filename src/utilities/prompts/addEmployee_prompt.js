// Update choices
const update = async () => {
    const db_roles = require('../db_utilities/db_roles');
    const db_managers = require('../db_utilities/db_managers');

    const roles = await db_roles();
    const managers = await db_managers();

    return { roles, managers };
};

module.exports = async () => {
    const inquirer = require('inquirer');

    const { roles, managers } = await update();

    return await inquirer.prompt([
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
        }
    ]);
};