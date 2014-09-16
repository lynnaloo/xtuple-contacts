/** @jsx React.DOM */

(function () {
	'use strict';

	var React = require('react'),
		Backbone = require('backbone'),
		ContactsSlider = require('../react_components/ContactsSlider.jsx');

	Backbone.$ = window.$;
	Backbone.history.start();

	React.renderComponent(
		<ContactsSlider />,
		document.querySelector('ContactsSlider')
	);

}());
