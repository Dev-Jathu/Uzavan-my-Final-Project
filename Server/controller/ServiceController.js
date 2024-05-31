

const ServiceModel = require("../model/servicemodel");
// const ServiceModel = require('./path/to/ServiceModel'); // Make sure to import your ServiceModel
const { upload } = require('../middleware/multer');



exports.createService = async (req, res) => {
  upload(req, res, async (err) => {
      if (err) {
          console.error(err);
          return res.status(500).send('An error occurred while uploading the image.');
      }
      const {   
        MachineryId,          
          Name,
          Address,
          PhoneNumber,
          vehicleType,
          District,
          Rate,
          TelYourService,
      } = req.body;
      
      try {
          let ImageURL = null;
          if (req.file) {
              ImageURL = req.file.path; // Assuming CloudinaryStorage returns the path of the uploaded image
          }
          const Service = new ServiceModel({
            MachineryId,
              Name,
              Address,
              PhoneNumber,
              vehicleType,
              District,
              Rate,
              TelYourService,
              ImageURL,
          });
          await Service.save();
          res.json({ Service });
      } catch (error) {
          console.error(error);
          res.status(500).send('An error occurred while saving the service.');
      }
  });
};
exports.getService = async (req, res) => {
  const { MachineryId } = req.query;
  try {
    let services;
    if (MachineryId) {
      services = await ServiceModel.find({ MachineryId });
    } else {
      services = await ServiceModel.find();
    }
    
    if (services.length > 0) {
      const servicesWithImages = services.map(service => ({
        ...service._doc,
        ImageURL: service.ImageURL
      }));
      res.status(200).json(servicesWithImages);
    } else {
      res.status(404).send('No services found.');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('An error occurred while retrieving the services.');
  }
};

// get details for id

exports.onegetService = async (req, res) => {
  try {
    const service = await ServiceModel.findById(req.params.id);
    if (!service) {
      return res.status(404).send({ error: "Service not found" });
    }
    res.status(200).send(service);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update service
exports.updateService = async (req, res) => {
  try {
    const { id } = req.params;
    await ServiceModel.findByIdAndUpdate(id, req.body);
    const Service = await ServiceModel.findById(id);
    res.status(200).json(Service);
  } catch (err) {
    console.error("Error updating admin:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//DELETE
exports.deleteService = async (req, res) => {
  try {
    const Service = await ServiceModel.findOneAndDelete(req.params.id);
    if (!Service) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

// Patch for service
exports.patchUsers = async (req, res) => {
  const userId = req.params.id;
  const { isVerified } = req.body;

  try {
    const user = await ServiceModel.findByIdAndUpdate(
      userId,
      { isVerified },
      { new: true }
    );
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send(user);
  } catch (error) {
    console.error("Error during verification and fetch:", error);
    res
      .status(500)
      .send({
        message: "Failed to verify and fetch Machine",
        error: error.message,
      });
  }
};

exports.services = async (req,res) => {
  const token = req.headers.authorization.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, process.env.JWT); // Use your JWT secret key
    const userId = decoded.id; // Assuming the token contains user ID

    const services = await ServiceModel.find({ userId: _id }); // Fetch services for the user
    res.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    res.status(500).send('Server error');
  }
}