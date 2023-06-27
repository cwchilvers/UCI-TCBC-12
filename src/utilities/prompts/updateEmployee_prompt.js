// Update choices
const update = async () => {
    const db_employees = require('../db_utilities/db_employees');

    const employees = await db_employees();

    return employees;
};

module.exports = async (req, res) => {
    const inquirer = require('inquirer');

    // Update choices
    const employees = await update();

    return await inquirer.prompt([
        {
            type: 'list',
            message: 'Select employee:',
            name: 'employee_id',
            choices: employees,
        }
    ]);
};