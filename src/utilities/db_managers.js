module.exports = () => {
    const db = require('../utilities/db_connect');  // Import connect_db.js (connect to database)

    return new Promise((resolve, reject) => {
        // Get all employees with no manager (meaning they are a manager) from database
        db.query('SELECT id, first_name, last_name FROM employee WHERE manager_id IS NULL', (error, results) => {   
            if (error) {
                console.error('An error occurred:', error);
                reject('An error occurred');
            } else {
                const managers = results.map(({ id, first_name, last_name }) => ({
                    value: id,                          // Stores manager id
                    name: `${first_name} ${last_name}`  // Displays manager name
                }));
                resolve(managers); // Resolve promise with managers array
            }
        });
    });
};