const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    MachineryId: {
      type: mongoose.Types.ObjectId,
    },
    Name: {
      type: String,
    },
    NIC: {
      type: String,
    },
    TelNo: {
      type: Number,
    },
    Address: {
      type: String,
    },
    VehicleTypes: {
      type: String,
      enum: ["Tractor", "paddyCropper", "TsunamiMachine"],
    },
    Email: {
      type: String,
      unique: true,
    },
    Password: {
      type: String,
    },
  },
  { timestamps: true }
);

const Machinery = mongoose.model("Machine_Owner", schema);
module.exports = Machinery;
