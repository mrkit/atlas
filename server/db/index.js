const conn = require('./conn');
const Sequelize = conn.Sequelize;
const Users = require('./Users');
const Topics = require('./Topics');
const seed = require('./seed');

module.exports = {
	conn,
    seed,
	models: {
      Users, Topics
    }
}