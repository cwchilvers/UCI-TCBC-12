module.exports = async (req, res) => {
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
                console.error('An error occurred:', error);
                res.status(500).json({ error: 'An error occurred' });
            } else {
                console.log('Role added successfully.');
                res.status(200).json(results);
            }
        }
    );
};