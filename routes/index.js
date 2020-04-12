const dmw = require('./dmw.route');
const router = require('express').Router();

router.use('/dmw', dmw);

module.exports = router;
