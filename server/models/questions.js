const axios = require('axios');
const config = require('../.././config.js');

module.exports = {
  getQuestions: function(id) {
    let options = {
      method: 'GET',
      url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=${id}`,
      headers: {
        'User-Agent': 'request',
        'Authorization': `${config.TOKEN}`
      }
    };
    return axios(options);
  }
}