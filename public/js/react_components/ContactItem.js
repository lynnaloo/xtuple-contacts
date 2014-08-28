/** @jsx React.DOM */

var React = require('react');

var ContactItem = React.createClass({

  getInitialState: function() {
    return {data : []};
  },

  render: function() {
    var item = this.props.data,
      deleteLink = "#delete_contact/" + item.get('number');

    return (
      <tr>
        <td>{item.get('number')}</td>
        <td>{item.get('honorific')}</td>
        <td>{item.get('firstName')}</td>
        <td>{item.get('lastName')}</td>
        <td><button type="button" className="close"><span aria-hidden="true">&times;</span></button></td>
      </tr>
    );
  }
});

module.exports = ContactItem;
