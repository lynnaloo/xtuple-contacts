/** @jsx React.DOM */

var React = require('react'),
	Backbone = require('backbone'),
	ContactModel = require('../modules/models/ContactModel'),
	ContactsCollection = require('../modules/models/ContactsCollection'),
	ContactItem = require('./ContactItem');

var TableMixin = {
	getInitialState: function () {
		return {data : [], message : ""};
	}

};

var ContactsTable = React.createClass({
	mixins: [TableMixin], // Mixin common table logic

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
			<div>
				<div className="panel panel-default">
					<div className="panel-heading">
						<button className="btn btn-primary pull-right" onClick={this.editContact}>
							<span className="glyphicon glyphicon-plus"></span>
								Add
						</button>
						<div className="clearfix"></div>
					</div>
					<div className="table-responsive">
						<table className="table table-striped table-bordered table-hover" >
							<thead>
								<tr>
									<th className="col-md-1">Number</th>
									<th className="col-md-1">Honorific</th>
									<th className="col-md-3">First Name</th>
									<th className="col-md-3">Last Name</th>
									<th className="col-md-1">Actions</th>
								</tr>
							</thead>
							<tbody>
								{contactsRows}
							</tbody>
						</table>
					</div>
				</div>
				<div><strong>{this.state.message}</strong></div>
			</div>
		);
	},

	getContacts: function () {
		var contacts = new ContactsCollection();

		contacts.fetch()
			.done(function(data){
				this.setState({data: contacts, message: ""});
			}.bind(this))
			.fail(function(err){
				this.setState({
					message: err.responseText + " " + err.statusText
				});
			}.bind(this))
	},

	deleteContact: function (contact) {
		contact.destroy()
			.done(function(data){
				this.setState({data: this.state.data, message: ""});
			}.bind(this))
			.fail(function(err){
				this.setState({
					message: err.responseText + " " + err.statusText
				});
			}.bind(this))
	},

	editContact: function (contact) {
		this.props.onEditForm(contact);
	},

	componentWillMount: function() {
		this.getContacts();
		setInterval(this.getContacts, this.props.pollInterval);
	}
});

module.exports = ContactsTable;
