const express = require("express");
const router = express.Router();
const adminControl = require("../controller/adminControl");

//routes using controller function

router.post("/CEO", adminControl.createAdmin);


module.exports = router;
