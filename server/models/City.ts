var mongoose = require('mongoose');

let citySchema = new mongoose.Schema({
	city: String,
	zipcode: String
});

var City = mongoose.model('City', citySchema);

module.exports = City;