module.exports = async (req, res) => {
    // Import Modules
    const db = require('../utilities/db_utilities/db_connect');
    const prompt = require('../utilities/prompts/addRole_prompt');

    // Get user input
    const data = await prompt();

    // Add role to database
    db.query(
        `INSERT INTO role SET ?`,
        {
            title: data.title,
            salary: data.salary,
            department_id: data.department_id,
        },
        (error, results) => {
            if (error) {
                console.error('An error occurred:', error);             // Log error to console
                res.status(500).json({ error: 'An error occurred' });   // Send error response to client
            } else {
                console.log('Role added successfully.');                // Log success to console
                res.status(200).json(results);                          // Send success response and results to client
            }
        }
    );
};