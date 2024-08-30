const express = require("express");
const router = express.Router();
const register = require("../controles/register");
const login = require("../controles/login");
router.post("/register", register);
router.post("/login", login);
module.exports = router;
