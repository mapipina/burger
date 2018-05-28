const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');


const app = express();
app.use(express.static(_dirname + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

