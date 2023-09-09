const router = require('express').Router();
const admProduts = require('./routers/admProducts.route');
const fallback = require('./routers/fallback.route');

router.use(admProduts);
router.use(fallback);

module.exports = router;