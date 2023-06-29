module.exports = async (req, res) => {
    // Import Modules
    const db = require('../utilities/db_utilities/db_connect'); 
    const prompt = require('../utilities/prompts/addEmployee_prompt');

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
                res.status(500).json({ error: 'An error occurred' });   // Send error response to client
            } else {
                console.log('Employee added successfully.');            // Log success to console
                res.status(200).json(results);                          // Send success response and results to client
            }
        }
    );
};