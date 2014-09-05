var ContactsCtrl = require("../controllers/ContactsCtrl");

var ContactsRoutes = function(app) {

	app.post("/contacts", function(req, res) {
		ContactsCtrl.create(req, res);
	});

	app.get("/contacts", function(req, res) {
		ContactsCtrl.fetchAll(req, res);
	});

	app.get("/contacts/:id", function(req, res) {
		ContactsCtrl.fetch(req, res);
	});

	app.put("/contacts/:id", function(req, res) {
		ContactsCtrl.update(req, res);
	});

	app.delete("/contacts/:id", function(req, res) {
		ContactsCtrl.delete(req, res);
	});
};

module.exports = ContactsRoutes;
