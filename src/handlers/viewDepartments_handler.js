module.exports = (req, res) => {
    const db = require('../../config/db_connect'); 
    const fs = require('fs');
    const path = require('path');  
    const table3 = require('cli-table3');

    const queryFilePath = path.join(__dirname, '../../db/queries/viewDepartments_query.sql');
    const query = fs.readFileSync(queryFilePath, 'utf8');

    db.query(query, (error, results) => {
        if (error) {
            console.error('Failed to retrieve departments.', error);
            res.status(500).json({ error: 'Failed to retrieve departments.' });
        } else {
            const table = new table3({    
                head: ['ID', 'Department'], 
                colWidths: [5, 25], 
            });

            results.forEach(({ id, department }) => { 
                table.push([id, department]);   
            });

            console.log('\n'); 
            console.log(table.toString()); 
            res.status(200).json({ message: 'Departments retrieved successfully.', results });
        }
    });
};