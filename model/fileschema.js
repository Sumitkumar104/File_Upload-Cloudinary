const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const fileschema = new mongoose.Schema({
    name: {
        type: String,  // Fixed typo: "String" instead of "string"
        required: true  // Fixed typo: "required" instead of "require"
    },
    imageurl: {
        type: String
    },
    tags: {
        type: String
    },
    email: {
        type: String  // Fixed typo: "String" instead of "string"
    }
});

// implement the node mailer functionality means after making the entry in the database (POST), node sends an email. Therefore, we call it POST, and for PRE, it is vice-versa.
fileschema.post("save", async function (doc) {
    try {
        // learn SQS SNS SMTP
        // here doc is the entry created in the database
        console.log(doc);

        // transporter
        const transporter = nodemailer.createTransport({
            host: process.env.mailhost,
            // host:"http://localhost:3000",
            port: 465,
            secure: true,
            logger:true,
            debug:true,
            secureconnection:true,
            auth: {
                user: process.env.mailuser,
                pass: process.env.mailpassword,
            },
        });

        // send mail
        let info = await transporter.sendMail({
            from: 'sumit nodeMailer-project',
            to: 'sumitofficial829@gmail.com',    // doc.email
            subject: 'just only for testing',
            html: '<h2>cdcd fcecr vee</h2>'
        });
        console.log(info);
    } catch (err) {
        console.log(err);
    }
});

// Create the mongoose model
const FileModel = mongoose.model('File', fileschema);

// Export the model
module.exports = FileModel;
