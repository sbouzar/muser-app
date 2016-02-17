var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var muserSchema = new Schema({
	username: String,
	email: String,
	password: String
});

var Muser = mongoose.model('Muser', muserSchema);

module.exports = Muser;