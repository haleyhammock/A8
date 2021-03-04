var data = require("../data.json");

exports.addRecord = function(req, res) { 
	var newRecord = {
		"date": req.query.date,
		"title": req.query.title,
		"subject": req.query.subject,
		"input": req.query.input
	};
	data.records.push(newRecord);
	res.render("record", data);
}