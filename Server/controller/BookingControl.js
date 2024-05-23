// const BookingModel = require("../model/booking");

// // Register for machinery_owners service list
// exports.createBooking = (req, res) => {
//   const { Name, Address, District, PhoneNumber,AcreCount,Message,MachineryId,FarmerId } = req.body; // Destructure parameters from request body
//   BookingModel.create({ Name, Address, AcreCount, Message,  District, PhoneNumber,FarmerId,MachineryId }) // Pass an object directly
//     .then(Service => res.json(Service))
//     .catch(err => res.json(err));
// }

// // Get details for service list
// exports.getBooking = async (req, res) => {
//   try {
//     const Booking = await BookingModel.find();
//     res.status(200).send(Booking);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };
const BookingModel = require("../model/booking");

// Register for machinery owner's service list
exports.createBooking = (req, res) => {
  const { Name, Address, District, PhoneNumber, AcreCount, Message, MachineryId, FarmerId } = req.body;

  BookingModel.create({ Name, Address, District, PhoneNumber, AcreCount, Message, MachineryId, FarmerId })
    .then(service => res.status(201).json(service))
    .catch(err => res.status(500).json({ error: err.message }));
};

// Get details for service list
exports.getBooking = async (req, res) => {
  try {
    const bookings = await BookingModel.find().populate('MachineryId').populate('FarmerId');
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Import required modules
// const BookingModel = require("../model/booking");

// // Create a new booking
// exports.createBooking = async (req, res) => {
//   try {
//     // Extract data from the request body
//     const { Name, Address, District, PhoneNumber, AcreCount, Message, MachineryId, FarmerId } = req.body;
    
//     // Create a new booking
//     const booking = await BookingModel.create({ 
//       Name, 
//       Address, 
//       District, 
//       PhoneNumber, 
//       AcreCount, 
//       Message, 
//       MachineryId, 
//       FarmerId 
//     });

//     // Send the created booking as response
//     res.status(201).json(booking);
//   } catch (error) {
//     // Handle errors
//     console.error("Error creating booking:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // Get all bookings
// exports.getBookings = async (req, res) => {
//   try {
//     // Retrieve all bookings
//     const bookings = await BookingModel.find();
    
//     // Send the bookings as response
//     res.status(200).json(bookings);
//   } catch (error) {
//     // Handle errors
//     console.error("Error fetching bookings:", error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };
