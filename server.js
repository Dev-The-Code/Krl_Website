
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
var passport = require('passport');
var bodyParser = require('body-parser')
const keys = require('./config/keys');
var session = require('express-session');
var Sequelize = require('sequelize');
const winston = require('winston');
var nodemailer = require('nodemailer');
var smtp = require('nodemailer-smtp-transport');
// const crypto = require('crypto');
// var jwt = require('jsonwebtoken');
// var ip = require('ip');
// const stripe = require("stripe")(keys.stripeSecretKey);
// const moment = require('moment');
// const QRCode = require('qrcode');
// const _ = require("underscore");
// const saltRounds = 10;
// const Op = Sequelize.Op;


const port = process.env.PORT || 8000;
if (process.stdout._handle) process.stdout._handle.setBlocking(true);
const app = express();
app.use(bodyParser.json()) // handle json data
app.use(bodyParser.urlencoded({ extended: true })) // handle URL-encoded data
app.use(cookieParser());


app.use(session({
  key: 'user_sid',
  secret: 'somerandonstuffs',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 600000
  }
}));

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => {
      return `${info.timestamp} ${info.level}: ${info.message}`;
    })
  ),
  transports: [new winston.transports.Console()]
});

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// DB models
require('./models/contactCollection');


var postContactCollection = mongoose.model('contactCollection');


app.use(passport.initialize());

//database Development
var configDB = require('./config/database.js');
mongoose.connect(
  configDB.EvenNodeDB, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    if (err) {
      console.log(err);
      db.on('error', console.error.bind(console, 'Database connection failed:'));
    }
    else {
      var db = mongoose.connection;
      console.log("Database :: KRLCreatives :: connection established successfully.");
    }
  })

app.use((req, res, next) => {
  logger.log('info', 'A request was received');
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie('user_sid');
  }
  next();
});

// API calls
app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });

});

app.get('/api/keys', (req, res) => {
  var publicKey = String(keys.stripePulishableKey)
  res.send({
    keys: publicKey
  })
});

// var transporterDetails = smtpTransport({
//   host: 'business29.web-hosting.com',
//   port: 465,
//   secure: true,
//   auth: {
//       user: "farzan@krlcreatives.com",
//       pass: "farzi1234"
//   },
//   maxConnections: 5,
//   maxMessages: 10
// })

var smtpTransport = nodemailer.createTransport('SMTP', {
  // service: "webbase",
  host: 'business29.web-hosting.com',
  port: 587,
  secure: false,
  auth: {
    user: "awais@krlcreatives.com",
    pass: "467738651092964101"
  },
  tls: {
    rejectUnauthorized: false
  }
})
var rand, mailOptions, host, link;
/*------------------SMTP Over-----------------------------*/


/*------------------Routing Started ------------------------*/


app.post('/api/sendEmailToCompany', (req, res) => {

  var companiesContact = req.body;
  const mailOptions = {
    from: companiesContact.companyEmail,
    to: `awais@krlcreatives.com`,
    subject: `Contact name: ${companiesContact.name}`,
    html: `<p>You have a new contact request</p>
    <h2>Contact details</h2>
    <ul>
<li> Name: ${companiesContact.name} </li>
<li> Email: ${companiesContact.companyEmail} </li>
<li> Phone Number: ${companiesContact.contactnumber} </li>
</ul>
<h3> Message:</h3>
<p>${companiesContact.projectDescription}</p>`
    // text: companiesContact.projectDescription,
    // 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
    // + 'Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n'
    // // + `https://pure-hollows-17968.herokuapp.com/reset/${token}\n\n`
    // + 'If you did not request this, please ignore this email and your password will remain .\n',
  };

  smtpTransport.sendMail(mailOptions, (err, response) => {
    console.log(err, 'err')
    console.log(response, 'response')
    if (err) {
      res.send({
        code: 404,
        message: 'error'
      })
    } else {
      res.send({
        code: 200,
        message: 'Email has been sent'
      })
    }
  });
});


app.post('/api/companiesContact', (req, res) => {
  var companiesContact = req.body;
  const postContactList = new postContactCollection({
    name: companiesContact.name,
    companyEmail: companiesContact.companyEmail,
    contactnumber: companiesContact.contactnumber,
    projectDescription: companiesContact.projectDescription,
  })
  postContactList.save(function (err, data) {
    if (err) {
      res.send({
        code: 500,
        content: 'Internal Server Error',
        msg: 'API not called properly'
      })
    }
    else if (data) {
      res.send({
        code: 200,
        msg: 'Data saved successfully',
        content: data
      });
    }
  })

})

/*===================event seats arrangment API end================================================================*/
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));