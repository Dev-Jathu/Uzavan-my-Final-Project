const express = require("express");
const router = express.Router();
const bookingController = require("../controller/BookingControl");

//routes using controller function


router.post('/BookMachine', bookingController.createBooking);
router.get('/Bookingview', bookingController.getBooking);
router.get('/:id/owner', bookingController.getOwnerName);
router.patch('/updateBookingStatus/:id', bookingController.updateBookingStatus);
router.put('/update/:id', bookingController.updateBooking);

module.exports = router;