/** @jsx React.DOM */
var React   = require('react'),
  ContactForm = require('../react_components/ContactForm'),
  ContactsTable = require('../react_components/ContactsTable');

var ContactsSlider = React.createClass({

  handleFormSubmit: function (contact) {
    // the contact form was submitted, have carousel go back
    console.log("handle contact submit");
    // this.refs.theSlider.getDOMNode().focus();
    // $('.carousel').carousel('prev')
    return false;
  },

  handleEditForm: function (contact) {
    // the table was clicked, have carousel go forward
    console.log("show edit form", contact.get('number'));
    this.refs.form.setState({data: contact});
    // todo control slider
    return false;
  },

  render: function () {
    return (
      <div id="slider" className="carousel slide" ref="theSlider">
        <div className="carousel-inner">
          <div className="active item">
            <div className="panel panel-default">
              <ContactsTable pollInterval={1000} onEditForm={this.handleEditForm} ref='table'/>
            </div>
          </div>
          <div className="item">
            <div className="panel panel-default">
              <div className="panel-body">
                <ContactForm onContactSubmit={this.handleFormSubmit} ref='form'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ContactsSlider;
