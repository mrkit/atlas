const router = require('express').Router();
const { Topics } = require('../db').models;


router.get('/', (req, res, next) => {
  Topics.findAll()
  .then(topics => res.send(topics))
  .catch(next);
});

router.post('/', (req, res, next) => {
	Topics.create({name:req.body.name})
	.then(topic => res.send(topic))
	.catch(next);
})

module.exports = router;