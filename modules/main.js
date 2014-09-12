/** @jsx React.DOM */
var React   = require('react'),
	Backbone = require("backbone");
Backbone.$ = window.$;

var ContactsSlider = require('../react_components/ContactsSlider'),
	ContactsForm = require('../react_components/ContactForm'),
	ContactsTable = require('../react_components/ContactsTable');

Backbone.history.start();

React.renderComponent(
	<ContactsSlider />,
	document.querySelector('ContactsSlider')
);
