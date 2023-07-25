module.exports = async () => {
    const db = require('../../../config/db_connect');

    try {
        // Get all departments from the database
        const results = await new Promise((resolve, reject) => {
            db.query('SELECT id, name FROM department', (error, results) => {
                if (error) {
                    console.error('Failed to retrieve departments.', error);
                    reject('Failed to retrieve departments.');
                } else {
                    resolve(results);
                }
            });
        });

        const departments = results.map(({ id, name }) => ({
            value: id,
            name: name,
        }));

        return departments;
    } catch (error) {
        throw error;
    }
};