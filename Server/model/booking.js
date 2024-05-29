// const mongoose = require("mongoose");

// const bookingSchema = new mongoose.Schema(
//   {
//     MachineryId: {
//       type: String,

//     },
//     FarmerId: {
//       type: String,


//     },
//     Name: {
//       type: String,
//     },
//     Address: {
//       type: String,
//     },
//     District: {
//       type: String,
//       enum: ["Vavuniya", "Mullaitivu", "Kilinochchi", "Jaffna", "Mannar"],
//     },
//     PhoneNumber: {
//       type: Number,
//     },
//     AcreCount: {
//       type: Number,
//     },
//     Message: {
//       type: String,
//     },
//   },
//   { timestamps: true }
// );

// const Booking = mongoose.model("Booking", bookingSchema);
// module.exports = Booking;



const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    MachineryId: {
      type: String,
    },
    FarmerId: {
      type: String,
    },
    Name: {
      type: String,
    },
    Address: {
      type: String,
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
    OwnerName: {  // Add this field
      type: String,
      require: true
    },
    
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
