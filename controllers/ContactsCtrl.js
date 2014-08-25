var Client = require('xtuple-rest-client');

var ContactsCtrl = {
	create: function(req, res) {
		new Client(function (client) {
			client.query({
				type: 'Contact',
				method: 'insert',
				params: {
					dueDate: req.body.dueDate,
					name: req.body.name,
					isActive:req.body.isActive,
					status: req.body.status
				},
				callback: function (err, result) {
					if (err) {
						res.send('Error:', err);
						return;
					}
				}
			});
		});
	},
	fetchAll: function(req, res) {
		new Client(function (client) {
			client.query({
				type: 'Contact',
				method: 'list',
				params: { maxResults: 25 },
				callback: function (err, result) {
					if (err) {
						res.send('Error:', err);
					}
					if (result) {
						res.send(result.data.data);
					}
				}
			});
		});
	},
	fetch: function(req, res) {
		new Client(function (client) {
			client.query({
				type: 'Contact',
				method: 'get',
				params: {uuid: req.query.id},
				callback: function (err, result) {
					if (err) {
						res.send('Error:', err);
						return;
					}
					if (result) {
						res.send(result);
					}
				}
			});
		});
	},
	update: function(req, res) {
		new Client(function (client) {
			client.query({
				type: 'Contact',
				method: 'update',
				params: {
					uuid: req.body.uuid,
					dueDate: req.body.dueDate,
					name: req.body.name,
					isActive:req.body.isActive,
					status: req.body.status
				},
				callback: function (err, result) {
					if (err) {
						res.send('Error:', err);
						return;
					}
				}
			});
		});
	},
	delete: function(req, res) {
		new Client(function (client) {
			client.query({
				type: 'Contact',
				method: 'delete',
				params: {
					uuid: req.params.id
				},
				callback: function (err, result) {
					if (err) {
						console.log(err);
						res.send('Error:', err);
						return;
					}
				}
			});
		});
	}
};

module.exports = ContactsCtrl;
