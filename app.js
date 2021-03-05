
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var record = require('./routes/record');
var forum = require('./routes/forum');
var help = require('./routes/help');
var profile = require('./routes/profile');
var addRecord = require('./routes/addRecord');
var login = require('./routes/index');
var addPost = require('./routes/addPost');
var forumLink = require('./routes/forumLink');
var deletePosts2 = require('./routes/deletePosts2');
var comments = require('./routes/comments');
var jsondata = require('./routes/jsondata');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.login);
// Example route
// app.get('/users', user.list);
app.get("/home", index.view);
app.get("/record",record.viewRecord);
app.get("/help",help.viewHelp);
app.get("/forum",forum.viewForum);
app.get("/profile",profile.viewProfile);
app.get("/addRecord",addRecord.addRecord);
app.get("/addPost",addPost.post);
app.get("/forumLink", forumLink.link);
app.get("/deletePosts2", deletePosts2.delete);
app.get("/comments", comments.comment);
app.get("/jsondata", jsondata.viewJsondata);
app.get('routes/addRecord.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'login-file.js'));
});
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
