/** @jsx React.DOM */
var React   = require('react'),
	Backbone = require("backbone");
Backbone.$ = window.$;

var ContactsSlider = require('../react_components/ContactsSlider.jsx');

Backbone.history.start();

React.renderComponent(
	<ContactsSlider />,
	document.querySelector('ContactsSlider')
);
