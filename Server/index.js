const mongoose = require("mongoose");
const connectDB = require("./DB/Database");
const paymentServer=require("./payment/payment")
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./userRoutes/routes");
const MachineRoutes = require("./userRoutes/machineRoutes");
const LoginRoutes = require("./userRoutes/loginRoutes");
const AdminRoutes = require("./userRoutes/adminRoutes");
const CreateService = require("./userRoutes/ServiceaddRoutes");
const BookingRoutes =require("./userRoutes/BookingRoutes")

//app assignd
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
    credentials: true,
  })
);

const startServer = async () => {
  try {
    //mongodb connecting
    await connectDB();

    //database connection
    app.listen(process.env.PORT || 3003, () => {
      console.log(`Server is running on the port ${process.env.PORT}`);
    });

    //call for farmer create
    app.use("/farmer", userRoutes);

    //call for machinerys create
    app.use("/machinery", MachineRoutes);

    //call for login
    app.use("/farmerLogin", LoginRoutes);

    //call for admin
    app.use("/Admin", AdminRoutes);

    //call for service add list
    app.use("/profile", CreateService);

    //call for payment
    await paymentServer();

    //call for booking
    app.use ("/Booking",BookingRoutes)

    
  } catch (err) {
    console.log(err);
  }
};
startServer();
