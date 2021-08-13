require('newrelic');
const express = require('express');
const cors = require('cors');
const app = express();
const models = require('../models');
const routes = require('./routes');

app.use(cors())

app.get('/products', routes.getProducts);

app.get('/products/:product_id', routes.getSingleProduct);

app.get('/products/:product_id/styles', routes.getStyles);

app.get('/products/:product_id/related', routes.getRelated);

models.sequelize.sync().then(x => {
  app.listen('8080', () => {
    console.log('listening on port 8080')
  })
}).catch(err => console.log(err))