import fs = require('fs');
import path = require('path');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
var db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename);
  })
  .forEach(function(file) {
    if (file.slice(-3) !== '.js') return;
    var model = require(path.join(__dirname, file));
    db[file.slice(0, -3)] = model;
  });

module.exports = db;