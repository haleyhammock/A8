var data = require('../data.json');
var records = require('../records.json');

exports.viewProfile = function(req, res){
  res.render('profile', data);
  
};
