const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config.js').dbConfig;
const Products = require('./Products');
const Styles = require('./Styles');
const Features = require('./Features');
const Photos = require('./Photos');
const Skus = require('./Skus');
const Related = require('./Related');


const sequelize = new Sequelize(dbConfig.name, dbConfig.user, dbConfig.password, {
  host: 'localhost',
  dialect: 'postgres'
});

const models = {
  Products: Products(sequelize, DataTypes),
  Styles: Styles(sequelize, DataTypes),
  Features: Features(sequelize, DataTypes),
  Photos: Photos(sequelize, DataTypes),
  Skus: Skus(sequelize, DataTypes),
  Related: Related(sequelize, DataTypes)
}

Object.keys(models).forEach((modelName => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
}))

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;
