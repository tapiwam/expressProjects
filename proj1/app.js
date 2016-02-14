var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/people', function(req, res) {
  var people = [
    {
      firstName: "John",
      lastName: "D",
      age: 44,
      gender: "male"
    },
    {
      firstName: "Tom",
      lastName: "Brady",
      age: 33,
      gender: "male"
    },
    {
      firstName: "Tracey",
      lastName: "Smith",
      age: 34,
      gender: "female"
    }
  ];

  res.json(people);
});

app.get('/download', function(req, res) {
  res.download(path.join(__dirname, '/downloads/pdf-sample.pdf'));
});

app.get('/about', function(req, res) {
  res.redirect('about.html');
});

app.post('/subscribe', function(req, res) {
  console.log("Request made...");
  var name = req.body.name;
  var email = req.body.email;

  console.log("Found: " + name + " with email " + email);
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
