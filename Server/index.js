const connectDB=require('./DB/connect')
const express = require('express');
const userRoutes = require('./Routes/FarmersRoutes');

cors = require('cors');
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
        app.use(express.json());
        app.use('/user', userRoutes)
        
    }
    catch(err){
        console.log(err)
    }
}
startServer();