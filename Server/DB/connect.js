const mongoose =require('mongoose')
require('dotenv').config()
const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_STRING);
        console.log('Your Database is connected ')
    }
    catch(error){
        console.log(error)
    }
};

module.exports =connectDB
