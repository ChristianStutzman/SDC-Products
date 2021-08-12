const models = require('../../models');
const { Op } = require('sequelize');

const getProducts = async (req, res) => {
  let count = req.query.count ?? 5;
  let page = req.query.page ?? 1;
  let lowerLimit = (page - 1) * count + 1;
  let upperLimit = Number(lowerLimit) + Number(count) - 1;
  const products = await models.Products.findAll({
    where: {
      id: {
        [Op.between]: [lowerLimit, upperLimit]
      }
    }
  });
  res.json(products);
}

module.exports = {
  getProducts
}