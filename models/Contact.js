/*=== Contact Model ===*/

var mongoose = require('mongoose');

var ContactModel = function() {

	var ContactSchema = mongoose.Schema({

		id: Number,
		number: String,
		isActive: Boolean,
		honorific: String,
		firstName: String,
		lastName: String

	});

	return mongoose.model('Contact', ContactSchema);
};

module.exports = ContactModel;
