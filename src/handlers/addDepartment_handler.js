module.exports = async (req, res) => {
    const db = require('../../config/db_connect');
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
                console.error('Failed to add department.', error);        
                res.status(500).json({ error: 'Failed to add department.' });
            } else {
                console.log('Department added successfully.');    
                res.status(200).json({ message: 'Department added successfully.', results });
            }
        }
    );
};