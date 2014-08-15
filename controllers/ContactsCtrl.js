/*=== Contact Controller ===*/

var Contact = require("../models/Contact")();

var ContactsCtrl = {
	create : function(req, res) {
		var contact = new Contact(req.body)
			contact.save(function (err, contact) {
			res.send(contact);
		});
	},
	fetchAll : function(req, res) {
		Contact.find(function (err, contacts) {
			res.send(contacts);
		});
	},
	fetch : function(req, res) {
		Contact.find({_id:req.params.id}, function (err, contacts) {
			res.send(contacts[0]);
		});
	},
	update : function(req, res) {
		delete req.body._id
		Contact.update({_id:req.params.id}, req.body, function (err, contact) {
			res.send(contact);
		});
	},
	delete : function(req, res) {
		Contact.findOneAndRemove({_id:req.params.id}, function (err, contact) {
			res.send(contact);
		});
	}
}

module.exports = ContactsCtrl;
