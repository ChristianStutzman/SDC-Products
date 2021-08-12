const getProducts = require('./products').getProducts;
const getSingleProduct = require('./products').getSingleProduct;
const getStyles = require('./styles').getStyles;
const getRelated = require('./related').getRelated;

module.exports = {
  getProducts,
  getSingleProduct,
  getStyles,
  getRelated
}