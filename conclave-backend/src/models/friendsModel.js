import { DataTypes } from 'sequelize';
import sequelize from '../connections/databaseConnection';

import User from './userModel';

const Friends = sequelize.define('friends', {
  // userID1: {
  //   type: DataTypes.UUID,
  //   references: {
  //     model: 'user',
  //     key: 'userID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  // userID2: {
  //   type: DataTypes.UUID,
  //   references: {
  //     model: 'user',
  //     key: 'userID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  friendRequestDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  friendResponseDate: {
    type: DataTypes.DATE,
    defaultValue: null,
  },
  response: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  timestamps: true,
  paranoid: true,
});

User.belongsToMany(User, { as: 'userId', through: 'friends', foreignKey: 'userID', otherKey: 'friendID' });

export default Friends;
