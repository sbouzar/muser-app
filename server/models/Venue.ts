var mongoose = require('mongoose');

let venueSchema = new mongoose.Schema({
	name: String
});

var Venue = mongoose.model('Venue', venueSchema);

module.exports = Venue;