const db = require("./database");

router.get("/imagens", (req, res) => {
    db.query("SELECT * FROM imagens", (err, results) => {
        if (err) {
            return res.status(500).send("Erro ao buscar imagens");
        }
        res.json(results);
    });
});
