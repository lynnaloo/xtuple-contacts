/** @jsx React.DOM */
var React   = require('react'),
  ContactForm = require('../react_components/ContactForm'),
  ContactsTable = require('../react_components/ContactsTable');

var ContactsSlider = React.createClass({

  getInitialState: function () {
    return {data: []};
  },

  handleContactSubmit: function (contact) {
    // the contact form was submitted, have carousel go back
    console.log("handle contact submit");
    return false;
  },

  handleTableRowClick: function (contact) {
    // the table was clicked, have carousel go forward
    console.log("handle table row click");
    return false;
  },

  render: function () {
    return (
      <div id="slider" className="carousel slide">
        <div className="carousel-inner">
          <div className="active item">
            <div className="panel panel-default">
              <ContactsTable pollInterval={1000} onTableRowClick={this.handleTableRowClick}/>
            </div>
          </div>
          <div className="item">
            <div className="panel panel-default">
              <div className="panel-body">
                <ContactForm onContactSubmit={this.handleContactSubmit} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ContactsSlider;
