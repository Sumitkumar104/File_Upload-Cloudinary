const FileModel = require("../model/fileschema");
const cloudinary = require("cloudinary").v2;


// take the file from our local storage which we pass from the Postman in post request and sent to "path" describe in code . 
exports.localfileupload = async (req, res) => {
    try {
        console.log('enter in localfile uplaod function')
        // console.log(req);

        const datafile = req.files.file;      // file is key given to that uploaded file in post request by POSTMAN .
        const path = __dirname + "/files" + Date.now() + `.${datafile.name.split('.')[1]}`;

        console.log(path);

        datafile.mv(path, {}) // move function to path
        console.log("file is successfully added");
    } catch (err) {
        console.log("there  is error in localfileuplaod system")
        console.log(err);

    }
    // res.send("fefcrevv");

}


function checkfiletype(supportedtypes, imagedatatype) {
    return supportedtypes.includes(imagedatatype);     // return true if key is include in supportedtype array.
}

async function fileuploadtocloudinary(file, location) {
    const options = { location }
    options.resource_type="auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// basic steps to upload the image on cloudinary
// - fetch the imagedata from the request.exports.
// - apply the validation and check given image is .jpg or .png or .jpeg 
// - upload to cloudinary
// - also save in Mongodb as to make an entry
// - return a successfull response .
exports.imageupload = async (req, res) => {
    try {

        // data fetch
        const { name, tags, email } = req.body;
        const imagedata = req.files.image_1;
    

      // validation
        const supportedtypes = ["jpg", "jpeg", "png"];
        const imagedatatype = imagedata.name.split(".")[1].toLowerCase();

        if (checkfiletype(supportedtypes, imagedatatype) === false) {
            return res.status(400).json({
                success: false,
                message: "given file type is not supported"
            })
        }


        // upload to cloudinary
        console.log("successfull upto fileupload")
        const respnse = await fileuploadtocloudinary(imagedata, "codehelp")
         
       // make entry in database
        const dbdata = await FileModel.create({
            name, tags, email, imageurl: respnse.secure_url
          });
        

          // return response
        res.sendStatus(200)

    }
    catch (err) {
        console.error(err);
        res.send(401).json({
            success: false,
            message: "there is some to error to upload the file in cloudinary ",

        })

    }

}
exports.videoupload = () => {
    // same as image uplaod 
}
exports.imagereducerupload = () => {

}