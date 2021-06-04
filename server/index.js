const express = require("express");
const atelierHelper = require(".././helpers/atelierHelper.js");

let app = express();

app.use(express.static(__dirname + "/../client/dist"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

var port = 3246;

app.get(`/products/:product_id`, (req, res) => {
  const productId = req.params.product_id;

  atelierHelper(productId)
    .then((response) => {
      console.log("response", response);
      res.status(200).end(JSON.stringify(response.data));
    })
    .catch((err) => {
      console.log("err", response);
      res.status(400).end();
    });
});

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
