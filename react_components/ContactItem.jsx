/** @jsx React.DOM */

(function () {
  'use strict';

  var React = require('react');

  var ContactItem = React.createClass({

    render: function() {
      var item = this.props.data;

      return (
        <tr>
          <td>{item.get('number')}</td>
          <td>{item.get('honorific')}</td>
          <td>{item.get('firstName')}</td>
          <td>{item.get('lastName')}</td>
          <td>
            <div className="btn-group">
              <button type="button" className="btn btn-default" onClick={this.props.onEdit}>
                <span className="glyphicon glyphicon-pencil"></span>
              </button>
              <button type="button" className="btn btn-default" onClick={this.props.onDelete}>
                <span className="glyphicon glyphicon-remove"></span>
              </button>
            </div>
          </td>
        </tr>
      );
    }
  });

  module.exports = ContactItem;

}());
