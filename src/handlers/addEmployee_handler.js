module.exports = async (req, res) => {
    const db = require('../../config/db_connect'); 
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
                console.error('An error occurred:', error);  
                res.status(500).json({ error: 'An error occurred' }); 
            } else {
                console.log('Employee added successfully.');    
                res.status(200).json({ message: 'Employee added successfully.', results }); 
            }
        }
    );
};