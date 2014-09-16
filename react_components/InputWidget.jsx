/** @jsx React.DOM */

(function () {
  'use strict';

  var React = require('react'),
    rb = require('react-bootstrap'),
    Input = rb.Input;

  var InputWidget = React.createClass({
    propTypes: {},

    getDefaultProps: function() {
      return {
        type: 'text'
      };
    },

    render: function () {
      return (
        <div className="form-group">
          <Input
            type={this.props.type}
            id={this.props.id}
            value={this.props.value}
            placeholder={this.props.placeholder}
            label={this.props.label}
            bsStyle={this.props.style}
            hasFeedback
            ref={this.props.ref}
            groupClassName="group-class"
            wrapperClassName="wrapper-class"
            labelClassName="label-class"
            onChange={this.props.onChange}
          />
        </div>
      );
    },
  });

  module.exports = InputWidget;

}());
