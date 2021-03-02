var data = require("../data.json");

exports.addRecord = function(req, res) { 
	// if(req.query.sleep != ''){
	// 	var title = request.query.sleep;
	// 	var ques = "How many hours did you sleep last night?";
	// }
	// if(req.query.moody != ''){
	// 	var title = request.query.moody;
	// 	var ques = "On a scale of 1 to 10 how happy were you yesterday?";
	// }
	// if(req.query.exercise != ''){
	// 	var title = request.query.exercise;
	// 	var ques = "How many hours of excercise did you get yesterday?";
	// }
	var newRecord = {
		"date": req.query.date,
		"title": req.query.title,
		"subject": req.query.subject,
		"question": "Question",
		"input": req.query.input
	};
	data.records.push(newRecord);
	res.render("record", data);
}