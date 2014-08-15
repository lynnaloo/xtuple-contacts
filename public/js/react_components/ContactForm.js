/** @jsx React.DOM */

/*
	var ContactForm = require('../react_components/ContactForm');
	React.renderComponent(
		<ContactForm/>,
		document.querySelector('ContactForm')
	);
*/

var React = require('react'),
	ContactModel = require("../modules/models/ContactModel");

var ContactForm = React.createClass({

	getInitialState: function() {
		return {data : [], message : ""};
	},

	render: function() {
		return (
			<form role="form" className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className="form-group">
						<input className="form-control" type="text" placeholder="number" ref="number"/>
				</div>
				<div className="form-group">
						<input className="form-control" type="text" placeholder="honorific" ref="honorific"/>
				</div>
				<div className="form-group">
						<input className="form-control" type="text" placeholder="firstName" ref="firstName"/>
				</div>
				<div className="form-group">
						<input className="form-control" type="text" placeholder="lastName" ref="lastName"/>
				</div>

				<div className="form-group">
					<input className="btn btn-primary" type="submit" value="Add Contact" />
				</div>
				<div className="form-group"><strong>{this.state.message}</strong></div>
			</form>
		);
	},

	componentDidMount: function() {},
	componentWillMount: function() {},
	handleSubmit : function() {
		var number = this.refs.number.getDOMNode().value.trim();
		var honorific = this.refs.honorific.getDOMNode().value.trim();
		var firstName = this.refs.firstName.getDOMNode().value.trim();
		var lastName = this.refs.lastName.getDOMNode().value.trim();

		if (!number) {return false;}
		if (!honorific) {return false;}
		if (!firstName) {return false;}
		if (!lastName) {return false;}

		var data = {};
		data.number = number;
		data.honorific = honorific;
		data.firstName = firstName;
		data.lastName = lastName;

		var contact= new ContactModel(data);

		contact.save()
			.done(function(data) {
				this.setState({
					message : contact.get("_id") + " added!"
				});
				this.refs.number.getDOMNode().value = '';
				this.refs.honorific.getDOMNode().value = '';
				this.refs.firstName.getDOMNode().value = '';
				this.refs.lastName.getDOMNode().value = '';

				this.refs.number.getDOMNode().focus();
			}.bind(this))
			.fail(function(err) {
				this.setState({
					message  : err.responseText + " " + err.statusText
				});
			}.bind(this));

		return false;
	}

});

module.exports = ContactForm;
