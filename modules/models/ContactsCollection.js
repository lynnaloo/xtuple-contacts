var Backbone = require("backbone");

var ContactModel = require("./ContactModel");

var ContactsCollection = Backbone.Collection.extend({
	url : "contacts",
	model: ContactModel
});

module.exports = ContactsCollection;
