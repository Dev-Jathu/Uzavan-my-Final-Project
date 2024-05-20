const express = require("express");
const mongoose = require("mongoose");
const skilledPerson = require("../models/skillperson.request.model");
const { uploadSkilled } = require("../utils/multer");
const cors = require("cors");
const app = express();
app.use(cors);
const createUser = async (req, res) => {
  try {
    uploadSkilled.fields([
      { name: "images", maxCount: 4 },
      { name: "certificates", maxCount: 4 },
    ])(req, res, async function (err) {
      if (err) {
        console.error("Error uploading files:", err);
        return res.status(500).json({ error: "File upload failed" });
      }
      if (
        req.files["images"] &&
        req.files["images"][0].mimetype === "application/pdf"
      ) {
      }
      const {
        first_name,
        last_name,
        email,
        number,
        gender,
        birthDate,
        skill,
        nationalid,
        district,
        referenceNumbers,
      } = req.body;
      const images = req.files["images"] ? req.files["images"][0].path : null;
      const newUser = new skilledPerson({
        first_name,
        last_name,
        email,
        number,
        gender,
        birthDate,
        skill,
        nationalid,
        district,
        images,
        referenceNumbers,
      });
      await newUser.save();
      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    });
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "User failed to create" });
  }
};




const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const storageSkilled = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "skilled_workers", // Change folder name as needed
    allowed_formats: ["jpg", "jpeg", "png", "gif"],
    resource_type: "auto",
  },
});
const uploadSkilled = multer({ storage: storageSkilled });
// Storage configuration for investors
const storageInvestor = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "investors",
    allowed_formats: ["jpg", "jpeg", "png", "gif"],
    resource_type: "auto",
  },
});
const uploadInvestor = multer({ storage: storageInvestor });
module.exports = { uploadSkilled, uploadInvestor };

CLOUD_NAME=dqxxqsoq8
API_KEY=393429694915291
API_SECRET=V1RCZQks2A3I_eAhb0FQ5se3Cec