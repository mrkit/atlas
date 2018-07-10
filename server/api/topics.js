const router = require('express').Router();
const { Topics } = require('../db').models;


router.get('/', (req, res, next) => {
  Topics.findAll()
  .then(topics => res.send(topics))
  .catch(next);
});

module.exports = router;