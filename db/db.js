const mysql = require('mysql2');

require('dotenv').config();
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASS:', process.env.DB_PASS);
console.log('DB_NAME:', process.env.DB_NAME);

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

connection.connect( (err) =>{
    if(err) {
        console.error("Error en la conexion a la DB", err);
        return;
    }

    console.log("Conectado a la base datos");
});

module.exports = connection;