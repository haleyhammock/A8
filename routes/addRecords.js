var data = require("../data.json");

exports.addData = function(request, response) { 
	// Your code goes here
	if(request.query.sleep != ''){
		var title = request.query.sleep;
		var ques = "How many hours did you sleep last night?";
	}
	if(request.query.moody != ''){
		var title = request.query.moody;
		var ques = "On a scale of 1 to 10 how happy were you yesterday?";
	}
	if(request.query.exercise != ''){
		var title = request.query.exercise;
		var ques = "How many hours of excercise did you get yesterday?";
	}
	var recordData = {
		"date": request.query.date,
		"title": request.query.titleRecord,
		"subject": request.query.subject,
		"question": ques,
		"input": title
	
	};
	console.log(request.query.date);
	console.log(request.query.titleRecord);
	console.log(data.records);
	data.records.push(recordData);
	console.log(recordData);
	//console.log(records["data"]);*/
	response.render("record", data);
	
}
