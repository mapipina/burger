const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.get('/', function (req, res) {
	burger.selectAll(function(burger_data){
		console.log(burger_data);
		res.render('index', {burger_data});
	})
	
});

router.put('/burgers/update', function(req,res){
	burger.updateOne(req.body.burger_id, function(result){
		console.log(result);
		res.redirect('/');
	});
});

router.post('/burgers/create', function(req, res){
	burger.insertOne(req.body.burger_name, function(result){
		res.redirect('/');
	});
});

module.exports = router;