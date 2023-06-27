module.exports = async (req, res) => {
    const db = require('../utilities/db_utilities/db_connect');                     // Import connect_db.js (connect to database)
    const prompt = require('../utilities/prompts/updateEmployee_prompt.js');    // Import addEmployee.js (inquirer prompts)

    // Get user input
    const data = await prompt();


};