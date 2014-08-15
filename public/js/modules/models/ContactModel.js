var Backbone = require("backbone");

var ContactModel = Backbone.Model.extend({
	defaults: {
		isActive: true,
	},

	urlRoot : "contacts",
	idAttribute: "uuid"
});

module.exports = ContactModel;
