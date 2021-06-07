const controller = require('./controllers');
var router = require('express').Router();

router.get('/products/:product_id', controller.products.get);

router.get('/reviews/:product_id/:page/:count/:sort', controller.reviews.get)


module.exports = router;