const models = require('../../models');
const { Op, IndexHints } = require('sequelize');

const getProducts = async (req, res) => {
  let count = req.query.count ?? 5;
  let page = req.query.page ?? 1;
  let lowerLimit = (page - 1) * count + 1;
  let upperLimit = Number(lowerLimit) + Number(count) - 1;
  const products = await models.Products.findAll({
    indexHints: [
      { type: IndexHints.USE, values: ['idx_product_id_products']}
    ],
    where: {
      id: {
        [Op.between]: [lowerLimit, upperLimit]
      }
    }
  });
  res.json(products);
}

const getSingleProduct = async (req, res) => {
  const productId = req.params.product_id;
  let productInfo = await models.Products.findAll({
    attributes: ['id', 'name', 'slogan', 'description', 'category', 'default_price'],
    indexHints: [
      { type: IndexHints.USE, values: ['idx_product_id_products']}
    ],
    where: {
      id: productId
    }
  })
  productInfo[0].dataValues.features = await models.Features.findAll({
    attributes: ['feature', 'value'],
    indexHints: [
      { type: IndexHints.USE, values: ['idx_product_id_features']}
    ],
    where: {
      product_id: productId
    }
  })
  res.json(productInfo[0]);
}

module.exports = {
  getProducts,
  getSingleProduct
}