var posts = require("../posts.json");
var records = require("../data.json");
var comments = require("../comments.json");


exports.post = function(request, response) { 
	var postData = {
		"topic": request.query.topic,
		"message": request.query.message,
		"recordName": request.query.title
	};
	posts.posts.push(postData);
	console.log(posts);
	//console.log(records["data"]);
	response.render("forum", posts);
}

exports.comment = function(request, response) { 
	var commentData = {
		"comment": request.query.topicComment
	};
	comments.comments.push(commentData);
	console.log(comments);
	//console.log(records["data"]);
	response.render("forum", comments);
}

function delete1(){
	delete posts.posts.title['haley'];
	console.log(posts);
}



