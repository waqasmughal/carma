const Sequelize = require('sequelize');
// initialize database connection
const sequelize = new Sequelize(process.env.DBNAME, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
// include model
db.card = require('./card.server.model.js')(sequelize, Sequelize);

module.exports = db;
