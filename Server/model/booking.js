const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    Name: {
      type: "string",
    },
    Address: {
      type: "string",
    },
    District: {
      type: String,
      enum: ["Vavuniya", "Mullaitivu", "Kilinochchi", "Jaffna", "Mannar"],
    },
    PhoneNumber: {
      type: Number,
    },
    AcreCount: {
      type: Number,
    },
    Message: {
      type: String,
    },
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", schema);

module.exports = Booking;
