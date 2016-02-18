import path = require('path');
import models = require('../models');

var passport = require('passport');

let mainController = {
  getIndex: (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'index.html'));
  },
  postRegister: (req, res) => {
		passport.authenticate('muser-signup', 
		{
			failureRedirect: '/register',
			failureFlash: true
		},
			console.log("Saved!"));
			//res.status(200).json({status: 'Registration successful!'});
	},
  /*(req, res) => {
		let Muser = models['Muser'];
		let muser = req.body.muser;
		Muser.create({
			username: muser.username,
			email: muser.email,
			password: muser.password
		}, function (err, muser) {
		  if (err) console.log(err);
			console.log("Saved!");
			res.status(200).json({status: 'Registration successful!'});
		});
  },*/
  postSignIn:
		passport.authenticate('local',
			{
				successRedirect: '/',
				failureRedirect: '/signin',
				failureFlash: true
			})
  
  
}

export default mainController;