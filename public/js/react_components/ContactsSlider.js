/** @jsx React.DOM */

var React   = require('react'),
  ContactForm = require('./ContactForm'),
  ContactsTable = require('./ContactsTable'),
  ContactsCollection = require('../modules/models/ContactsCollection'),
  ContactModel = require('../modules/models/ContactModel');

var ContactsSlider = React.createClass({
  /*
    When the form is submitted, the carousel moves
      back and pauses.
  */
  handleFormSubmit: function (model) {
    this.refs.table.setState();
    $(this.refs.carousel.getDOMNode()).carousel('prev');
    $(this.refs.carousel.getDOMNode()).carousel('pause');
    return false;
  },

  /*
    When the add or edit buttons are clicks, the carousel (slider)
      goes forward and pauses.
  */
  handleEditForm: function (model) {
    this.refs.form.setState({model: model}); // add callback?
    $(this.refs.carousel.getDOMNode()).carousel('next');
    $(this.refs.carousel.getDOMNode()).carousel('pause');
    return false;
  },

  render: function () {
    return (
      <div id="slider" className="carousel slide" ref="carousel">
        <div className="carousel-inner">
          <div className="active item">
            <ContactsTable
              pollInterval={1000}
              ref='table'
              onEditForm={this.handleEditForm}
              Collection={ContactsCollection}/>
          </div>
          <div className="item">
            <ContactForm
              onFormSubmit={this.handleFormSubmit}
              ref='form'
              Model={ContactModel}/>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ContactsSlider;
