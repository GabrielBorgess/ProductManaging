const express = require("express");
const mustache = require("mustache-express");
const mongoose = require("mongoose");

const uri = 'mongodb+srv://gabrielborges:r9EgcwdibocFKTHJ@cluster0.b2xpxgf.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
db.once('open', () => {
  console.log('Conexão bem-sucedida ao MongoDB Atlas!');
});

const app = express();
const PORT = 8080;

// Configuração do mustache
app.engine("html", mustache());
app.set("view engine", "html");
app.set("views", __dirname + "/src/views");

// Rotas
app.use("/", require("./src/routes/rotasTeste"));
app.use("/", require("./src/routes/userRoutes.js"));

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
