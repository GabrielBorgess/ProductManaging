const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");

//Rotas get
router.get("/", userController.indexScreen);
router.get("/home", userController.verificarAuth, userController.homeview);
router.get("/sair", userController.logOut);

//Rotas post
router.post("/cadastraruser", userController.cadastrarUsuario);
router.post("/validarUsuario", userController.validarUsuario);

module.exports = router;