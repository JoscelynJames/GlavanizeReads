const express = require('express');
const app = express();
const port = process.env.PORT || 3211;
const handlebars = require('handlebars');
const cors = require('cors');
app.use(cors());
// routes
const routes = require('./routes/routes.js');

app.use('/', routes);

app.listen(port, function() {
  console.log("listening on port" + port);
});

module.exports = app;
