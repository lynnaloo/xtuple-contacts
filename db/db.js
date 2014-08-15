/*=== DataBase configuration ===*/
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/contacts');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;