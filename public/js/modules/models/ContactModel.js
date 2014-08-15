var Backbone = require("backbone");

var ContactModel = Backbone.Model.extend({
	defaults : function (){
		return {
			isActive: true
		}
	},
	urlRoot : "contacts",
	idAttribute: "_id"
});

module.exports = ContactModel;