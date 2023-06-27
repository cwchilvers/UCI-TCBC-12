module.exports = async (req, res) => {
    const inquirer = require('../utilities/inquirer');

    // Get user input
    const data = await inquirer.addEmployee();

    // Insert new employee into database
    connection.query('INSERT INTO employee SET ?', data, (err, result) => {
        if (err) throw err;
        console.log('Added new employee:', result.insertId);
    });
};