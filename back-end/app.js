const express = require('express');
const app = express();
const port = process.env.PORT || 3211;
const handlebars = require('handlebars');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotevn = require('dotenv').config()
// routes
const routes = require('./routes/routes.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, function() {
  console.log("listening on port" + port);
});

module.exports = app;
