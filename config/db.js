import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS ||'',
    database: process.env.DB_NAME || 'db_medusa'
});

export {
    connection
}