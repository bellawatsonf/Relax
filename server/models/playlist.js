'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Playlist.belongsTo(models.User)
      // define association here
    }
  }
  Playlist.init({
    UserId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    preview: DataTypes.STRING,
    picture: DataTypes.STRING,
    ArtistId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Playlist',
  });
  return Playlist;
};