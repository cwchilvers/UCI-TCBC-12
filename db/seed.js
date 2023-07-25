const db = require('../config/db_connect');
const seeds = {
    departments: require('./seeds/departments'),
    roles: require('./seeds/roles'),
    employees: require('./seeds/employees')
}

async function seedDatabase() {
    try {
        const connection = await db.promise();

        // Insert departments
        await connection.query('INSERT INTO department (name) VALUES ?', [seeds.departments.map(Object.values)]);

        // Insert roles
        await connection.query('INSERT INTO role (title, salary, department_id) VALUES ?', [seeds.roles.map(Object.values)]);

        // Insert employees
        await connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ?', [seeds.employees.map(Object.values)]);

        console.log('Seeding completed successfully.');
        connection.end();
    } catch (error) {
        console.error('An error occurred during seeding:', error);
    }
}

seedDatabase();
