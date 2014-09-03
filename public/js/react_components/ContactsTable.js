/** @jsx React.DOM */

var React = require('react'),
	Backbone = require('backbone'),
	ContactModel = require('../modules/models/ContactModel'),
	ContactsCollection = require('../modules/models/ContactsCollection'),
	ContactItem = require('./ContactItem');

var ContactsTable = React.createClass({

	getInitialState: function () {
		return {data : [], message : ""};
	},

	render: function () {
		var models = this.state.data,
			contactsRows = models.map(function (contact) {
				return (
					<ContactItem
						key={contact.get('number')}
						data={contact}
						onDelete={this.deleteContact.bind(this, contact)}
						onEdit={this.editContact.bind(this, contact)}
					/>
				);
			}, this);

		return (
			<div className="table-responsive">
				<table className="table table-striped table-bordered table-hover" >
					<thead>
						<tr>
							<th className="col-md-1">Number</th>
							<th className="col-md-1">Honorific</th>
							<th className="col-md-3">First Name</th>
							<th className="col-md-3">Last Name</th>
							<th className="col-md-2">Actions</th>
						</tr>
					</thead>
					<tbody>
						{contactsRows}
					</tbody>
				</table>
			</div>
		);
	},

	getContacts: function () {
		var contacts = new ContactsCollection();

		contacts.fetch()
			.done(function(data){
				this.setState({data : contacts, message : ""});
			}.bind(this))
			.fail(function(err){
				this.setState({
					message  : err.responseText + " " + err.statusText
				});
			}.bind(this))
	},

	deleteContact: function (contact) {
		console.log("=== delete contact ===", contact.get('number'));
		//new ContactModel({number:id}).destroy();
	},

	editContact: function (contact) {
		console.log("=== edit contact ===", contact.get('number'));
		//new ContactModel({number:id}).destroy();
	},

	componentWillMount: function() {
		this.getContacts();
		setInterval(this.getContacts, this.props.pollInterval);
	},

	componentDidMount: function () {
		// var Router = Backbone.Router.extend({
		// 	routes : {
		// 		"delete_contact/:id" : "deleteContact"
		// 	},
		// 	initialize : function () {
		// 		console.log("Initialize router of ContactsTable component");
		// 	},
		// 	deleteContact : function (id){
		// 		console.log("=== delete contact ===", id);
		// 		new ContactModel({number:id}).destroy();
		// 		this.navigate('/');
		// 	}
		// });
		// this.router = new Router()
	}

});

module.exports = ContactsTable;
