// const mongoose = require ("mongoose");
// require("mongoose-type-email");
// const schema = new mongoose.Schema({
// Name:{
//     type : String,
//     require :true,
// },
// NIC:{
//     type : String,
//     require :true
// },
// TelNo:{
//     type : Number,
//     require : true

// },
// Address:{
//     type : String,
// },
// VehileTypes:{
//     type : String,
//     enum:['Tractor', 'paddyCropper','TsunamiMachine']

// },
// Email:{
//     type : mongoose.SchemaTypes.Email,
//     require : true,
//     unique:true

// },
// Password:{
//     type : String,
//     require : true
// },

// },
// {timestamps: true },
// );
// const Machinery = mongoose.model("Machinery" ,schema);
// module.exports = Machinery;
const mongoose = require("mongoose");
const schema = new mongoose.Schema(
  {
    MachineryId: {
      type:mongoose.Types.ObjectId,
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
    VehileTypes: {
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
