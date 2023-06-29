// Update choices
const update = async () => {
    const db_employees = require('../db_utilities/db_employees');
    const db_roles = require('../db_utilities/db_roles');

    const employees = await db_employees();
    const roles = await db_roles();

    return { employees, roles };
};

module.exports = async () => {
    const inquirer = require('inquirer');

    // Update choices
    const { employees, roles } = await update();

    return await inquirer.prompt([
        {
            type: 'list',
            message: 'Select employee:',
            name: 'employee_id',
            choices: employees,
        },
        {
            type: 'list',
            message: 'Select new role:',
            name: 'role_id',
            choices: roles,
        }
    ]);
};