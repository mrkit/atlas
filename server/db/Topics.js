const conn = require('./conn');
const Sequelize = conn.Sequelize;

const Topics = conn.define('topic', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  }
}, {
  hooks: {
    beforeCreate(topic){
      topic.name = topic.name[0].toUpperCase() + topic.name.slice(1);
    }
  }
});

module.exports = Topics;