//Require what you need.
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();


//Connect to Mongoose
mongoose.connect('mongodb://localhost/meanhackathon');

//Use statements
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/items', require('./controllers/itemsList_controller'));

//Remember - the /* means we are catching all the incoming routes
//and letting angular handle them instead.
app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(process.env.PORT || 3000);
