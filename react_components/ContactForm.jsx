/** @jsx React.DOM */

var React = require('react'),
	InputWidget = require('./InputWidget.jsx'),
	ContactModel = require('../modules/models/ContactModel');

var FormMixin = {

	/*
		Default values for model and
			message.
	*/
	getInitialState: function () {
		return {
			model : new ContactModel(),
			message : ""
		};
	},

	/*
		Depending on validation, add the css
			class for success or error.
	*/
	validationState: function (event) {
		return event.target.value ? 'success' : 'error';
	},

	/*
		Handles widget onChange event.
	*/
	handleChange: function (event) {
		this.state.model.set(event.target.id, event.target.value);
		return false;
	},

	/*
		Handle submission of form. Save model
			and send primary key to the callback.
	*/
	handleSubmit: function (event) {
		this.state.model.save()
			.done(function(model) {
				this.setState({
					message: 'Successful save!'
				});
			}.bind(this))
			.fail(function(err) {
				this.setState({
					message: err.responseText + " " + err.statusText
				});
			}.bind(this));

		this.props.onModelSubmit({number: model.number});
		return false;
	},

	/*
		Don't persist the model and pass
			an empty object to the callback.
	*/
	handleCancel: function (event) {
		this.props.onModelSubmit({});
		return false;
	}
};

var ContactForm = React.createClass({
	mixins: [FormMixin], // Mixin common form logic

	render: function () {

		return (
			<div className="panel panel-default">
				<div className="panel-body">
					<form role="form">
						<InputWidget
							id="number"
							value={this.state.model.get('number')}
							placeholder="number"
							label="Number"
							style={this.validationState}
							ref="number"
							onChange={this.handleChange}
						/>
						<InputWidget
							id="honorific"
							value={this.state.model.get('honorific')}
							placeholder="honorific"
							label="Honorific"
							style={this.validationState}
							ref="honorific"
							onChange={this.handleChange}
						/>
						<InputWidget
							id="firstName"
							value={this.state.model.get('firstName')}
							placeholder="first name"
							label="First Name"
							style={this.validationState}
							ref="firstName"
							onChange={this.handleChange}
						/>
						<InputWidget
		          id="lastName"
		          value={this.state.model.get('lastName')}
		          placeholder="last name"
		          label="Last Name"
		          style={this.validationState}
		          ref="lastName"
		          onChange={this.handleChange}
						/>
						<div className="btn-group">
							<button className="btn btn-primary" onClick={this.handleSubmit}>
								<span className="glyphicon glyphicon-ok"/> Save
							</button>
							<button className="btn btn-default" onClick={this.handleCancel}>
								<span className="glyphicon glyphicon-remove"/> Cancel
							</button>
						</div>
						<div className="form-group"><strong>{this.state.message}</strong></div>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = ContactForm;
