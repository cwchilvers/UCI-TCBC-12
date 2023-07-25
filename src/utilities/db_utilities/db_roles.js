module.exports = async () => {
    const db = require('../../../config/db_connect');

    try {
        // Get all roles from the database
        const results = await new Promise((resolve, reject) => {
            db.query('SELECT id, title FROM role', (error, results) => {
                if (error) {
                    console.error('Failed to retrieve roles.', error);
                    reject('Failed to retrieve roles.');
                } else {
                    resolve(results);
                }
            });
        });

        const roles = results.map(({ id, title }) => ({
            value: id,
            name: title,
        }));

        return roles;
    } catch (error) {
        throw error;
    }
};