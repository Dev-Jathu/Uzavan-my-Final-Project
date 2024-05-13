const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    Email: {
      type: String,
      unique: true,
      required: true,
    },
    Password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const Admin = mongoose.model("Admin", schema);
module.exports = Admin;
