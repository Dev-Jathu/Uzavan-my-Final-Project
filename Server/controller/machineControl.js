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