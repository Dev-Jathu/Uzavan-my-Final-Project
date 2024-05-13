const adminModel = require("../model/admin");
const bcrypt = require("bcrypt");


exports.createAdmin = (req, res) => {
  const { Name,Email, Password } = req.body;
  bcrypt
    .hash(Password, 10)
    .then((hash) => {
      adminModel
        .create({ Name,Email, Password: hash })
        .then((Admin) => res.json(Admin))
        .catch((err) => res.json(err));
    })
    .catch((err) => console.log(err.message,));
};

