/** @jsx React.DOM */

var React = require('react'),
	ContactModel = require("../modules/models/ContactModel"),
	_ = require('underscore');

var ContactForm = React.createClass({

	getInitialState: function () {
		return {data : {}, message : ""};
	},

	render: function () {
		var contact = this.state.data,
			number = "",
			honorific = "",
			firstName = "",
			lastName = "";

		if (!_.isEmpty(contact)) {
			number = contact.get('number');
			honorific = contact.get('honorific');
			firstName = contact.get('firstName');
			lastName = contact.get('lastName');
		}

		return (
			<div className="panel panel-default">
				<div className="panel-body">
					<form role="form" onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label for="inputNumber">Number</label>
							<input className="form-control" id="inputNumber" type="text"
								placeholder="number" ref="number" value={number}/>
						</div>
						<div className="form-group">
							<label for="inputHonorific">Honorific</label>
							<input className="form-control" type="text" id="inputHonorific"
								placeholder="honorific" ref="honorific" value={honorific}/>
						</div>
						<div className="form-group">
							<label for="inputFirstName">First Name</label>
							<input className="form-control" type="text" id="inputFirstName"
								placeholder="first name" ref="firstName" value={firstName}/>
						</div>
						<div className="form-group">
							<label for="inputLastName">Last Name</label>
							<input className="form-control" type="text" id="inputLastName"
								placeholder="last name" ref="lastName" value={lastName}/>
						</div>
						<div className="form-group">
							<input className="btn btn-primary" type="submit" value="Save" />
						</div>
						<div className="form-group"><strong>{this.state.message}</strong></div>
					</form>
				</div>
			</div>
		);
	},

	componentDidMount: function () {},
	componentWillMount: function () {},

	handleSubmit : function () {
		var number = this.refs.number.getDOMNode().value.trim();
		var honorific = this.refs.honorific.getDOMNode().value.trim();
		var firstName = this.refs.firstName.getDOMNode().value.trim();
		var lastName = this.refs.lastName.getDOMNode().value.trim();

		// TODO: replace with validation
		if (!number) {return false;}
		if (!honorific) {return false;}
		if (!firstName) {return false;}
		if (!lastName) {return false;}

		var data = {};
		data.number = number;
		data.honorific = honorific;
		data.firstName = firstName;
		data.lastName = lastName;

		// TODO: Create new or save existing
		// var contact = new ContactModel(data);
		//
		// contact.save()
		// 	.done(function(data) {
		// 		this.setState({
		// 			message : contact.get('number') + " added!"
		// 		});
		// 		// TODO: move this to a clear function
		// 		this.refs.honorific.getDOMNode().value = '';
		// 		this.refs.firstName.getDOMNode().value = '';
		// 		this.refs.lastName.getDOMNode().value = '';
		//
		// 		this.refs.number.getDOMNode().focus();
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
