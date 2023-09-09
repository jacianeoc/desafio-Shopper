require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'password',
    database: 'product'
});

exports.daoFindProductById = async (product) => {
    try {
        return new Promise((resolve, reject) => {
            connection.connect( function(err) {
                if (err) throw err;
                connection.query(`SELECT * from products where code = ${product}`, function (err, result) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(result);
                    }
                });
            });
        });

    } catch (err) {
        throw err;
    }
};

