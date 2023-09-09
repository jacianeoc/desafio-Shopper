const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'seu_host_mysql',
    user: 'seu_usuario_mysql',
    password: 'sua_senha_mysql',
    database: 'seu_banco_de_dados_mysql'
});

// Função para executar consultas SQL
module.exports  = {  executeQuery(query, params, callback) {
    connection.query(query, params, callback);
}}