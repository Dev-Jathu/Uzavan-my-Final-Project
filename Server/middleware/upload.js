const express = require('express');
const router = express.Router();
const cloudinary = require('../middleware/Utils/cloudinery');
const upload = require('../middleware/mullter');

require('dotenv').config();

// Route for image upload
router.post('/uploadimage', upload.single('image'), function(req, res) {
    cloudinary.uploader.upload(req.file.path, function(err, result) {
        if (err) {
            console.log(err);
            return res.status(500).json({
                success: false,
                message: "Error uploading image"
            });
        }
        res.status(200).json({
            success: true,
            message: "Upload successful",
            data: result
        });
    });
});

module.exports = router;
