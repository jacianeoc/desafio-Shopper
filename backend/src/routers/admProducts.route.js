const router = require('express').Router();
const admProducts  = require('../controllers/admProducts.controller');

router.get('/readjustmentPrice', admProducts.readjustmentPrice);
router.get('/listProducts', admProducts.listProducts);

module.exports = router;
