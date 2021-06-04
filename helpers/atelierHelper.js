const axios = require('axios');
const config = require('../config.js');

let getProduct = (id, cb) => {
  console.log('get prods');

  let options = {
    method: 'GET',
    url: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `${config.TOKEN}`
    }
  };
  return axios(options);
}

module.exports = getProduct;