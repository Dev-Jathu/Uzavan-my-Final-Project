// const express = require("express");
// const mongoose = require("mongoose");
const FarmerModel = require("../model/farmer");
const bcrypt = require("bcrypt");

//create farmer
exports.createfarmer = (req, res) => {
  const { Name, NIC, TelNo, Email, Password,FarmerId } = req.body;
  bcrypt
    .hash(Password, 10)
    .then((hash) => {
      FarmerModel.create({ Name, NIC, TelNo, Email, FarmerId,Password: hash })
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

//Farmer update
exports.updateFarmer = async (req, res) => {
  try {
     const { id } = req.params;
     await FarmerModel.findByIdAndUpdate(id, req.body);
     const Farmer = await FarmerModel.findById(id);
     res.status(200).json(Farmer);
  }
  catch (err) {
     console.error("Error updating admin:", err);
     res.status(500).json({ error: "Internal Server Error" });
  }
}









































































































