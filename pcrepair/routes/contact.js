var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'test@gmail.com',
      pass: ''
    }
  });


router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});


router.post('/send', function(req, res) {
  // res.send('Posted form');

  var mailOptions = {
      from: 'Test<test@gmail.com>', // sender address
      to: 'Test@gmail.com', // list of receivers
      subject: 'Message recieved from PCRepair', // Subject line
      text: 'Message recieved from PCRepair: Sender: ' + req.body.name + ' Email: ' + req.body.email + ' Message: ' + req.body.message, // plaintext body
      html: '<p>Message recieved from PCRepair<p><ul><li>Sender: ' + req.body.name + '</li><li>Email: ' + req.body.email + '</li><li>Message: ' + req.body.message + '</li></ul>'// html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
          res.redirect('/');
          return;
      }
      console.log('Message sent: ' + info.response);
      res.redirect('/');
  });

});



module.exports = router;
