const connectDB=require('./DB/connect')
const express = require('express');
const FarmerModel = require('./Models/Farmers.model')
const cors=require("cors")

const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());




const startServer = async () => {
    try{
        await connectDB();
        app.listen(PORT, ()=>{
            console.log(`Server is running on the port ${PORT}`)
        })
        
    }
    catch(err){
        console.log(err)
    }
    app.post('/register',(req,res)=>{
        FarmerModel.create(req.body)
        .then( Farmers => res.json(Farmers))
        .catch(err => res.json(err))
    
    
    })
    
app.post('/Signin',(req,res) => {
    const {Email,Password}=req.body
    FarmerModel.findOne({Email: Email})
    .then(Farmers =>{
        if (Farmers){
            if (Farmers.Password === Password){
                res.json("Success")

            }else{
                res.json("the password is wrong")
        }
        }else{
            res.json("no record")
        }
    })
})
}
startServer();
