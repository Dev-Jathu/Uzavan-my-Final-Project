const express = require("express");
const router = express.Router();
const machineControl = require("../controller/machineControl");

//routes using controller function

router.post("/registerMachine", machineControl.createmachine);
router.get("/MachineView", machineControl.getAllMachine);

module.exports = router;
