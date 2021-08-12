module.exports = (sequelize, DataTypes) => {
  const Photos = sequelize.define('photo', {
    url: DataTypes.TEXT,
    thumbnail_url: DataTypes.TEXT
  })

  Photos.associate = (models) => {
    Photos.belongsTo(models.Styles);
  }

  return Photos;
}