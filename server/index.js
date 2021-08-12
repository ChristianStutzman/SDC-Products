const express = require('express');
const app = express();
const models = require('../models')


models.sequelize.sync().then(x => {
  app.listen('8080', () => {
    console.log('listening on port 8080')
  })
  //console.log(models.Products)
  models.Products.findByPk(1).then(res => console.log(res)).catch(err => console.log(err))
}).catch(err => console.log(err))