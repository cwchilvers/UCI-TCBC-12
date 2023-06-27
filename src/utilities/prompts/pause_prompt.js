module.exports = async (req, res) => {
    const inquirer = require('inquirer');

    await inquirer.prompt([
        {
            type: 'input',
            message: 'Press enter to continue...\n',
            name: 'pause',
        }
    ]);    
}