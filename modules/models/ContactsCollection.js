(function () {
	'use strict';

	var Backbone = require('backbone'),
		ContactModel = require('./ContactModel'),
		ContactsCollection = Backbone.Collection.extend({
			url : 'contacts',
			model: ContactModel
		});

	module.exports = ContactsCollection;

}());
