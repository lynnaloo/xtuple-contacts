/** @jsx React.DOM */
var React   = require('react');
var Backbone = require("backbone");
var About = require('../react_components/About');

var HumanForm = require('../react_components/ContactForm');
var HumansTable = require('../react_components/ContactsTable');

Backbone.history.start();

React.renderComponent(
	<ContactsTable pollInterval={500}/>,
	document.querySelector('ContactsTable')
);

React.renderComponent(
  <ContactForm/>,
  document.querySelector('ContactForm')
);
