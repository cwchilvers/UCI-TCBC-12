module.exports = async () => {
    const inquirer = require('inquirer');

    return await inquirer.prompt([
        {
            type: 'input',
            message: 'New department name:',
            name: 'name',
        },
    ]);
};