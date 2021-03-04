var data = require('../data.json');

console.log(data["name"]);

exports.view = function(req, res){
  res.render('index', data);
  //console.log(data.name);

};

exports.login = function(req, res) {
	res.render('login');
}
