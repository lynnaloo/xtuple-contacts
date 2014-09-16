(function () {
	'use strict';

	var Backbone = require('backbone'),
		ContactModel = Backbone.Model.extend({
			defaults: { isActive: true },
			urlRoot : 'contacts',
			idAttribute: 'number'
		});

	module.exports = ContactModel;

}());
