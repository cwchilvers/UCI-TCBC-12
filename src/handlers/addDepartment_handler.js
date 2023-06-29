module.exports = async (req, res) => {
    // Import Modules
    const db = require('../utilities/db_utilities/db_connect');
    const prompt = require('../utilities/prompts/addDepartment_prompt');

    // Get user input
    const data = await prompt();

    // Add department to database
    db.query(
        `INSERT INTO department SET ?`,
        {
            name: data.name,
        },
        (error, results) => {
            if (error) {
                console.error('An error occurred:', error);             // Log error to console
                res.status(500).json({ error: 'An error occurred' });   // Send error response to client
            } else {
                console.log('Department added successfully.');          // Log success to console
                res.status(200).json(results);                          // Send success response and results to client
            }
        }
    );
};