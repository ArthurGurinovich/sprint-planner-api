var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

var baseCollection = 'tasks';


exports.all = function(callback){
	db.get().collection('tasks').find().toArray(function(err, docs){
		callback(err, docs);
	});
};

exports.findById = function(id, callback){
	db.get().collection(baseCollection).findOne({_id: ObjectID(id)}, function(err, doc){
		callback(err, doc);
	});
};


exports.create = function(work, callback){
	db.get().collection(baseCollection).insert(work, function(err, result){
		callback(err, result);
	})
};

exports.update = function(id, newData, callback){
	db.get().collection(baseCollection).updateOne(
		{_id: ObjectID(id)},
		newData, 
		function(err, result){
			callback(err, result);
	});
};

exports.delete = function(id, callback){
	db.get().collection(baseCollection).deleteOne(
		{_id: ObjectID(id)},
		function(err, result){
			callback(err, result);
		}
	)
};