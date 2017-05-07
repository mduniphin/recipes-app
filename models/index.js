var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
	title: String,
	author: String,
	ingredients: String,
	instructions: String, 
	date: Date,
	is_active: Schema.Types.Boolean
});

module.exports = mongoose.model('recipes', schema);