// // const ServiceModel = require("../model/servicemodel");


// //   //register for machinery_owners service list

// // exports.createService = (req, res) => {
// //     const { Name, Address, vehileType, isVerified, TelYourService, District , PhoneNumber} = req.body; // Destructure parameters from request body
// //     ServiceModel.create({ Name, Address,  vehileType, isVerified, TelYourService, District , PhoneNumber}) // Pass an object directly
// //         .then(Service => res.json(Service))
// //         .catch(err => res.json(err));
// // }

// // //get details for service list

// // exports.getService = async (req, res) => {
// //   try {
// //     const getService = await ServiceModel.find();
// //     res.status(200).send(getService);
// //   } catch (error) {
// //     res.status(500).send(error);
// //   }
// // };

// // //update 
// // exports.updateUser = async (req, res) => {
  
// //   const id = req.params.id;
// //   try {
// //       const user = await ServiceModel.findByIdAndUpdate({ _id: id });
// //       if (!user) {
// //           return res.status(404).json({ message: 'User not found' });
// //       }
// //       res.status(200).json({ message: 'User updated successfully' });
// //   } catch (err) {
// //       res.status(500).json({ message: 'Something went wrong' });
// //   }
// // };





// const ServiceModel = require("../model/servicemodel");

// // Register for machinery_owners service list
// exports.createService = (req, res) => {
//   const { Name, Address, vehicleType, isVerified, TelYourService, District, PhoneNumber } = req.body; // Destructure parameters from request body
//   ServiceModel.create({ Name, Address, vehicleType, isVerified, TelYourService, District, PhoneNumber }) // Pass an object directly
//     .then(Service => res.json(Service))
//     .catch(err => res.json(err));
// }

// // Get details for service list
// exports.getService = async (req, res) => {
//   try {
//     const services = await ServiceModel.find();
//     res.status(200).send(services);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// };

// // Update service
// exports.updateUser = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const user = await ServiceModel.findByIdAndUpdate(id, req.body, { new: true });
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.status(200).json({ message: 'User updated successfully', user });
//   } catch (err) {
//     res.status(500).json({ message: 'Something went wrong', err });
//   }
// };

// //DELETE
// exports.deleteService = async (req, res) => {
//   const id = req.params.id;
//   try {
//       const Service = await ServiceModel.findOneAndDelete({ _id: id });
//       if (!Service) {
//           return res.status(404).json({ message: 'User not found' });
//       }
//       res.status(200).json({ message: 'User deleted successfully' });
//   } catch (err) {
//       res.status(500).json({ message: 'Something went wrong' });
//   }
// };
// //patch for service

// exports.patchUsers = async (req, res) => {
//   const id = req.params.id;
//   if (!id) {
//       return res.status(400).send({ message: "Invalid request: No ID provided." });
//   }
//   try {
//       const updatedService = await Doctor.findByIdAndUpdate(
//           id,
//           { $set: { isVerified: true } },
//           { new: true, runValidators: true }
//       );
//       if (!updatedService) {
//           return res.status(404).json({ message: 'No Machinery found with that ID' });
//       }
//       res.json({
//           message: 'Machinery verified successfully',
//           doctor: updatedService
//       });
//   } catch (error) {
//       console.error('Error during verification and fetch:', error);
//       res.status(500).send({ message: 'Failed to verify and fetch Machine', error: error.message });
//   }
// };



const ServiceModel = require("../model/servicemodel");

// Register for machinery_owners service list
exports.createService = (req, res) => {
  const { Name, Address, vehicleType, isVerified, TelYourService, District, PhoneNumber,ImageURL,Rate } = req.body; // Destructure parameters from request body
  ServiceModel.create({ Name, Address, vehicleType, isVerified, TelYourService, District, PhoneNumber,ImageURL,Rate }) // Pass an object directly
    .then(Service => res.json(Service))
    .catch(err => res.json(err));
}

// Get details for service list
exports.getService = async (req, res) => {
  try {
    const services = await ServiceModel.find();
    res.status(200).send(services);
  } catch (error) {
    res.status(500).send(error);
  }
};

// get details for id

exports.onegetService= async (req, res) => {
  try {
    const service = await ServiceModel.findById(req.params.id);
    if (!service) {
      return res.status(404).send({ error: 'Service not found' });
    }
    res.status(200).send(service);
  } catch (error) {
    res.status(500).send(error);
  }
}

// Update service
exports.updateUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await ServiceModel.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ message: 'User updated successfully', user });
  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', err });
  }
};

//DELETE
exports.deleteService = async (req, res) => {
  const id = req.params.id;
  try {
      const Service = await ServiceModel.findOneAndDelete({ _id: id });
      if (!Service) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
      res.status(500).json({ message: 'Something went wrong' });
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
      return res.status(404).send({ message: 'User not found' });
    }
    res.send(user);
  }catch (error) {
      console.error('Error during verification and fetch:', error);
      res.status(500).send({ message: 'Failed to verify and fetch Machine', error: error.message });
  }
};



