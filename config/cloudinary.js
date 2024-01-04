const cloudinary = require("cloudinary").v2;
require("dotenv").config();



const cloudinaryconnect = () => {
try{
    cloudinary.connect(
        {
            cloud_name: process.env.cloudname,
            api_key: process.env.apikey,
            api_secret: process.env.apisecret
        }
    )
}
catch(err){
    console.log("there is something error to connect the cloudinary");
    console.error(err);
}
}
module.exports=cloudinaryconnect;