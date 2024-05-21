const express = require("express");
const mongoose = require("mongoose");
const machineryModel = require("../model/Mchinery");
const bcrypt = require("bcrypt");


  //register for machinery_owners
  exports.createmachine = (req, res) => {
    const { Name, NIC, TelNo,Address,VehileTypes, Email, Password } = req.body;
    bcrypt
      .hash(Password, 10)
      .then((hash) => {
        machineryModel.create({ Name, NIC, TelNo,Address,VehileTypes, Email, Password: hash })
          .then((Machinerys) => res.json(Machinerys))
          .catch((err) => res.json(err));
      })
      .catch((err) => console.log(err.message));
  };

  //get machine all details
exports.getAllMachine = async (req, res) => {
  try {
    const getMachine = await machineryModel.find();
    res.status(200).send(getMachine);
  } catch (error) {
    res.status(500).send(error);
  }
};

//update machine 
exports.updateMachine = async (req, res) => {
  try {
     const { id } = req.params;
     await machineryModel.findByIdAndUpdate(id, req.body);
     const Machine = await machineryModel.findById(id);
     res.status(200).json(Machine);
  }
  catch (err) {
     console.error("Error updating admin:", err);
     res.status(500).json({ error: "Internal Server Error" });
  }
}