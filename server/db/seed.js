const Topics = require('./Topics');

const seed = () => {
  return Promise.all([
    Topics.create({ name: 'Algorithms'}),
    Topics.create({ name: 'JavaScript'}),
    Topics.create({ name: 'React'}),
    Topics.create({ name: 'CSS'}),
    Topics.create({ name: 'Webpack'})
  ])
}

module.exports = seed;