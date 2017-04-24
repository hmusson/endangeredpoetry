// Node app 

require('./app_api/models/db.js');  // using mongoose to connect to DB 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var routesApi = require('./app_api/routes/index');

app.set('port', process.env.PORT);

app.use(bodyParser.urlencoded({ extended: 'true' })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); 

app.use('/api', routesApi); 

app.use(express.static(path.join(__dirname, 'app_client')));

var server = app.listen(app.get('port'), function() {
       console.log('I am listening on port ' + server.address().port);
});



