// // // const multer = require('multer');

// // // const storage =multer.diskStorage({
// // //     filename:function(req,file,cb){
// // //         cb(null,file.originalname)
// // //     }
// // // })

// // // const upload =multer({storage:storage})
// // // module.exports = upload


// // // Middleware setup
// // const multer = require('multer');
// // const storage = multer.diskStorage({
// //     filename: function(req, file, cb) {
// //         cb(null, file.originalname);
// //     }
// // });
// // const upload = multer({ storage: storage });

// // // Express Router setup
// // const express = require('express');
// // const router = express.Router();

// // // Cloudinary setup
// // const cloudinary = require('../Utils/cloudinery'); // Assuming correct file name is 'cloudinary.js'

// // // Route for image upload
// // router.post('/upload', upload.single('image'), function(req, res) {
// //     cloudinary.uploader.upload(req.file.path, function(err, result) {
// //         if (err) {
// //             console.log(err);
// //             return res.status(500).json({
// //                 success: false,
// //                 message: "Error uploading image"
// //             });
// //         }
// //         res.status(200).json({
// //             success: true,
// //             message: "Upload successful",
// //             data: result
// //         });
// //     });
// // });

// // module.exports = router;
// // Middleware setup
// const multer = require('multer');
// require('dotenv').config()

// const storage = multer.diskStorage({
//     filename: function(req, file, cb) {
//         cb(null, file.originalname);
//     }
// });
// const upload = multer({ storage: storage });

// // Express Router setup
// const express = require('express');
// const router = express.Router();

// // Cloudinary setup
// const cloudinary = require('../middleware/Utils/cloudinery'); // Assuming correct file name is 'cloudinary.js'

// // Route for image upload
// router.post('/upload', upload.single('image'), function(req, res) {
//     cloudinary.uploader.upload(req.file.path, function(err, result) {
//         if (err) {
//             console.log(err);
//             return res.status(500).json({
//                 success: false,
//                 message: "Error uploading image"
//             });
//         }
//         res.status(200).json({
//             success: true,
//             message: "Upload successful",
//             data: result
//         });
//     });
// });

// module.exports = router;


// const multer = require('multer');

// const storage = multer.diskStorage({
//     filename: function(req, file, cb) {
//         cb(null, file.originalname);
//     }
// });

// const upload = multer({ storage: storage });

// module.exports = upload;

const multer = require("multer");

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

module.exports = upload;



