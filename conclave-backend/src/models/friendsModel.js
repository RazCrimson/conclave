import {DataTypes} from 'sequelize';
import {sequelize} from '../database/databaseConnection';

import {User} from "./userModel";

export const Friends = sequelize.define('friends', {
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

User.belongsToMany(User, {as: 'userID1', through: 'friends' });
User.belongsToMany(User, {as: 'userID2', through: 'friends' });
