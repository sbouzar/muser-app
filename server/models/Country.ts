var mongoose = require('mongoose');

let countrySchema = new mongoose.Schema({
	country: String,
	continent: String
});

var Country = mongoose.model('Country', countrySchema);

module.exports = Country;