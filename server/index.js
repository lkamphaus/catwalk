const express = require('express');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

var port = 3246;

app.listen(port, function() {
  console.log(`listening on port ${port}`)
})