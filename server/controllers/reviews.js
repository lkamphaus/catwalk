var models = require('../models');

module.exports = {
  get: function(req, res) {
    models.reviews.getReviews(req.params.product_id, req.params.page, req.params.count, req.params.sort)
    .then((response) => {
      res.status(200).end(JSON.stringify(response.data.results));
    })
    .catch(err => {
      console.log('err', err);
      res.status(400).end();
    })
  }
}