// imageController.js
const cloudinary = require('../Services/cloudinery');
const Image = require('../model/image');

const uploadToCloudinary = async (filePath, folder) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, { folder });
        return { url: result.secure_url, publicId: result.public_id };
    } catch (error) {
        console.error('Error uploading to Cloudinary:', error);
        throw error;
    }
};

const saveImageToDB = async (url, publicId) => {
    try {
        const image = new Image({ url, publicId });
        await image.save();
        console.log('Image saved to MongoDB:', image);
        return image;
    } catch (error) {
        console.error('Error saving image to MongoDB:', error);
        throw error;
    }
};

module.exports = { uploadToCloudinary, saveImageToDB };
