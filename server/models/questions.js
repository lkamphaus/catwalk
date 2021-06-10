const axios = require('axios');
const config = require('../.././config.js');

module.exports = {
  getQuestions: function(productId) {
    let options = {
      method: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${productId}`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `${config.TOKEN}`
      }
    };
    return axios(options);
  },

  putQuestionHelpful: function({questionId, helpfulness}) {
    let options = {
      method: 'PUT',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionId}/helpful`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `${config.TOKEN}`
      },
      data: {
        helpfulness
      }
    };
    return axios(options);
  },

  postAnswer: function({questionId, name, body, email}) {
    let options = {
      method: 'POST',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions/${questionId}/answers`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `${config.TOKEN}`
      },
      data: {
        name,
        email,
        body,
        photos: []
      }
    };
    return axios(options);
  }
}





