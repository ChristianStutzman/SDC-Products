module.exports = (sequelize, DataTypes) => {
  const Related = sequelize.define('related', {
    current_product_id: DataTypes.INTEGER,
    related_product_id: DataTypes.INTEGER
  }, {
    freezeTableName: true
  })


  return Related;
}