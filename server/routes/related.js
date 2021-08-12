const models = require('../../models');
const { Op, IndexHints } = require('sequelize');

const getRelated = async (req, res) => {
  const productId = req.params.product_id;
  const related = await models.Related.findAll({
    attributes: ['related_product_id'],
    indexHints: [
      { type: IndexHints.USE, values: ['idx_product_id_related']}
    ],
    where: {
      current_product_id: productId
    }
  })
  res.json(related.map(id => id.related_product_id));
}

module.exports = {
  getRelated
}