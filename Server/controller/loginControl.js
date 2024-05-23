// const express = require("express");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const farmerModel = require("../model/farmer");
// const machineryModel = require("../model/Mchinery");
// const AdminModel=require('../model/admin')


// //login for farmer
// // exports.Loginfarmer = (req, res) => {
// //         const { Email, Password } = req.body;
// //         farmerModel.findOne({ Email: Email }).then((Farmers) => {
// //           if (Farmers) {
// //             bcrypt.compare(Password, Farmers.Password, (err, response) => {
// //               if (err) {
// //                 res.json("the password is wrong");
// //               }
// //               if (response) {
// //                 const token = jwt.sign({ Email: Farmers.Email }, process.env.JWT, {
// //                   expiresIn: "1d",
// //                 });
// //                 res.cookie("token", token);
// //                 res.json("Success");
// //               }
// //             });
// //           } else {
// //             res.json("no record");
// //           }
// //         });
// //   };

// // exports.Loginfarmer = (req, res) => {

// //   const { Email, Password } = req.body;
// //   farmerModel.findOne({ Email: Email }).then((Farmer) => {
// //       if (Farmer) {
// //           bcrypt.compare(Password, Farmer.Password, (err, isMatch) => {
// //               if (err) {
// //                   console.error("Error comparing passwords:", err);
// //                   return res.status(500).json({ error: "Internal server error" });
// //               }
// //               if (isMatch) {
// //                   const token = jwt.sign({ Email: Farmer.Email }, process.env.JWT, {
// //                       expiresIn: "1d",
// //                   });
// //                   res.cookie("token", token);
// //                   return res.status(200).json({ message: "Login successful", token });
// //               } else {
// //                   return res.status(401).json({ error: "Incorrect password" });
// //               }
// //           });
// //       } else {
// //           return res.status(404).json({ error: "No record found" });
// //       }
// //   }).catch((err) => {
// //       console.error("Error finding farmer:", err);
// //       return res.status(500).json({ error: "Internal server error" });
// //   });
// // };

// // const bcrypt = require('bcrypt');
// // const jwt = require('jsonwebtoken');
// // const farmerModel = require('./farmerModel'); // Import your farmer model

// // Login farmer route

// // farmerModel.findOne({ Email: Email })
// //     .then((Farmer) => {
// //         if (Farmer) {
// //             // Compare passwords
// //             bcrypt.compare(Password, Farmer.Password, (err, isMatch) => {
// //                 if (err) {
// //                     console.error("Error comparing passwords:", err);
// //                     return res.status(500).json({ error: "Internal server error" });
// //                 }
// //                 if (isMatch) {
// //                     // Create JWT token
// //                     const token = jwt.sign({ Email: Farmer.Email }, process.env.JWT, {
// //                         expiresIn: "1d",
// //                     });
// //                     // Set token in cookie
// //                     res.cookie("token", token);
// //                     return res.status(200).json({ message: "Login successful", token });
// //                 } else {
// //                     return res.status(401).json({ error: "Incorrect password" });
// //                 }
// //             });
// //         } else {
// //             return res.status(404).json({ error: "No record found" });
// //         }
// //     })
// //     .catch((err) => {
// //         console.error("Error finding farmer:", err);
// //         return res.status(500).json({ error: "Internal server error" });
// //     });
// const app = express();

// exports.Loginfarmer = (req, res) => {
//   const { Email, Password } = req.body;

//   // First check the farmer model
//   farmerModel.findOne({ Email }).then((farmer) => {
//     if (farmer) {
//       bcrypt.compare(Password, farmer.Password).then((isMatch) => {
//         if (isMatch) {
//           const token = jwt.sign({ Email: farmer.Email }, process.env.JWT, {
//             expiresIn: "1d",
//           });
//           res.cookie("token", token, { httpOnly: true });
//           res.json("Success");
//         } else {
//           res.status(401).json("Password is incorrect.");
//         }
//       });
//     } else {
//       // If not found in farmer, check the machinery model
//       machineryModel.findOne({ Email }).then((machinery) => {
//         if (machinery) {
//           bcrypt.compare(Password, machinery.Password).then((isMatch) => {
//             if (isMatch) {
//               const token = jwt.sign(
//                 { Email: machinery.Email },
//                 process.env.JWT,
//                 { expiresIn: "1d" }
//               );
//               res.cookie("token", token, { httpOnly: true });
//               res.json("Successmachine");
//             } else {
//               res.status(401).json("Password is incorrect.");
//             }
//           });
//         } else {
//           // If not found in machinery, check the Admin model
//           AdminModel.findOne({ Email }).then((admin) => {
//             if (admin) {
//               bcrypt.compare(Password, admin.Password).then((isMatch) => {
//                 if (isMatch) {
//                   const token = jwt.sign({ Email: admin.Email }, process.env.JWT, {
//                       expiresIn: "1d",
//                   });
//                   res.cookie("token", token, { httpOnly: true });
//                   res.json("Admin_Success");
//                 } else {
//                   res.status(401).json("Password is incorrect.");
//                 }
//               });
//             } else {
//               res.status(404).json("User not found.");
//             }
//           });
//         }
//       });
//     }
//   });
// };



// // Middleware to verify user
// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res
//       .status(401)
//       .json({ error: "Authentication token is not available." });
//   }
//   jwt.verify(token, process.env.JWT, (err, decoded) => {
//     if (err)
//       return res.status(401).json({ error: "Invalid authentication token." });
//     req.user = decoded;
//     next();
//   });
// };

// // Protected route - Home
// app.get("/home", verifyUser, (req, res) => {
//   res.json("Success");
// });

// // Protected route - Machine
// app.get("/Machine", verifyUser, (req, res) => {
//   res.json("Successmachine");
// });

// // Protected route - admin
// app.get("/Admin", verifyUser, (req, res) => {
//   res.json("Admin_Success");
// });


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
          const token = jwt.sign({ Email: farmer.Email, role: "user" }, process.env.JWT, {
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
                { Email: machinery.Email, role: "machine_user" },
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


