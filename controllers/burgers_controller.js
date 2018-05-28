const express = require('express');
const burger = require('../models/burger.js');
const router = express.Router();

router.get('/', function (req, res) {
	burger.selectAll(function(burger_data){
		console.log(burger_data);
		res.render('index');
	})
	
});

module.exports = router;