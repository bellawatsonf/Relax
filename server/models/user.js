'use strict';
const {
  Model
} = require('sequelize');
const { encrypt } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Favorite)
      User.hasMany(models.Playlist)
      // User.hasMany(models.Friend,{as:'User', foreignKey:'UserId'})
      // User.hasMany(models.Friend, {as:'Friends',foreignKey:'FriendId'})
      // define association here
    }
  }
  User.init({
    username: {
      type : DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg: "username is required"
        }
      }
    },
    email: {
      type : DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg: "email is required"
        },
        isEmail:{
          args:true,
          msg: "format email invalid"
        }
      }
    },
    password: {
      type : DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg: "password is required"
        }
      }
    }
  }, {
    hooks:{
      beforeCreate:(User)=>{
        const hashedPassword = encrypt(User.password)
        User.password = hashedPassword
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};