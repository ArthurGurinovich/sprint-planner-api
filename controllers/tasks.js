var Tasks = require('../models/tasks.js');

exports.all = function(req, res){
	Tasks.all(function(err, docs){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(docs);

	})
};

exports.findById = function(req, res){
	var _id = req.params.id;
	Tasks.findById(_id, function(err, doc){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(doc);
	});	
};

exports.create = function(req, res){
	var task = {
		key: req.body.key,
        title: req.body.title,
		spoints: req.body.spoints,
		time: req.body.time,
		tester: req.body.tester,
		status: req.body.status,
        check: req.body.check,
        test: req.body.test,
        review: req.body.review,
        ios: req.body.ios,
        android: req.body.android,
        screen: req.body.screen
	};
	Tasks.create(task, function(err, result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(task);
	});
};

exports.update = function(req, res){
	var _id = req.params.id;
	var _newData = {
		key: req.body.key,
        title: req.body.title,
		spoints: req.body.spoints,
		time: req.body.time,
		tester: req.body.tester,
		status: req.body.status,
        check: req.body.check,
        test: req.body.test,
        review: req.body.review,
        ios: req.body.ios,
        android: req.body.android,
        screen: req.body.screen
	}

	Tasks.update(_id, _newData, function(err, result){
			if(err){
				console.log(err);
				return res.sendStatus(500);
			}
			res.sendStatus(200);
	})
};

exports.delete = function(req, res){
	var _id = req.params.id;
	Tasks.delete(_id, function(err, result){
		if(err){
			console.log(err);
			return res.sendStatus(500);
		}
			res.sendStatus(200);
	});
}


