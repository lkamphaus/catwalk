const controller = require('./controllers');
var router = require('express').Router();

router.get('/products/:product_id', controller.products.get);

router.get('/products/:product_id/styles', controller.products.getImgs);

module.exports = router;