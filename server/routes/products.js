const models = require('../../models');
const { Op } = require('sequelize');

const getProducts = async (req, res) => {
  const products = await models.Products.findAll({
    where: {
      id: {
        [Op.lte]: 5
      }
    }
  });
  res.json(products);
}

module.exports = {
  getProducts
}