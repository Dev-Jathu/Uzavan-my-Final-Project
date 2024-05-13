// const express = require("express");
// const mongoose = require("mongoose");
const FarmerModel = require("../model/farmer");
const bcrypt = require("bcrypt");

//create farmer
exports.createfarmer = (req, res) => {
  const { Name, NIC, TelNo, Email, Password } = req.body;
  bcrypt
    .hash(Password, 10)
    .then((hash) => {
      FarmerModel.create({ Name, NIC, TelNo, Email, Password: hash })
        .then((Farmers) => res.json(Farmers))
        .catch((err) => res.json(err));
    })
    .catch((err) => console.log(err.message));
};

//get farmer all details
exports.getAllFarmer = async (req, res) => {
  try {
    const getfarmer = await FarmerModel.find();
    res.status(200).send(getfarmer);
  } catch (error) {
    res.status(500).send(error);
  }
};

//get farmer id for spesify details




//Delete 
exports.deleteFarmer = async (req, res) => {
  const id = req.params.id;
  try {
      const Farmer = await FarmerModel.findOneAndDelete({ _id: id });
      if (!Farmer) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
      res.status(500).json({ message: 'Something went wrong' });
  }
};



















































































































// exports.createfarmer = async (req, res) => {
//   try {
//     bcrypt
//         .hash(Password, 10)
//         .then((hash) => {
//       const user = new FarmerModel(req.body);
//       await user.save({ Name, NIC, TelNo, Email, Password: hash });
//       // bcrypt
// //     .hash(Password, 10)
// //     .then((hash) => {
// //       farmerModel
// //         .create({ Name, NIC, TelNo, Email, Password: hash })
//       res.status(201).send(user);
//   })catch (error) {
//       res.status(400).send(error);
//   }
// };

// const bcrypt = require("bcrypt");

// exports.createfarmer = async (req, res) => {
//   try {
//     const { password, ...otherData } = req.body;

//     const saltRounds = 10;

//     const hashedPassword = await bcrypt.hash(password, saltRounds);

//     const user = new FarmerModel({
//       ...otherData,
//       password: hashedPassword, // Store the hashed password
//     });

//     await user.save();

//     res.status(201).send({
//       ...user._doc,
//       password: undefined, // Optionally remove the password from the response for security
//     });
//   } catch (error) {
//     res.status(400).send(error);
//   }
// };
