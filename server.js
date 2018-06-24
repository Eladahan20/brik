const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

const nodemailer = require('nodemailer');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));


// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

app.post('/send', (req, res) => {
    var message = req.body;
    console.log(message);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'eladdahan20@gmail.com', // generated ethereal user
            pass: 'sculpture77' // generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: 'eladdahan20@gmail.com', // sender address
        to: 'brik.or@gmail.com', // list of receivers
        subject: 'לקוח חדש', // Subject line
        html: `<b>לקוח חדש</b>
        <ul>
            <li>Name : ` + message.name + `</li>
            <li>Mail: ` + message.mailAddress + `</li>
            <li>Phone: ` + message.phone + `</li>
            <li>Message: ` + message.message + `</li>
        </ul>` // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));