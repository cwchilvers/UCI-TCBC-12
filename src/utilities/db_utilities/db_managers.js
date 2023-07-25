module.exports = async () => {
    const db = require('../../../config/db_connect');

    try {
        // Get all employees with no manager (meaning they are a manager) from the database
        const results = await new Promise((resolve, reject) => {
            db.query('SELECT id, first_name, last_name FROM employee WHERE manager_id IS NULL', (error, results) => {
                if (error) {
                    console.error('Failed to retrieve managers.', error);
                    reject('Failed to retrieve managers.');
                } else {
                    resolve(results);
                }
            });
        });

        const managers = results.map(({ id, first_name, last_name }) => ({
            value: id,
            name: `${first_name} ${last_name}`
        }));

        return managers;
    } catch (error) {
        throw error;
    }
};