var Works = require('../models/works.js');


exports.all = function(req, res){
	Works.all(function(err, docs){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(docs);

	})
};

exports.findById = function(req, res){
	var _id = req.params.id;
	Works.findById(_id, function(err, doc){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(doc);
	});	
};

exports.createMany = function(req, res){
	var list = req.body;
	var works = [];
	for (var i = list.length - 1; i >= 0; i--) {
		works[i] = {
			title: list[i].title,
			status: list[i].status,
			description: list[i].description,
			date: list[i].date,
			location: list[i].location
		};
	}
	console.log(works);
	Works.createMany(works, function(err, result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(works);
	});
};

exports.create = function(req, res){
	var work = {
		title: req.body.title,
		status: req.body.status,
		description: req.body.description,
		date: req.body.date,
		location: req.body.location
	};
	Works.create(work, function(err, result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(work);
	});
};



exports.update = function(req, res){
	var _id = req.params.id;
	var _newData = {
		title: req.body.title,
		status: req.body.status,
		description: req.body.description,
		date: req.body.date,
		location: req.body.location
	}

	Works.update(_id, _newData, function(err, result){
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);
	})
};

exports.delete = function(req, res){
	var _id = req.params.id;
	Works.delete(_id, function(err, result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
			res.sendStatus(200);
	});
}


