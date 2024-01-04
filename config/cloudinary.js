const cloudinary = require("cloudinary").v2; // Import v2 version of the library
require("dotenv").config();

const cloudinaryconnect = async() => {
    try {
       await cloudinary.config({
            cloud_name: process.env.cloudname,
            api_key: process.env.apikey,
            api_secret: process.env.apisecret
        });
        console.log("Cloudinary is successfully connected");
    } catch (err) {
        console.log("There is an error connecting to Cloudinary");
        console.error(err);
    }
};

module.exports = cloudinaryconnect;
