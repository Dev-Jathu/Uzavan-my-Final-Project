const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    MachineryId: {
      type:mongoose.Types.ObjectId,
      ref:"Machine_Owner",
      require:true,
    },
    FarmerId: {
      type:mongoose.Types.ObjectId,
      ref:"farmer_Detail",
      require:true,
    },
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
