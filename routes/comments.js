var comments = require("../comments.json");

exports.comment = function(request, response) { 
	var commentData = {
		"comment": request.query.topicComment
	};
	comments.comments.push(commentData);
	console.log(comments);
	//console.log(records["data"]);
	response.render("forum", comments);
}