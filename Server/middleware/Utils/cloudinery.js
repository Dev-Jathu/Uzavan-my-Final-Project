// const cloudinary = require('cloudinary').v2;
// require('dotenv').config()


// cloudinary.config({
//     cloud_name: process.env.CLOUD_NAME,
//     api_key: process.env.API_KEY,
//     api_secret: process.env.API_SECRET
// });

// module.exports = cloudinary;


// middleware/Utils/cloudinary.js
const cloudinary = require('cloudinary').v2;
// require('dotenv').config();

cloudinary.config({
    cloud_name:'dqxxqsoq8' ,
    api_key: '393429694915291',
    api_secret: 'V1RCZQks2A3I_eAhb0FQ5se3Cec',
});

module.exports = cloudinary;
