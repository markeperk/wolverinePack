var mongoose = require('mongoose');
var Schema = mongoose.Schema; 

// bookmarkSchema.pre('save', function(next) {
// 	//anything we need to do before saving a bookmark 
// }); 

var bookmarkSchema = new Schema({
	dateAdded: {type: Date, default: Date.now},
	id: {type:String},
	index: {type: String},
	parentId: {type: String},
	title: {type: String},
	url: {type: String}
}); 

module.exports = mongoose.model('Bookmark', bookmarkSchema); 