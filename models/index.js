const { Sequelize } = require('sequelize');
const dbConfig = require('../config.js').dbConfig;


const sequelize = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
  host: 'localhost',
  dialect: 'postgres'
});

let test = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

test();