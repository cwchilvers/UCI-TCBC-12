module.exports = (req, res) => {
    const db = require('../../config/db_connect'); 
    const fs = require('fs');  
    const path = require('path');  
    const table3 = require('cli-table3');

    const queryFilePath = path.join(__dirname, '../../db/queries/viewEmployees_query.sql');
    const query = fs.readFileSync(queryFilePath, 'utf8');

    db.query(query, (error, results) => {
        if (error) {
            console.error('Failed to retrieve employees.', error);  
            res.status(500).json({ error: 'Failed to retrieve employees.' });
        } else {
            const table = new table3({                                                      
                head: ['ID', 'Department', 'Role', 'Salary', 'First Name', 'Last Name'], 
                colWidths: [5, 25, 25, 15, 15, 15],                                    
            });

            results.forEach(({ id, department, role, salary, first_name, last_name }) => {    
                table.push([id, department, role, salary, first_name, last_name]);      
            });

            console.log('\n'); 
            console.log(table.toString());  
            res.status(200).json({ message: 'Employees retrieved successfully.', results });
        }
    });
};