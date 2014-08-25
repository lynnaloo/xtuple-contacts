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
			contactsRows = models.map(function(contact){
				var deleteLink = "#delete_contact/" + contact.id;

			return (
				<tr>
					<td>{contact.get('number')}</td>
					<td>{contact.get('firstName')}</td>
					<td>{contact.get('lastName')}</td>
					<td><a href={deleteLink}>delete{" "}{contact.id}</a></td>
				</tr>
			);
		});

		return (
			<div className="table-responsive">
				<strong>{this.state.message}</strong>
				<table className="table table-striped table-bordered table-hover" >
					<thead>
						<tr>
							<th>Number</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Remove?</th>
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
				new ContactModel({_id:id}).destroy();
				this.navigate('/');
			}
		});
		this.router = new Router()
	}

});

module.exports = ContactsTable;
