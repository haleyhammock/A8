var help = require('../help.json');

exports.viewHelp = function(req, res){
  res.render('help', help);
};