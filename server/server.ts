import express = require('express');
import path = require('path');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');

var sessionMiddleware = require("express-session")({
  name: "muser-app",
  secret: "8ojhgfhe7wn84pom62q",
  proxy: true,
  resave: true,
  saveUninitialized: true
});

var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port: number = process.env.PORT || 3000;
var app = express();
 
app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(sessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/**
 * Configure passport strategy
 */
var User = require('./models')['Muser'];

passport.serializeUser(User.serialize);
passport.deserializeUser(User.deserialize);
passport.use('local', 
  new LocalStrategy({ usernameField: 'email', passwordField: 'password', passReqToCallback: true }, User.authenticate)
);
passport.use('muser-signup', 
  new LocalStrategy({ usernameField: 'email', passwordField: 'password', passReqToCallback: true }, User.muserSignup)
);

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

module.exports = app;