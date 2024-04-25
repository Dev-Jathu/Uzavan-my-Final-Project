const mongoose = require("mongoose")
const schema = new mongoose.Schema({
FullName:{
    type : String,
    require : true,
    unique :true
},
NicNumber:{
    type : String,
    require :true
},
TelephoneNumber:{
    type : Number,
    require :true
},
Address:{
    type : String,
    require :true
},
DateOfBirth:{
    type : Date,
    require :true
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
const Document = mongoose.model("FarmerDeatails" ,schema);
module.exports = Document;