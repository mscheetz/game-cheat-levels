const levels = require('./levels.route');
const router = require('express').Router();

router.use('/levels', levels);

module.exports = router;
