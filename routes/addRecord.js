var data = require("../data.json");

exports.addRecord = function(req, res) { 
	if (req.query.input1 != ""){
		var input = req.query.input1;
		var unit = " hour(s) of sleep"
	} else if (req.query.input2 != ""){
		var input = req.query.input2;
		var unit = " happiness level"
	} else if (req.query.input3 != "") {
		var input = req.query.input3;
		var unit = " hour(s) exercise"
	}
	var newRecord = {
		"date": req.query.date,
		"title": req.query.title,
		"subject": req.query.subject,
		"input": input,
		"unit": unit
	};
	data.records.push(newRecord);
	res.render("record", data);
}