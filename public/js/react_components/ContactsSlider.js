/** @jsx React.DOM */
var React   = require('react'),
  ContactForm = require('./ContactForm'),
  ContactsTable = require('./ContactsTable'),
  ContactModel = require('../modules/models/ContactModel');

var ContactsSlider = React.createClass({

  handleFormSubmit: function (contact) {
    // the contact form was submitted, have carousel go back
    console.log("handle contact submit");

    this.refs.table.setState();

    // slide the carousel to the previous slide and pause
    $(this.refs.theSlider.getDOMNode()).carousel('prev');
    $(this.refs.theSlider.getDOMNode()).carousel('pause');
    return false;
  },

  handleEditForm: function (contact) {
    // the table was clicked, have carousel go forward
    this.refs.form.setState({model: contact}); // add callback?
    // slide the carousel to the next slide and pause
    $(this.refs.theSlider.getDOMNode()).carousel('next');
    $(this.refs.theSlider.getDOMNode()).carousel('pause');
    return false;
  },

  render: function () {
    return (
      <div id="slider" className="carousel slide" ref="theSlider">
        <div className="carousel-inner">
          <div className="active item">
            <ContactsTable pollInterval={1000} onEditForm={this.handleEditForm} ref='table'/>
          </div>
          <div className="item">
            <ContactForm onContactSubmit={this.handleFormSubmit} ref='form' Model={ContactModel}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ContactsSlider;
