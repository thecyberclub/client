'use strict'

var express = require('express');
var app = express();
var server = require('http').Server(app);
var bodyParser = require('body-parser');
var morgan =  require('morgan');
var mongoose = require('mongoose');
var routes = require('./server/routes/routes');

var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

routes(app);
app.listen(port,function(){
	console.log('Cyber Club!');
});
