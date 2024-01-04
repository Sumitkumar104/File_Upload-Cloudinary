const mongoose =require("mongoose");
const fileschema=new mongoose.Schema({
    name:{
        type:"String",
        require:true
    },
    imageurl:{
        type:"String"
    },
    tags:{
        type:"String"
    },
    email:{
        type:"string"
    }

})
exports.module=fileschema;