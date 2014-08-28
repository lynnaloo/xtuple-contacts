/** @jsx React.DOM */
var React   = require('react'),
  ContactForm = require('../react_components/ContactForm'),
  ContactsTable = require('../react_components/ContactsTable');

var ContactsSlider = React.createClass({

  getInitialState: function() {
    return {data: []};
  },

  render: function() {
    return (
      <div id="slider" className="carousel slide">
        <div className="carousel-inner">
          <div className="active item">
            <div className="panel panel-default">
              <ContactsTable pollInterval={1000}/>
            </div>
          </div>
          <div className="item">
            <div className="panel panel-default">
              <div className="panel-body">
                <ContactForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ContactsSlider;
