const BookingModel = require("../model/booking");

exports.createBooking = (req, res) => {
  const { Name, Address, District, PhoneNumber, AcreCount, Message, MachineryId, FarmerId, OwnerName, bookingDate, createDate,vehicleType } = req.body;

  BookingModel.create({ Name, Address, District, PhoneNumber, AcreCount, Message, MachineryId, FarmerId, OwnerName, bookingDate, createDate,vehicleType })
    .then(service => res.status(201).json(service))
    .catch(err => res.status(500).json({ error: err.message }));
};

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
    const user = await Machinery.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error("Error fetching user:", error);
    res.status(500).json({ error: "Failed to fetch user" });
  }
};

exports.updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const booking = await BookingModel.findById(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    if (!['Accepted', 'cancelled'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status' });
    }

    booking.isVerified = status;
    await booking.save();

    res.json({ message: 'Booking status updated successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update booking status', error });
  }
};

exports.updateBooking = (req, res) => {
  BookingModel.findById(req.params.id)
    .then(booking => {
      booking.status = req.body.status;
      booking.save()
        .then(() => res.json('Booking status updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
};

exports.updateFinishWorkStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    const booking = await BookingModel.findById(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    booking.isFinishWork = status;
    await booking.save();

    res.json({ message: 'Work status updated successfully', booking });
  } catch (error) {
    res.status(500).json({ message: 'Failed to update work status', error });
  }
};
