var mongoose = require('mongoose');

//create a schema
var itemsSchema = new mongoose.Schema({
	itemName: String,
	description: String,
	img: String,
	weight: Number
});

var ItemsList = mongoose.model('ItemsList', itemsSchema);
module.exports = ItemsList;