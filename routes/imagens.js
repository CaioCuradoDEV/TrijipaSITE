const express = require("express");
const router = express.Router();
const db = require("../ConexaoBD"); // Conexão com o MySQL

router.get("/imagens", (req, res) => {
    db.query("SELECT * FROM imagens", (err, results) => {
        if (err) {
            return res.status(500).send("Erro ao buscar imagens");
        }
        res.json(results);
    });
});

module.exports = router;
