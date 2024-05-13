// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const AdminModel=require('../model/admin')
// const app = express();


// exports.LoginAdmin = (req, res) => {
//     const { Email, Password } = req.body;
//     AdminModel.findOne({ Email }).then((Admin) => {
//         if (Admin) {
//             bcrypt.compare(Password, Admin.Password).then((isMatch) => {
//                 if (isMatch) {
//                     const token = jwt.sign({ Email: Admin.Email }, process.env.JWT, {
//                         expiresIn: "1d",
//                     });
//                     res.cookie("token", token, { httpOnly: true });
//                     res.json("Admin_Success");
//                 } else {
//                     res.status(401).json("Password is incorrect.");
//                 }
//             });
//         } 
//     });
// };
// // Middleware to verify user
// const verifyUser = (req, res, next) => {
//     const token = req.cookies.token;
//     if (!token) {
//       return res
//         .status(401)
//         .json({ error: "Authentication token is not available." });
//     }
//     jwt.verify(token, process.env.JWT, (err, decoded) => {
//       if (err)
//         return res.status(401).json({ error: "Invalid authentication token." });
//       req.user = decoded;
//       next();
//     });
//   };
  
//   // Protected route - Admin
//   app.get("/Admin", verifyUser, (req, res) => {
//     res.json("Admin_Success");
//   });
  
 
