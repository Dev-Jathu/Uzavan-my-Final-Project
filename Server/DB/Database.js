const mongoose=require('mongoose')
require('dotenv').config()

const connectDB = async()=>{
    try{
 await mongoose.connect(process.env.URL)
 console.log("Connected to database");


    }
    catch{(err)
        console.log(err,"Failled to connection");

    }
}

module.exports = connectDB