const adminModel = require("../model/admin");
const bcrypt = require("bcrypt");

exports.createAdmin = (req, res) => {
  const { Name, Email, Password } = req.body;
  bcrypt
    .hash(Password, 10)
    .then((hash) => {
      adminModel
        .create({ Name, Email, Password: hash })
        .then((Admin) => res.json(Admin))
        .catch((err) => res.json(err));
    })
    .catch((err) => console.log(err.message));
};

//get addmin
exports.getAdmin = async (req, res) => {
  try {
    const admin = await adminModel.find();
    res.status(200).json(admin);
  } catch (error) {
    console.error("Error fetching admin data:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.updateAdmin = async (req, res) => {
  try {
     const { id } = req.params;
     await adminModel.findByIdAndUpdate(id, req.body);
     const admin = await adminModel.findById(id);
     res.status(200).json(admin);
  }
  catch (err) {
     console.error("Error updating admin:", err);
     res.status(500).json({ error: "Internal Server Error" });
  }
}






