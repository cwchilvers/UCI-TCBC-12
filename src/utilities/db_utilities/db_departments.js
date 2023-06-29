module.exports = () => {
    const db = require('./db_connect');  // Import connect_db.js (connect to database)

    return new Promise((resolve, reject) => {
        // Get all departments from database
        db.query('SELECT id, name FROM department', (error, results) => {
            if (error) {
                console.error('An error occurred:', error);
                reject('An error occurred');
            } else {
                const departments = results.map(({ id, name }) => ({
                    value: id,  // Stores department id
                    name: name  // Displays department name
                }));
                resolve(departments); // Resolve promise with departments array
            }
        });
    });
};