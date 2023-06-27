module.exports = async (req, res) => {
    const db = require('../utilities/db_utilities/db_connect');                     // Import connect_db.js (connect to database)
    const prompt = require('../utilities/prompts/updateEmployee_prompt.js');    // Import addEmployee.js (inquirer prompts)

    // Get user input
    const data = await prompt();

    // Update employee role
    const query = `UPDATE employee SET role_id = ${data.role_id} WHERE id = ${data.employee_id};`;
    
    db.query(query, (error, results) => {
        if (error) {
            console.error('An error occurred:', error);
            res.status(500).json({ message: 'An error occurred' });
        } else {
            console.log('Employee role updated');
            res.status(200).json({ message: 'Employee role updated' });
        }
    });
};