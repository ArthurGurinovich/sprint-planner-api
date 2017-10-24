var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

var baseCollection = 'users';


exports.all = function(callback){
	db.get().collection(baseCollection).find().toArray(function(err, docs){
		callback(err, docs);
	});
};

exports.findById = function(id, callback){
	db.get().collection(baseCollection).findOne({_id: ObjectID(id)}, function(err, doc){
		callback(err, doc);
	});
};


exports.create = function(user, callback){
	db.get().collection(baseCollection).insertOne(user, function(err, result){
		callback(err, result);
	})
};

exports.createMany = function(users, callback){
	db.get().collection(baseCollection).insertMany(users, function(err, result){
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
	db.get().collection(baseCollection).removeOne(
		{_id: ObjectID(id)},
		function(err, result){
			callback(err, result);
		}
	)
};