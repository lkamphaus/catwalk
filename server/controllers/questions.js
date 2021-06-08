var models = require('../models');

module.exports = {
  get: function(req, res) {
    models.questions.getQuestions(req.query.product_id)
    .then((response) => {
      console.log(response);
     res.status(200).end(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('err', err);
      res.status(400).end();
    })
  }
}