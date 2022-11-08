const mysql = require('mysql');
const {DB_HOST, DB_NAME, DB_USER, DB_PASS} = process.env

// Create mysql connection
module.exports = mysql
    .createPool({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASS,
        database: DB_NAME
    })
    .promise()