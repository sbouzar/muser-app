var mongoose = require('mongoose');

let gigSchema = new mongoose.Schema({
	date: Date
});

var Gig = mongoose.model('Gig', gigSchema);

module.exports = Gig;