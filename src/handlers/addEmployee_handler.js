module.exports = async (req, res) => {
    const db = require('../utilities/db_utilities/db_connect');         // Import connect_db.js (connect to database)
    const prompt = require('../utilities/prompts/addEmployee_prompt');   // Import addEmployee.js (inquirer prompts)

    // Get user input
    const data = await prompt();

    // Add employee to database
    db.query(
        `INSERT INTO employee SET ?`,
        {
            first_name: data.first_name,
            last_name: data.last_name,
            role_id: data.role_id,
            manager_id: data.manager_id,
        },
        (error, results) => {

            if (error) {
                console.error('An error occurred:', error);             // Log error to console
                res.status(500).json({ error: 'An error occurred' });   // Server error
            } else {
                console.log('Employee added successfully.');
                res.status(200).json(results);
            }
        }
    );
};