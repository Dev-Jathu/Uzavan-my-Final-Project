const BookingModel = require("../model/booking");

// Register for machinery_owners service list
exports.createBooking = (req, res) => {
  const { Name, Address, District, PhoneNumber,AcreCount,Message } = req.body; // Destructure parameters from request body
  BookingModel.create({ Name, Address, AcreCount, Message,  District, PhoneNumber }) // Pass an object directly
    .then(Service => res.json(Service))
    .catch(err => res.json(err));
}

// Get details for service list
exports.getBooking = async (req, res) => {
  try {
    const Booking = await BookingModel.find();
    res.status(200).send(Booking);
  } catch (error) {
    res.status(500).send(error);
  }
};