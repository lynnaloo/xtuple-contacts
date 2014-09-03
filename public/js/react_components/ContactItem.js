/** @jsx React.DOM */

var React = require('react'),
  Backbone = require('backbone');

var ContactItem = React.createClass({

  getInitialState: function() {
    return {data : []};
  },

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
            <div className="btn-group">
              <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                Other
                <span className="caret"></span>
              </button>
              <ul className="dropdown-menu" role="menu"></ul>
            </div>
          </div>
        </td>
      </tr>
    );
  }
});

module.exports = ContactItem;
