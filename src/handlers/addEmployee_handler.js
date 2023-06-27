module.exports = () => {
    // Get user input
    const employee = {
        first_name: 'John',
        last_name: 'Doe',
        role_id: 1,
        manager_id: 2
    };

    // Insert new employee into database
    connection.query('INSERT INTO employee SET ?', employee, (err, data) => {
        if (err) throw err;
        console.log('Added new employee:', data.insertId);
    });
};