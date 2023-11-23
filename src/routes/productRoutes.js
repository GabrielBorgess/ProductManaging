const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController.js");
const userController = require("../controllers/userController.js")

router.post("/cadastrar-produto",userController.verificarAuth, productController.cadastrarProduto);

module.exports = router