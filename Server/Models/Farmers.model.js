const mongoose = require("mongoose")
const schema = new mongoose.Schema({
Name:{
    type : String,
    require :true
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
    require : true
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
const Farmer = mongoose.model("Farmer" ,schema);
module.exports = Farmer;