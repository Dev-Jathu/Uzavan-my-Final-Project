const connectDB = require("./DB/connect");
const express = require("express");
const FarmerModel = require("./Models/Farmers.model");
const MachineryModel = require("./Models/machineryOwner.model")
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is running on the port ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }

  const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
      return res.json("The token is not available");
    } else {
      jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if (err) return res.json("token is wrong");
        next();
      });
    }
  };


  app.get("/home", verifyUser, (req, res) => {
    return res.json("Success");
  });

  app.get("/Machine", verifyUser, (req, res) => {
    return res.json("Successmachine");
  });

  //register for farmer

  app.post("/register", (req, res) => {
    const { Name, NIC, TelNo, Email, Password } = req.body;
    bcrypt
      .hash(Password, 10)
      .then((hash) => {
        FarmerModel.create({ Name, NIC, TelNo, Email, Password: hash })
          .then((Farmers) => res.json(Farmers))
          .catch((err) => res.json(err));
      })
      .catch((err) => console.log(err.message));
  });

  //sign in for farmer

  app.post("/Signin", (req, res) => {
    const { Email, Password } = req.body;
    FarmerModel.findOne({ Email: Email }).then((Farmers) => {
      if (Farmers) {
        bcrypt.compare(Password, Farmers.Password, (err, response) => {
          if (err) {
            res.json("the password is wrong");
          }
          if (response) {
            const token = jwt.sign({ Email: Farmers.Email }, "jwt-secret-key", {
              expiresIn: "1d",
            });
            res.cookie("token", token);
            res.json("Success");
          }
        });
      } else {
        res.json("no record eruma");
      }
    });
  });

    //register for machinery_owners

    app.post("/registerMachine", (req, res) => {
      const { Name, NIC, TelNo,Address,VehileTypes, Email, Password } = req.body;
      bcrypt
        .hash(Password, 10)
        .then((hash) => {
          MachineryModel.create({ Name, NIC, TelNo,Address,VehileTypes, Email, Password: hash })
            .then((Machinerys) => res.json(Machinerys))
            .catch((err) => res.json(err));
        })
        .catch((err) => console.log(err.message));
    });



  //sign in for machinery

  app.post("/Signin", (req, res) => {
    const { Email, Password } = req.body;
    MachineryModel.findOne({ Email: Email }).then((Machinerys) => {
      if (Machinerys) {
        bcrypt.compare(Password, Machinerys.Password, (err, response) => {
          if (err) {
            res.json("the password is wrong");
          }
          if (response) {
            const token = jwt.sign({ Email: Machinerys.Email }, "jwt-secret-key", {
              expiresIn: "1d",
            });
            res.cookie("token", token);
            res.json("Successmachine");
          }
        });
      } else {
        res.json("no record janu");
      }
    });
  });
};
startServer();
