import express = require('express');
import path = require('path');

var mongoose = require('mongoose');
var port: number = process.env.PORT || 3000;
var app = express();
 
app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));

/**
 * Configure database
 */
mongoose.connect('mongodb://localhost:27017/muserDB'); // Connects MongoDB.
mongoose.connection.on('error', () => {
	console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
	process.exit(1);
});

/* Routes */
app.use('/', require('./routes/muser.js'));
 
var server = app.listen(port, () => {
  var host = server.address().address;
  var port = server.address().port;
  console.log('This express app is listening on port:' + port);
});