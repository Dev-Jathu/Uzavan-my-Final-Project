

const ServiceModel = require("../model/servicemodel");
// const ServiceModel = require('./path/to/ServiceModel'); // Make sure to import your ServiceModel
const { upload } = require('../middleware/multer');

// Register for machinery_owners service list
// exports.createService = (req, res) => {
//   const {
//     Name,
//     Address,
//     vehicleType,
//     isVerified,
//     TelYourService,
//     District,
//     PhoneNumber,
//     Rate,
//   } = req.body; // Destructure parameters from request body
//   try{
//     let ImageURL =null;
//     if(req.file){
//       ImageURL =req.file.path;
//     }

//   }
//   ServiceModel.create({
//     Name,
//     Address,
//     vehicleType,
//     isVerified,
//     TelYourService,
//     District,
//     PhoneNumber,
//     ImageURL,
//     Rate,
//     ImageURL
//   }) // Pass an object directly
//     .then((Service) => res.json(Service))
//     .catch((err) => res.json(err));
// };

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




// Get details for service list
exports.getService = async (req, res) => {
  try {
    const services = await ServiceModel.find();
    if (services.length > 0) {
        // Map each service to include the Cloudinary image URL
        const servicesWithImages = services.map(service => {
            return {
                ...service._doc, // Include all existing service fields
                ImageURL: service.ImageURL // Assuming ImageURL stores the Cloudinary URL
            };
        });
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
  const id = req.params.id;
  try {
    const Service = await ServiceModel.findOneAndDelete({ _id: id });
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
