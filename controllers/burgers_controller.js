const express = require('express');
const burger = require('../models/burger.js');
var router = express.Router();

router.get('/', function (req, res) {
	burger.select(function(burger_data){
		console.log(burger_data);
		res.render('index', {burger_data});
	})
	
});

// router.post('/burgers/update', function(req, res){
// 	burger.update(req.body.burger_id, function(result){
// 		console.log(result);
// 		res.redirect('/');
// 	});
// });

// router.post('/burgers/create', function(req, res){
// 	burger.insert(req.body.burger_name, function(result){
// 		res.redirect('/');
// 	});
// });

module.exports = router;