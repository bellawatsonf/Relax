'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { //associate diperlukan karena untuk mempopulate data dari table lain dan ditulis di yg memiliki foreignkey
      Friend.belongsTo(models.User, {as:'User', foreignKey:'UserId'})
      Friend.belongsTo(models.User, {as:'Friends', foreignKey:'FriendId'})
      // define association here
    }
  }
  Friend.init({
    UserId: DataTypes.INTEGER,
    FriendId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Friend',
  });
  return Friend;
};