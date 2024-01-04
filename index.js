const express = require("express");
const fileupload = require("express-fileupload");
const app = express();
require("dotenv").config();
const mongoconnect =require("./config/mongodb");
const cloudinaryconnect=require("./config/cloudinary");

app.use(express.json());
app.use(fileupload());


const uploadroute = require("./routes/fileuplaodroute");
app.get("/app/v1/upload", uploadroute);


const port = process.env.port||4000; // Correct the variable name to uppercase PORT
app.listen(port, () => {
    console.log(`Your app is successfully rendered at port = ${port}`);
});

mongoconnect();
// cloudinaryconnect();


app.get("/", (req, res) => {
    res.send('<h1>cdffvfff v vf vffssv rg vrdv</h1>');
});
