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
// Create the mongoose model
const FileModel = mongoose.model('File', fileschema);

// Export the model
module.exports = FileModel;