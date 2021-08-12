

module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('product', {
    name: DataTypes.TEXT,
    slogan: DataTypes.TEXT,
    description: DataTypes.TEXT,
    category: DataTypes.TEXT,
    default_price: DataTypes.INTEGER
  })

  Products.associate = (models) => {
    Products.hasMany(models.Styles, {
      foreignKey: 'product_id'
    });
    Products.hasMany(models.Features, {
      foreignKey: 'product_id'
    });
  }

  return Products;
}