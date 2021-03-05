var data = require('../data.json');

console.log(data["name"]);

exports.viewJsondata = function(req, res){
  res.send(data);
  //console.log(data.name);

};
