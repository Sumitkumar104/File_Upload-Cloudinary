const express = require("express");
const fileupload = require("express-fileupload");
const app = express();
require("dotenv").config();
const mongoconnect =require("./config/mongodb");
const cloudinaryconnect=require("./config/cloudinary");

app.use(express.json());
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

mongoconnect();
cloudinaryconnect();

const uploadroute = require("./routes/fileuplaodroute");
const fileHandleRoute=require("./routes/fileHandleRoute");

app.use("/api/v1/upload",uploadroute); 
app.use("/api/v1/file",fileHandleRoute);


const port = process.env.port||4000; // Correct the variable name to uppercase PORT
app.listen(port, () => {
    console.log(`Your app is successfully rendered at port = ${port}`);
});


app.get("/", (req, res) => {
    res.send('<h1> Welcome  back guys </h1>');
});
