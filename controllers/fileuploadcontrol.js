const fileschema = require("../model/fileschema");
const fileupload = require("express-fileupload");


// take the file from our local storage which we pass from the Postman in post request and sent to "path" describe in code . 
exports.localfileupload = async (req, res) => {
    try {
        console.log('enter in localfile uplaod function')
        // console.log(req);

        const datafile = req.files.file;      // file is key given to that uploaded file in post request by POSTMAN .
        const path = __dirname+"/files" + Date.now() + `.${datafile.name.split('.')[1]}`;
        
        console.log(path);

        datafile.mv(path, {}) // move function to path
        console.log("file is successfully added");
    } catch (err) {
        console.log("there  is error in localfileuplaod system")
        console.log(err);

    }
    // res.send("fefcrevv");

}
exports.imageupload = () => {

}
exports.videoupload = () => {

}
exports.imagereducerupload = () => {

}