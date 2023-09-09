require('dotenv').config();
const mysql = require('mysql');
const fs = require('fs');

const sqlFilePath = fs.readFileSync(__dirname + '/../mysql/database.sql').toString();
const sqlQueries = sqlFilePath.split(";");

const connection = mysql.createConnection({
    host:  'localhost',
    port: process.env.MYSQLPORT,
    user: process.env.MSQLUSER,
    password: process.env.MYSQLPASSWORD,
    database: process.env.MYSQLDATABASE
});

sqlQueries.forEach(query => {
    if (query.trim() !== '') {
        connection.query(query, function(err, result) {
            if (err) throw err;
        });
    }
});

connection.end(function(err) {
    if (err) throw err;
    console.log('seed finalizado');
    process.exit();
});