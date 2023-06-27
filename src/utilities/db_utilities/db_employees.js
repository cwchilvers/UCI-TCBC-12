module.exports = () => {
    const db = require('../db_utilities/db_connect');  // Import connect_db.js (connect to database)

    return new Promise((resolve, reject) => {
        // Get all employees from database
        db.query('SELECT id, first_name, last_name FROM employee', (error, results) => {   
            if (error) {
                console.error('An error occurred:', error);
                reject('An error occurred');
            } else {
                const employees = results.map(({ id, first_name, last_name }) => ({
                    value: id,                          // Stores employee id
                    name: `${first_name} ${last_name}`  // Displays employee name
                }));
                resolve(employees); // Resolve promise with managers array
            }
        });
    });
};