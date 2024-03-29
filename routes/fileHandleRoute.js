const express=require("express");
const route=express.Router();

const {create} = require("../controllers/fileHandlingController");

route.post("/create", create);

module.exports=route;