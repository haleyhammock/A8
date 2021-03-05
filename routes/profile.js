var data = require('../data.json');

exports.viewProfile = function(req, res){
  res.render('profile',data);
};