module.exports = async (req, res) => {
    const db = require('../utilities/db_utilities/db_connect');         // Import connect_db.js (connect to database)
    const addEmployee = require('../utilities/inquirer/addEmployee_inquirer');   // Import addEmployee.js (inquirer prompts)

    // Get user input
    const data = await addEmployee();

    console.log(data);
};