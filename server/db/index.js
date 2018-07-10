const conn = require('./conn');
const Sequelize = conn.Sequelize;
const Users = require('./Users');
const Topics = require('./Topics');

module.exports = {
	conn,
	models: {
      Users, Topics
    }
}