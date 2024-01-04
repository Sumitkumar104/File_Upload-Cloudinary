const express=require("express");
const route=express.Router();

const {imageupload,videoupload,imagereducerupload,localfileupload}=require("../controllers/fileuploadcontrol");

route.post("/imageupload",imageupload);
route.post("/videouplaod",videoupload);
route.post("/imagereducer",imagereducerupload);
route.post("/localfileupload",localfileupload);


module.exports=route;