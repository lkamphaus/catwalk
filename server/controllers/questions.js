var models = require('../models');

module.exports = {
  get: function(req, res) {
    models.questions.getQuestions(req.query.product_id)
    .then((response) => {
      // console.log(response);
     res.status(200).end(JSON.stringify(response.data));
    })
    .catch(err => {
      console.log('err', err);
      res.status(400).end();
    })
  },

  put: function(req, res) {
    models.questions.putQuestionHelpful({
      questionId: req.params.question_id,
      helpfulness: req.body.helpfulness
    })
    .then((response) => {
      console.log(response);
     res.status(204).end();
    })
    .catch(err => {
      console.log('err', err);
      res.status(400).end();
    })
  },

  postAnswer: function(req, res) {
    models.questions.postAnswer({
        questionId: req.params.question_id,
        name: req.body.name,
        email: req.body.email,
        body: req.body.body,
      })
    .then((response) => {
      console.log(response);
     res.status(201).end();
    })
    .catch(err => {
      console.log('err', err);
      res.status(400).end();
    })
  }
}