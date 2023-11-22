const express = require("express");
const mustache = require("mustache-express");
const app = express();
const PORT = 8000;

//Configuracao do mustache
app.engine("html", mustache());
app.set("view engine", "html")
app.set("views", __dirname + "/src/views");

app.use("/", require("./src/routes/rotasTeste"));
app.use("/", require("./src/routes/userRoutes.js"));

app.listen(PORT, ()=>{
    console.log(`Servidor rodando na porta ${PORT}`)
});