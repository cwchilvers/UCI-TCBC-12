module.exports = () => {
    const db = require('../utilities/db_connect');  // Import connect_db.js (connect to database)

    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM role', (error, results) => {
            if (error) {
                console.error('An error occurred:', error);
                reject('An error occurred');
            } else {
                const roles = results.map(({ title }) => title);
                resolve(roles);
            }
        });
    });
};