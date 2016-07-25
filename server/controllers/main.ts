import path = require('path');
import models = require('../models');

var passport = require('passport');

let mainController = {
  getIndex: (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'index.html'));
  },
  postRegister: (req, res) => {
		let Muser = models['Muser'];
		let muser = req.body.muser;
		Muser.create({
			username: muser.username,
			email: muser.email,
			password: muser.password
		}, function (err, muser) {
		  if (err) console.log(err);
			console.log("Saved!");
			res.status(200).json({
				status: 'Registration successful!',
				data: muser,
				url: 'Home'
			});
		});
  },
  postSignIn: (req, res) => {
		console.log("Logged!");
		/*res.status(200).json({
			status: 'Log successful!',
			data: req.muser,
			url: 'Home'
		});*/
	}
	

  /*(req, res, body) => {
		models['Muser'].authenticate(req, body.username, body.password);
  }*/

}

export default mainController;
