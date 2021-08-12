module.exports = (sequelize, DataTypes) => {
  const Features = sequelize.define('feature', {
    feature: DataTypes.TEXT,
    value: DataTypes.TEXT
  })

  Features.associate = (models) => {
    Features.belongsTo(models.Products);
  }

  return Features;
}