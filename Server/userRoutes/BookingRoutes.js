const express = require("express");
const router = express.Router();
const bookingController = require("../controller/BookingControl");

//routes using controller function


router.post('/BookMachine', bookingController.createBooking);
router.get('/Bookingview', bookingController.getBooking);


module.exports = router;