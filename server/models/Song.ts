var mongoose = require('mongoose');

let songSchema = new mongoose.Schema({
	title: String,
	duration: Number,
	lyrics: String,
	track: Number
});

var Song = mongoose.model('Song', songSchema);

module.exports = Song;