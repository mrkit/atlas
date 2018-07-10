const router = require('express').Router();

router.use('/topics', require('./topics'));

module.exports = router;