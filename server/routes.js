const controller = require('./controllers');
var router = require('express').Router();

router.get('/products/:product_id', controller.products.get);

module.exports = router;