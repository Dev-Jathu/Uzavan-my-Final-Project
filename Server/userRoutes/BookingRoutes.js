const express = require("express");
const router = express.Router();
const BookingControl = require("../controller/BookingControl");

//routes using controller function

router.post("/BookMachine", BookingControl.createBooking);
router.get("/Book/view", BookingControl.getBooking);


module.exports = router;
