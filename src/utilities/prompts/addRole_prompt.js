// Update choices
const update = async () => {
    const db_departments = require('../db_utilities/db_departments');

    const departments = await db_departments();

    return departments;
};

module.exports = async () => {
    const inquirer = require('inquirer');

    // Update choices
    const departments = await update();

    return await inquirer.prompt([
        {
            type: 'input',
            message: 'New role title:',
            name: 'title',
        },
        {
            type: 'input',
            message: 'New role salary:',
            name: 'salary',
        },
        {
            type: 'list',
            message: 'New role department:',
            name: 'department_id',
            choices: departments,
        }
    ]);
};