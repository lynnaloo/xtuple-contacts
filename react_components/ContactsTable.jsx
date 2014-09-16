/** @jsx React.DOM */

(function () {
	'use strict';

	var React = require('react'),
		Backbone = require('backbone'),
		ContactItem = require('./ContactItem.jsx');

	var TableMixin = {
		/*
			Set default value of the model array and message.
		*/
		getInitialState: function () {
			return {data : [], message : ''};
		},

		/*
			Fetch the models for the model collection.
		*/
		getModels: function () {
			var models = new this.props.Collection();

			models.fetch()
				.done(function(data){
					this.setState({data: models, message: ''});
				}.bind(this))
				.fail(function(err){
					this.setState({
						message: err.responseText + ' ' + err.statusText
					});
				}.bind(this));
		},

		/*
			Destroy this selected model.
		*/
		deleteModel: function (model) {
			model.destroy()
				.done(function(data){
					// refresh the data
					this.setState({data: this.state.data, message: ''});
				}.bind(this))
				.fail(function(err){
					this.setState({
						message: err.responseText + ' ' + err.statusText
					});
				}.bind(this));
		},

		/*
			Send model to edit function in parent component.
		*/
		editModel: function (model) {
			this.props.onEditForm(model);
		},

		/*
			Get the collection of models for this table.
		*/
		componentWillMount: function() {
			this.getModels();
			setInterval(this.getModels, this.props.pollInterval);
		}
	};

	var ContactsTable = React.createClass({
		mixins: [TableMixin], // Mixin common table logic

		render: function () {
			var models = this.state.data,
				tableRows = models.map(function (model) {
					return (
						<ContactItem
							key={model.get('number')}
							data={model}
							onDelete={this.deleteModel.bind(this, model)}
							onEdit={this.editModel.bind(this, model)}
						/>
					);
				}, this);

			return (
				<div>
					<div className="panel panel-default">
						<div className="panel-heading">
							<button className="btn btn-primary pull-right" onClick={this.editModel.bind(this, null)}>
								<span className="glyphicon glyphicon-plus"/> Add
							</button>
							<div className="clearfix"></div>
						</div>
						<div className="table-responsive">
							<table className="table table-striped table-bordered table-hover" >
								<thead>
									<tr>
										<th className="col-md-1">Number</th>
										<th className="col-md-1">Honorific</th>
										<th className="col-md-3">First Name</th>
										<th className="col-md-3">Last Name</th>
										<th className="col-md-1">Actions</th>
									</tr>
								</thead>
								<tbody>
									{tableRows}
								</tbody>
							</table>
						</div>
					</div>
					<div><strong>{this.state.message}</strong></div>
				</div>
			);
		}
	});

	module.exports = ContactsTable;

}());
