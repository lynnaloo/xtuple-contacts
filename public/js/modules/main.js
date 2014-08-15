/** @jsx React.DOM */
var React   = require('react');
var Backbone = require("backbone");
Backbone.$ = window.$;
var About = require('../react_components/About');

var ContactsForm = require('../react_components/ContactForm');
var ContactsTable = require('../react_components/ContactsTable');

Backbone.history.start();

React.renderComponent(
	<ContactsTable pollInterval={500}/>,
	document.querySelector('ContactsTable')
);

React.renderComponent(
  <ContactsForm/>,
  document.querySelector('ContactForm')
);
