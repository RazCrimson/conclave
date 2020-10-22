import {DataTypes} from 'sequelize';
import {sequelize} from './databaseConnection';

import {user} from "./userModel";

export const friends = sequelize.define('friends', {
  // userID1: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'user',
  //     key: 'userID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  // userID2: {
  //   type: DataTypes.INTEGER,
  //   references: {
  //     model: 'user',
  //     key: 'userID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  friendRequestDate: {
    type: DataTypes.DATE,
    default: DataTypes.NOW,
    allowNull: false
  },
  friendResponseDate: {
    type: DataTypes.DATE,
    default: null,
  },
  response: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  timestamps: true,
  paranoid: true
});

user.belongsToMany(user, {as: 'userID1', through: 'friends' });
user.belongsToMany(user, {as: 'userID2', through: 'friends' });
