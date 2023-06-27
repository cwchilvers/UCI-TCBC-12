module.exports = async (req, res) => {
    const db = require('../utilities/db_connect');  // Import connect_db.js (connect to database)
    const inquirer = require('../utilities/inquirer');

    // Get user input
    const data = await inquirer.addEmployee();

    console.log(data);
};