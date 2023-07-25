const mysql = require('mysql2');
require('dotenv').config();

// Connect to SQL database
module.exports = mysql.createConnection(
    {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
    
    console.log(`Connected to the ${process.env.DB_DATABASE} database.`)
);