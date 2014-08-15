/** @jsx React.DOM */

/*
	var ContactsTable = require('../react_components/ContactsTable');
	React.renderComponent(
		<ContactsTable pollInterval={500}/>,
		document.querySelector('ContactsTable')
	);
*/

var React = require('react'),
	Backbone = require('backbone'),
	ContactModel = require('../modules/models/ContactModel'),
	ContactsCollection = require('../modules/models/ContactsCollection');

var ContactsTable = React.createClass({

	getInitialState: function() {
		return {data : [], message : ""};
	},

	render: function() {

		var contactsRows = this.state.data.map(function(contact){
			var deleteLink = "#delete_contact/" + contact._id;

			return (
				<tr>
					<td>{contact.number}</td>
					<td>{contact.firstName}</td>
					<td>{contact.lastName}</td>

					<td><a href={deleteLink}>delete{" "}{contact._id}</a></td>
				</tr>
			);
		});

		return (
			<div className="table-responsive">
				<strong>{this.state.message}</strong>
				<table className="table table-striped table-bordered table-hover" >
					<thead>
						<tr>
							<th>number</th><th>firstName</th><th>lastName</th>
							<th>_id</th>
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
				this.setState({data : contacts.toJSON(), message : Date()});
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
