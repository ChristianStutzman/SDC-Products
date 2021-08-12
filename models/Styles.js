module.exports = (sequelize, DataTypes) => {
  const Styles = sequelize.define('style', {
    name: DataTypes.TEXT,
    original_price: DataTypes.INTEGER,
    sale_price: DataTypes.INTEGER,
    default_style: DataTypes.BOOLEAN
  })

  Styles.associate = (models) => {
    Styles.hasMany(models.Photos, {
      foreignKey: 'style_id'
    });
    Styles.hasMany(models.Skus, {
      foreignKey: 'style_id'
    });
    Styles.belongsTo(models.Products);
  }

  return Styles;
}