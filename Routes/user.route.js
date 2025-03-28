const express = require("express");
const { registerUser } = require("../Controller/Api");
const router = express.Router()

router.post("/register", registerUser)

module.exports = router;