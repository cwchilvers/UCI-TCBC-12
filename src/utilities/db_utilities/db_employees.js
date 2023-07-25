module.exports = async () => {
    const db = require('../../../config/db_connect');

    try {
        // Get all employees from the database
        const results = await new Promise((resolve, reject) => {
            db.query('SELECT id, first_name, last_name FROM employee', (error, results) => {
                if (error) {
                    console.error('Failed to retrieve employees.', error);
                    reject('Failed to retrieve employees.');
                } else {
                    resolve(results);
                }
            });
        });

        const employees = results.map(({ id, first_name, last_name }) => ({
            value: id,
            name: `${first_name} ${last_name}`
        }));

        return employees;
    } catch (error) {
        throw error;
    }
};
