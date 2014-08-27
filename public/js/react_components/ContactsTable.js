/** @jsx React.DOM */

var React = require('react'),
	Backbone = require('backbone'),
	ContactModel = require('../modules/models/ContactModel'),
	ContactsCollection = require('../modules/models/ContactsCollection');

var ContactsTable = React.createClass({

	getInitialState: function() {
		return {data : [], message : ""};
	},

	render: function() {
		var models = this.state.data,
			// TODO: replace with another react object for rows
			contactsRows = models.map(function(contact){
				var deleteLink = "#delete_contact/" + contact.get('number');

			return (
				<tr>
					<td>{contact.get('number')}</td>
					<td>{contact.get('honorific')}</td>
					<td>{contact.get('firstName')}</td>
					<td>{contact.get('lastName')}</td>
					<td><button type="button" className="close"><span aria-hidden="true">&times;</span></button></td>
				</tr>
			);
		});

		return (
			<div className="table-responsive">
				<table className="table table-striped table-bordered table-hover" >
					<thead>
						<tr>
							<th className="col-md-1">Number</th>
							<th className="col-md-1">Honorific</th>
							<th className="col-md-4">First Name</th>
							<th className="col-md-4">Last Name</th>
							<th className="col-md-1">Remove?</th>
						</tr>
					</thead>
					<tbody>
						{contactsRows}
					</tbody>
				</table>
			</div>
		);
	},

	getContacts : function() {

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

	componentWillMount: function() {
		this.getContacts();
		setInterval(this.getContacts, this.props.pollInterval);
	},

	componentDidMount: function() {
		var Router = Backbone.Router.extend({
			routes : {
				"delete_contact/:id" : "deleteContact"
			},
			initialize : function() {
				console.log("Initialize router of ContactsTable component");
			},
			deleteContact : function(id){
				console.log("=== delete contact ===", id);
				new ContactModel({number:id}).destroy();
				this.navigate('/');
			}
		});
		this.router = new Router()
	}

});

module.exports = ContactsTable;
