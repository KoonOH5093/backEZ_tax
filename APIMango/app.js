var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var users = require('./routes/users');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', users);

app.listen(3000, () => console.log('server run listening on port 3000'));