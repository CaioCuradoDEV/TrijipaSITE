const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");

// Configuração do EJS (se usar templates)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Servir arquivos estáticos
app.use(express.static(path.join(__dirname, "public")));

// Usar as rotas
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
