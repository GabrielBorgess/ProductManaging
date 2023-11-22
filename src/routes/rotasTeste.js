const express = require("express");
const router = express.Router();

const controllerTeste = require("../controllers/controllerTeste.js");

router.get("/", controllerTeste.testeView);

module.exports = router;