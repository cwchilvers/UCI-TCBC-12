module.exports = async (req, res) => {
    const db = require('../../config/db_connect'); 
    const prompt = require('../utilities/prompts/updateEmployee_prompt.js'); 

    // Get user input
    const data = await prompt();

    // Update employee role
    const query = `UPDATE employee SET role_id = ${data.role_id} WHERE id = ${data.employee_id};`;
    db.query(query, (error, results) => {
        if (error) {
            console.error('Failed to update employee role', error);
            res.status(500).json({ message: 'Failed to update employee role' });
        } else {
            console.log('Employee role updated');
            res.status(200).json({ message: 'Employee role updated', results });
        }
    });
};