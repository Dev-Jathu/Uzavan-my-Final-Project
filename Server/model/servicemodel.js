// const mongoose = require("mongoose");
// const schema = new mongoose.Schema(
//   {
//     Name: {
//       type: String,
//       // required: true,
//     },
//     Address: {
//       type: String,
//       // required: true,
//     },
//     // telNo:{
//     //   type: Number,
//     // },
//     Telephone: {
//       type: Number,
//     },
//     RateAcre: {
//       type: String,
//       // required: true,
//     },
//     VehileTypes: {
//       type: String,
//       enum: ["Tractor", "paddyCropper", "TsunamiMachine"],
//     },

//     District: {
//       type: String,
//       enum: ["Vavuniya", "Mullaitivu", "Kilinochchi", "Jaffna", "Mannar"],
//     },

//     Message: {
//       type: String,
//       // required: true,
//     },
//     isVerified: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );
// const Service = mongoose.model("service_list", schema);
// module.exports = Service;

const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    Name: {
      type: String,
    },
    Address: {
      type: String,
    },
    PhoneNumber: {
      type: Number,
      unique: true,
    },
    vehicleType: {
      type: String,
      enum: ["Tractor", "paddyCropper", "TsunamiMachine"],
    },
    District: {
      type: String,
      enum: ["Vavuniya", "Mullaitivu", "Kilinochchi", "Jaffna", "Mannar"],
    },
    Rate: {
      type: String,
    },
    TelYourService: {
      type: String,
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
