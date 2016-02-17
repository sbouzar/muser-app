var mongoose = require('mongoose');

let albumSchema = new mongoose.Schema({
	title: String,
	year: Number
});

var Album = mongoose.model('Album', albumSchema);

module.exports = Album;