

const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    MachineryId: {
      type: String,
    },
    FarmerId: {
      type: String,
    },
    vehicleType:{
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
    createDate:{
      type:Date
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
  isVerified: { type: String, default: 'Pending' } ,// 'Pending', 'Accepted', 'Denied'
  // status: { type: String, enum: ['pending', 'accepted', 'denied'], default: 'pending' },
    bookingDate: { type: Date, default: Date.now },
    isFinishWork: { type: String, default: 'Pending' }, // New field


    
  },
  { timestamps: true }
);

const Booking = mongoose.model("Booking", bookingSchema);
module.exports = Booking;
