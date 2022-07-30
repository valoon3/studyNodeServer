const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: '1234',
    connectionLimit: 5,
    database: 'board_db',
});

module.exports = connection;