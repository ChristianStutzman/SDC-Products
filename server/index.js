const express = require('express');
const app = express();
const models = require('../models');
const routes = require('./routes');

app.get('/products', routes.getProducts);

app.get('/products/:product_id', routes.getSingleProduct);

app.get('/products/:product_id/styles', routes.getStyles);


models.sequelize.sync().then(x => {
  app.listen('8080', () => {
    console.log('listening on port 8080')
  })
}).catch(err => console.log(err))