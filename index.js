const express = require('express');
const router = require('./server/routes.js');

const port = 3246;
const path = require('path')

let app = express();

app.use(express.static(__dirname + "/client/dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', router);

app.get('/*',  (req, res) => {
  res.sendFile(__dirname + '/client/dist/index.html', function (err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

