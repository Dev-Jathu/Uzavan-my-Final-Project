const express = require("express");
const router = express.Router();
const logInControl = require("../controller/loginControl");

//routes using controller function

router.post("/sigIn", logInControl.Loginfarmer);


module.exports = router;
