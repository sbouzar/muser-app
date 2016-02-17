import path = require('path');
import models = require('../models');

let mainController = {
  getIndex: (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'index.html'));
  },
  postRegister: (req, res) => {
		var Muser = models['Muser'];
		/*var muser = new Muser({
			username: "Sam",
			email: "sam@sam.fr",
			password: "1234"
		});*/
		Muser.create({
			username: "Sam",
			mail: "sam@sam.fr",
			password: "1234"
		}, function (err, small) {
		  if (err) console.log(err);
			console.log("Saved!");
		// saved!
})
  }
  
}

export default mainController;