var Users = require('../models/users.js');


exports.all = function(req, res){
	Users.all(function(err, docs){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(docs);

	})
};

exports.findById = function(req, res){
	var _id = req.params.id;
	Users.findById(_id, function(err, doc){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(doc);
	});	
};

exports.createMany = function(req, res){
	var list = req.body;
	var users = [];
	for (var i = list.length - 1; i >= 0; i--) {
		users[i] = {
			username: list[i].username,
			position: list[i].position,
			description: list[i].description,
			skils: list[i].skils,
			status: list[i].status,
			photo: list[i].photo
		};
	}
	Users.createMany(users, function(err, result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(users);
	});
};

exports.create = function(req, res){
	var list = req.body;
	var user = {
			username: list.username,
			position: list.position,
			description: list.description,
			skils: list.skils,
			status: list.status,
			photo: list.photo
	};
	Users.create(user, function(err, result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(user);
	});
};



exports.update = function(req, res){
	var list = req.body;
	var _id = req.params.id;
	var _newData = {
			username: list.username,
			position: list.position,
			description: list.description,
			skils: list.skils,
			status: list.status,
			photo: list.photo
	}

	Users.update(_id, _newData, function(err, result){
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);
	})
};

exports.delete = function(req, res){
	var _id = req.params.id;
	Users.delete(_id, function(err, result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
			res.sendStatus(200);
	});
}


