const mongoose = require("mongoose");
require('dotenv').config();



const URL=process.env.mongourl;

const mongoconnect = () => {
    
    mongoose.connect(URL)
        .then(
            () => {
                console.log("mongoose is succesfully  connected");
            }

        )
        .catch((err) => {
            console.log("there es something error to connect mongo DB");
            console.error(err);
        })
}
module.exports=mongoconnect;