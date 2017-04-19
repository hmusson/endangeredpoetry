require('./app_api/models/db.js');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var routes = require('./app_server/routes/index');
var routesApi = require('./app_api/routes/index');

var app = express();

// var index = require('./app_server/routes/index');
// app.use('/', index);

// var users = require('./app_server/routes/users');
// app.use('/users', users);

// var poemList = require('./app_server/routes/poemList');
// app.use('/', poemList);

// view engine setup
app.set('views', path.join(__dirname,'app_server', 'views'));
app.set('view engine', 'jade');

app.set('port', process.env.PORT);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/api', routesApi);

app.use(express.static(path.join(__dirname,'app_server')));

var server = app.listen(app.get('port'), function(){
    console.log('I am listening on port ' + 3000);
        //server.address().port);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});




module.exports = app;

// Wow!