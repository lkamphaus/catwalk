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
     res.status(204).end(JSON.stringify(response));
    })
    .catch(err => {
      console.log('err', err);
      res.status(400).end();
    })
  },

  postAnswer: function(req, res) {
    console.log('req', req.body.data)
    models.questions.postAnswer({
        questionId: req.params.question_id,
        name: req.body.name,
        body: req.body.body,
        email: req.body.email,
      })
    .then((response) => {
      console.log(response);
     res.status(201).end(JSON.stringify(response));
    })
    .catch(err => {
      console.log('err', err);
      res.status(400).end();
    })
  }
}