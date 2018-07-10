const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Topics = conn.define('topic', {
  name: Sequelize.STRING
});

module.exports = Topics;