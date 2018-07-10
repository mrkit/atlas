const Sequelize = require('sequelize');
const conn = new Sequelize('postgres://localhost/atlas',{logging:false, operatorsAliases:false});

module.exports = conn;