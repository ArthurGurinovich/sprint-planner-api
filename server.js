var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var worksController = require('./controllers/works');
var tasksController = require('./controllers/tasks');
var usersController = require('./controllers/users');


// API urls
var uriW = '/works';
var uriT = '/tasks';
var uriU = '/users';

var app = express();
app.set('port', (process.env.PORT || 3015));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var options = {
  origin: true,
  methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
  credentials: true,
  maxAge: 3600
};



app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.options([uriW, uriW + '/:id'], cors(options));
app.options([uriT, uriT + '/:id'], cors(options));

app.get('/', function(req, res){
	res.send('API started!');
})

// API Works
app.get(uriW, worksController.all);
app.get(uriW + '/:id', worksController.findById);
app.post(uriW, worksController.create);
app.post(uriW + '/many', worksController.createMany);
app.put(uriW + '/:id', worksController.update);
app.delete(uriW + '/:id', worksController.delete);


// API Tasks
app.get(uriT, tasksController.all);
app.get(uriT + '/:id', tasksController.findById);
app.post(uriT, tasksController.create);
app.put(uriT + '/:id', tasksController.update);
app.delete(uriT + '/:id', tasksController.delete);


// API Users
app.get(uriU, usersController.all);
app.get(uriU + '/:id', usersController.findById);
app.post(uriU, usersController.create);
app.put(uriU + '/:id', usersController.update);
app.delete(uriU + '/:id', usersController.delete);




//db.connect('mongodb://admin:admin@ds149489.mlab.com:49489/raspberriesapi', function(err, database){
db.connect('mongodb://localhost:27017/test', function(err, database){
	if(err){
		return console.log(err);
	}
	app.listen(app.get('port'), function(){
		console.log('API started on Node.js + MongoDB');
	});
});


