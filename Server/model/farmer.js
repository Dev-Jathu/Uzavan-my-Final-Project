// const mongoose = require("mongoose");
// require("mongoose-type-email");
// const schema = new mongoose.Schema({
//     Name: {
//         type: String,
//         required: true,

//     },
//     NIC: {
//         type: String,
//         required: true
//     },
//     TelNo: {
//         type: String,
//         required: true,

//     },
//     Email: {
//         type: mongoose.SchemaTypes.Email,
//         required: true,
//         unique: true // Ensure email is unique
//     },
//     Password: {
//         type: String,
//         required: true
//     }
// }, { timestamps: true });
// const Farmer = mongoose.model("Farmer", schema);
// module.exports = Farmer;

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
