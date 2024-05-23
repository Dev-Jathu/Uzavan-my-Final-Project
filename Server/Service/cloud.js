const { uploadToCloudinary, saveImageToDB } = require('./controller/clodinaryControl');



const filePath = './images/example.jpg'; // Change this to the actual path of your image file
const folder = 'uploads'; // Change this to the desired folder in your Cloudinary account

(async () => {
    try {
        const { url, publicId } = await uploadToCloudinary(filePath, folder);
        await saveImageToDB(url, publicId);
    } catch (error) {
        console.error('Error:', error);
    }
})();











