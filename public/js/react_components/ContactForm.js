/** @jsx React.DOM */

var React = require('react'),
	rb = require('react-bootstrap'),
	Panel = rb.Panel,
	Input = rb.Input,
	ContactModel = require("../modules/models/ContactModel"),
	_ = require('underscore');

var ContactForm = React.createClass({

	getInitialState: function () {
		return {
			data : null
		};
	},

	validationState: function (event) {
		// this should be Backbone valid state
    var length = event.target.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

	handleChange: function (event) {
		this.state.data.set(event.target.id, event.target.value);
  },

	render: function () {
		console.log(this.state.data);

		return (
			<Panel >
				<form role="form" onSubmit={this.handleSubmit} >
					<div className="form-group">
						<Input
							id="number"
							type="text"
							value={this.state.data.get('number')}
							placeholder="number"
							label="Number"
							help=""
							bsStyle={this.validationState}
							hasFeedback
							ref="number"
							groupClassName="group-class"
							wrapperClassName="wrapper-class"
							labelClassName="label-class"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<Input
							id="honorific"
							type="text"
							value={this.state.data.get('honorific')}
							placeholder="honorific"
							label="Honorific"
							help=""
							bsStyle={this.validationState}
							hasFeedback
							ref="honorific"
							groupClassName="group-class"
							wrapperClassName="wrapper-class"
							labelClassName="label-class"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<Input
							id="firstName"
							type="text"
							value={this.state.data.get('firstName')}
							placeholder="first name"
							label="First Name"
							help=""
							bsStyle={this.validationState}
							hasFeedback
							ref="firstName"
							groupClassName="group-class"
							wrapperClassName="wrapper-class"
							labelClassName="label-class"
							onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<Input
		          id="lastName"
							type="text"
		          value={this.state.data.get('lastName')}
		          placeholder="last name"
		          label="Last Name"
		          help=""
		          bsStyle={this.validationState}
		          hasFeedback
		          ref="lastName"
		          groupClassName="group-class"
		          wrapperClassName="wrapper-class"
		          labelClassName="label-class"
		          onChange={this.handleChange}
						/>
					</div>
					<div className="form-group">
						<input className="btn btn-primary" type="submit" value="Save"/>
					</div>
					<div className="form-group"><strong>{this.state.message}</strong></div>
				</form>
			</Panel>
		);
	},

	componentDidMount: function () {},

	componentWillMount: function () {
		var contact = new ContactModel();
		if (!this.state.data) {
			this.setState({ data: contact });
		}
	},

	handleSubmit : function () {
		// this.state.data.save()
		// 	.done(function(data) {
		// 		this.setState({
		// 			message : contact.get('number') + " added!"
		// 		});
		// 		// TODO: go back to initial state
		// 	}.bind(this))
		// 	.fail(function(err) {
		// 		this.setState({
		// 			message  : err.responseText + " " + err.statusText
		// 		});
		// 	}.bind(this));

		this.props.onContactSubmit({number: data.number});

		return false;
	}

});

module.exports = ContactForm;
