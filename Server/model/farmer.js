

const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    FarmerId: {
      type:String,
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
const Farmer = mongoose.model("farmer_Detail", schema);
module.exports = Farmer;
