const express = require("express");
const router = express.Router();
const adminControl = require("../controller/adminControl");

//routes using controller function

router.post("/CEO", adminControl.createAdmin);
router.get("/getAdmin", adminControl.getAdmin);
router.put("/update/:id", adminControl.updateAdmin);


module.exports = router;
