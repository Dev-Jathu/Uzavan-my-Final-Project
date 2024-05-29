


const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const farmerModel = require("../model/farmer");
const machineryModel = require("../model/Mchinery");
const AdminModel = require('../model/admin');
const app = express();

exports.Loginfarmer = (req, res) => {
  const { Email, Password } = req.body;

  // First check the farmer model
  farmerModel.findOne({ Email }).then((farmer) => {
    if (farmer) {
      bcrypt.compare(Password, farmer.Password).then((isMatch) => {
        if (isMatch) {
          const token = jwt.sign({ Email: farmer.Email, role: "user",Name:farmer.Name,id :farmer._id }, process.env.JWT, {
            expiresIn: "1d",
          });
          res.json({ token, role: "user" });
        } else {
          res.status(401).json("Password is incorrect.");
        }
      });
    } else {
      // If not found in farmer, check the machinery model
      machineryModel.findOne({ Email }).then((machinery) => {
        if (machinery) {
          bcrypt.compare(Password, machinery.Password).then((isMatch) => {
            if (isMatch) {
              const token = jwt.sign(
                { Email: machinery.Email, role: "machine_user",Name:machinery.Name, id: machinery._id },
                process.env.JWT,
                { expiresIn: "1d" }
              );
              res.json({ token, role: "machine_user" });
            } else {
              res.status(401).json("Password is incorrect.");
            }
          });
        } else {
          // If not found in machinery, check the Admin model
          AdminModel.findOne({ Email }).then((admin) => {
            if (admin) {
              bcrypt.compare(Password, admin.Password).then((isMatch) => {
                if (isMatch) {
                  const token = jwt.sign(
                    { Email: admin.Email, role: "admin" },
                    process.env.JWT,
                    { expiresIn: "1d" }
                  );
                  res.json({ token, role: "admin" });
                } else {
                  res.status(401).json("Password is incorrect.");
                }
              });
            } else {
              res.status(404).json("User not found.");
            }
          });
        }
      });
    }
  });
};

// Middleware to verify user
const verifyUser = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res
      .status(401)
      .json({ error: "Authentication token is not available." });
  }
  jwt.verify(token, process.env.JWT, (err, decoded) => {
    if (err)
      return res.status(401).json({ error: "Invalid authentication token." });
    req.user = decoded;
    next();
  });
};

// Protected route - Home
app.get("/home", verifyUser, (req, res) => {
  res.json("Success");
});

// Protected route - Machine
app.get("/machinepage", verifyUser, (req, res) => {
  res.json("Successmachine");
});

// Protected route - Admin
app.get("/Admin", verifyUser, (req, res) => {
  res.json("Admin_Success");
});


