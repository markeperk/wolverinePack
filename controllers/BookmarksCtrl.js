var Bookmark = require('../models/Bookmark.js'); 

module.exports = {

	addFolder: function(req, res){
		chrome.bookmarks.create({
			'parentId': extensionsFolderId, 
			'title': 'Extension bookmarks'
		},
		function(newFolder) {
			console.log("added folder: ", newFolder.title); 
		}); 
	},

	addBookmark: function(req, res) {
		chrome.bookmarks.create({
			'title': 'Extensions doc', 
			'url': req.body
		}); 
	},

	getBookmarks: function(req, res){
		chrome.bookmarks.getTree(function(bookmarkTree){
			console.log(bookmarkTree); 
			bookmarks = bookmarkTree; 
		})
	}

}
