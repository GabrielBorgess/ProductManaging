const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");

router.get("/", userController.indexScreen);
router.post("/cadastraruser", userController.cadastrarUsuario);
router.post("pra testar")

module.exports = router;