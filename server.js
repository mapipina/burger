const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

var PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_Controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});
