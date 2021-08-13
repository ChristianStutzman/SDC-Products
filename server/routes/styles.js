const models = require('../../models');
const { Op, IndexHints } = require('sequelize');

const getStyles = async (req, res) => {
  try {
    const productId = req.params.product_id;
    let result = {
      product_id: productId
    };

    result.results = await models.Styles.findAll({
      attributes: ['style_id', 'name', 'original_price', 'sale_price', 'default_style'],
      indexHints: [
        { type: IndexHints.USE, values: ['idx_product_id']}
      ],
      where: {
        product_id: productId
      }
    })
    for (let style of result.results) {
      style.dataValues.photos = await models.Photos.findAll({
        attributes: ['thumbnail_url', 'url'],
        indexHints: [
          { type: IndexHints.USE, values: ['idx_style_id_photos']}
        ],
        where: {
          style_id: style.dataValues.style_id
        }
      })
      style.dataValues.skus = await models.Skus.findAll({
        attributes: ['id', 'quantity', 'size'],
        indexHints: [
          { type: IndexHints.USE, values: ['idx_style_id']}
        ],
        where: {
          style_id: style.dataValues.style_id
        }
      })
    }
    res.json(result);
  } catch(err) {
    res.status(404).json('ERROR: Product Not Found');
  }
}

module.exports = {
  getStyles
};