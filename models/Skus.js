module.exports = (sequelize, DataTypes) => {
  const Skus = sequelize.define('sku', {
    size: DataTypes.TEXT,
    quantity: DataTypes.INTEGER
  })

  Skus.associate = (models) => {
    Skus.belongsTo(models.Styles);
  }

  return Skus;
}