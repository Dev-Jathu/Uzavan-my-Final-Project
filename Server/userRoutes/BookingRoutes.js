const express = require("express");
const router = express.Router();
const bookingController = require("../controller/BookingControl");

//routes using controller function


router.post('/BookMachine', bookingController.createBooking);
router.get('/Booking', bookingController.getBooking);
router.get('/Booking/:id', bookingController.getBookingById);
router.put('/Booking/:id', bookingController.updateBooking);
router.delete('/Booking/:id', bookingController.deleteBooking);


module.exports = router;
