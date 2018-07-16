const router = require('express').Router();
const { Topics } = require('../db').models;


router.get('/', (req, res, next) => {
  Topics.findAll()
  .then(topics => res.send(topics))
  .catch(next);
});

router.post('/', (req, res, next) => {
	Topics.create({ name:req.body.name })
	.then(topic => res.send(topic))
	.catch(next);
})

router.put('/:id', (req, res, next) => {
	Topics.update({ name: req.body.name },{ where: { id:req.params.id } })
	.then(topic => res.send(topic))
	.catch(next);
})

router.get('/:topic', (req, res, next) => {
  const topic = req.params.topic;
  
  Topics.findOne({ where: { name: topic }})
  .then(topic => {
    topic ? res.send(topic) : res.sendStatus(500);
  })
  .catch(next);
})

module.exports = router;