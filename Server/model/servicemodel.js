const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    MachineryId: {
      type: String,
      required: true, // Corrected 'require' to 'required' and set it to true
    },
    Name: {
      type: String,
      required: true, // Assuming Name should be required
    },
    Address: {
      type: String,
      required: true, // Assuming Address should be required
    },
    PhoneNumber: {
      type: Number,
      unique: true,
      required: true, // Assuming PhoneNumber should be required
    },
    vehicleType: {
      type: String,
      enum: ["Tractor", "paddyCropper", "TsunamiMachine"],
      required: true, // Assuming vehicleType should be required
    },
    District: {
      type: String,
      enum: ["Vavuniya", "Mullaitivu", "Kilinochchi", "Jaffna", "Mannar"],
      required: true, // Assuming District should be required
    },
    Rate: {
      type: String,
      required: true, // Assuming Rate should be required
    },
    TelYourService: {
      type: String,
      required: true, // Assuming TelYourService should be required
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
