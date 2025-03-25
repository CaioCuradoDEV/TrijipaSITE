const mysql = require("mysql2");
//port do mysql: 3307
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "senha",
    database: "evento_db"
});

connection.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao MySQL:", err);
    } else {
        console.log("Conectado ao MySQL");
    }
});

module.exports = connection;
