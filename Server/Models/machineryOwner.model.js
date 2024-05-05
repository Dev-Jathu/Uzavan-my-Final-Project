const mongoose = require ("mongoose");
const schema = new mongoose.Schema({
Name:{
    type : String,
    require :true,
},
NIC:{
    type : String,
    require :true
},
TelNo:{
    type : Number,
    require : true

},
Address:{
    type : String,
},
VehileTypes:{
    type : String,
    enum:['Tractor', 'paddyCropper','TsunamiMachine']


},
Email:{
    type : String,
    require : true
},
Password:{
    type : String,
    require : true
},



});
const Machinery = mongoose.model("Machinery" ,schema);
module.exports = Machinery;