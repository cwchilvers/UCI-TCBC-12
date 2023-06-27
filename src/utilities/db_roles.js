module.exports = () => {
    const db = require('../utilities/db_connect');  // Import connect_db.js (connect to database)

    return new Promise((resolve, reject) => {
        // Get all roles from database
        db.query('SELECT id, title FROM role', (error, results) => {
            if (error) {
                console.error('An error occurred:', error);
                reject('An error occurred');
            } else {
                const roles = results.map(({ id, title }) => ({
                    value: id,  // Stores role id
                    name: title // Displays role title
                }));
                resolve(roles); // Resolve promise with roles array
            }
        });
    });
};