/** @jsx React.DOM */

var React = require('react'),
	InputWidget = require('./InputWidget');

var FormMixin = {

	getInitialState: function () {
		return {
			model : null,
			message : ""
		};
	},

	validationState: function (event) {
		if (!event.target.value) {
			return 'error';
		}
		return 'success';
	},

	handleChange: function (event) {
		this.state.model.set(event.target.id, event.target.value);
	},

	handleSubmit : function () {
		this.state.model.save()
			.done(function(model) {
				this.setState({
					message : 'Successful save!'
				});
			}.bind(this))
			.fail(function(err) {
				this.setState({
					message  : err.responseText + " " + err.statusText
				});
			}.bind(this));

		this.props.onContactSubmit({number: model.number});
		return false;
	},

	componentWillMount: function () {
		if (!this.state.model) {
			var newModel = new this.props.Model();
			this.setState({ model: newModel });
		}
	}
};

var ContactForm = React.createClass({
	mixins: [FormMixin], // Mixin common form logic

	render: function () {
		return (
			<div className="panel panel-default">
				<div className="panel-body">
					<form role="form" onSubmit={this.handleSubmit} >
						<div className="form-group">
							<InputWidget
								id="number"
								value={this.state.model.get('number')}
								placeholder="number"
								label="Number"
								style={this.validationState}
								ref="number"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<InputWidget
								id="honorific"
								value={this.state.model.get('honorific')}
								placeholder="honorific"
								label="Honorific"
								style={this.validationState}
								ref="honorific"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<InputWidget
								id="firstName"
								value={this.state.model.get('firstName')}
								placeholder="first name"
								label="First Name"
								style={this.validationState}
								ref="firstName"
								onChange={this.handleChange}
							/>
						</div>
						<div className="form-group">
							<InputWidget
			          id="lastName"
			          value={this.state.model.get('lastName')}
			          placeholder="last name"
			          label="Last Name"
			          style={this.validationState}
			          ref="lastName"
			          onChange={this.handleChange}
							/>
						</div>
							<input className="btn btn-primary" type="submit" value="Save"/>
						<div className="form-group"><strong>{this.state.message}</strong></div>
					</form>
				</div>
			</div>
		);
	}
});

module.exports = ContactForm;
