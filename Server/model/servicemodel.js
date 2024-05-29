const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    // MachineryId: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'Machine_Owner', // Assuming it references the Machine_Owner model
    //   required: true,
    // },
    Name: {
      type: String,
      required: true,
    },
    Address: {
      type: String,
      required: true,
    },
    PhoneNumber: {
      type: String, // Changed to String to accommodate non-numeric characters
      unique: true,
      required: true,
    },
    vehicleType: {
      type: String,
      enum: ["Tractor", "paddyCropper", "TsunamiMachine"],
      required: true,
    },
    District: {
      type: String,
      enum: ["Vavuniya", "Mullaitivu", "Kilinochchi", "Jaffna", "Mannar"],
      required: true,
    },
    Rate: {
      type: String,
      required: true,
    },
    TelYourService: {
      type: String,
      required: true,
    },
    ImageURL: {
      type: String,
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Service = mongoose.model("Service_Profile", schema);
module.exports = Service;
