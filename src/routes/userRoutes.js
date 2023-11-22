const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController.js");

router.get("/login", userController.userLogin);

module.exports = router;