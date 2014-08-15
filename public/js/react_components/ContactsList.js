/** @jsx React.DOM */

/*
	var ContactsList = require('../react_components/ContactsList'); 
	React.renderComponent(
		<ContactsList pollInterval={500}/>,
		document.querySelector('ContactsList')
	);
*/

var React = require('react')
	, Backbone = require("backbone")
	, ContactModel = require("../modules/models/ContactModel")
	, ContactsCollection = require("../modules/models/ContactsCollection");

var ContactsList = React.createClass({

	getInitialState: function() {
		return {data : [], message : ""};
	},

	render: function() {

		var contactsNodes = this.state.data.map(function(contact){
			var deleteLink = "#delete_contact/" + contact._id;

			return (
				<li>
					{contact.number}{" "}
					{contact.firstName}{" "}
					{contact.lastName}{" "}
					<a href={deleteLink}>delete</a>
				</li>
				
			);
		});

		return (
			<div>
				<strong>{this.state.message}</strong>
				<ul>
					{contactsNodes}
				</ul>
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
				"delete_contact/:id" : "contact"
			},
			initialize : function() {
				console.log("Initialize router of ContactsList component");
			},
			contact : function(id){
				console.log("=== delete contact ===", id);
				new ContactModel({_id:id}).destroy();
				this.navigate('/');
			}
		});
		this.router = new Router()
	}	

});

module.exports = ContactsList;

