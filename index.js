const express = require("express");
const mustache = require("mustache-express");
const mongoose = require("mongoose");
const session = require("express-session");

//Conectar ao Mongo
const uri = 'mongodb+srv://gabrielborges:r9EgcwdibocFKTHJ@cluster0.b2xpxgf.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Não foi possível conectar a aplição ao banco de dados'));
db.once('open', () => {
  console.log('Aplicação conectada ao Mongo');
});

//Crirar aplicação e portas
const PORT = 8080;
const app = express();

// Configuração do mustache
app.engine('html', mustache())
app.set('view engine', 'html')
app.set('views', __dirname + '/src/views')

app.use(express.urlencoded({extended: true}))
app.use(express.json());
app.use(express.static(__dirname + '/public'));

//configurando sessao
app.use(session({
  secret: 'secret-token',
  name: 'sessionId',  
  resave: false,
  saveUninitialized: false
}));

// Rotas
app.use("/", require("./src/routes/userRoutes.js"));
app.use("/", require("./src/routes/productRoutes.js"))

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
