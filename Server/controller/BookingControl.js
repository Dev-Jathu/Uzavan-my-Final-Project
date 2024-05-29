

const BookingModel = require("../model/booking");
const Machiery = require("../model/servicemodel")

// Register for machinery owner's service list
// Create a new booking
exports.createBooking = (req, res) => {
  const { Name, Address, District, PhoneNumber, AcreCount, Message, MachineryId, FarmerId ,OwnerName} = req.body;

  BookingModel.create({ Name, Address, District, PhoneNumber, AcreCount, Message, MachineryId, FarmerId ,OwnerName})
    .then(service => res.status(201).json(service))
    .catch(err => res.status(500).json({ error: err.message }));
};


// Get details for service list
exports.getBooking = async (req, res) => {
  try {
    const bookings = await BookingModel.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


exports.getOwnerName = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await Machiery.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};