const express = require("express");
const mongoose = require("mongoose");
const User = require("../Models/Farmers.model");

// Define your controller functions

const getUser = (req, res) => {
  // Logic to get all users
  User.find({})
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => {
      res.status(500).json({ message: "Something went wrong" });
    });
};

const createUser = (req, res) => {
  // Logic to create a user
  const user = new User(req.body)
  user.save()
    .then(() => {
      res.status(201).json({ message: "User created successfully" });
    })
    .catch((err) => {
      res.status(500).json({ message: "Something went wrong" });
    });
};


// Logic to update user

const updateUser = (req, res) => {
  const id = req.params.id;
  const { name, email, password } = req.body;
};
// Logic to delete user

const deleteUser = (req, res) => {
  const id = req.params.id;
  User.findByIdAndRemove(id, (err, user) => {
    if (err) {
      res.status(500).json({ message: "Something went wrong" });
    } else if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  });
};

module.exports = { getUser, createUser,updateUser,deleteUser };
