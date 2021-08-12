const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config.js').dbConfig;
const Products = require('./Products');
const Styles = require('./Styles');
const Features = require('./Features');
const Photos = require('./Photos');
const Skus = require('./Skus');


const sequelize = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
  host: 'localhost',
  dialect: 'postgres'
});

const models = {
  Products: Products(sequelize, DataTypes),
  Styles: Styles(sequelize, DataTypes),
  Features: Features(sequelize, DataTypes),
  Photos: Photos(sequelize, DataTypes),
  Skus: Skus(sequelize, DataTypes)
}

Object.keys(models).forEach((modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
}))

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;

// let test = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// }

// test();