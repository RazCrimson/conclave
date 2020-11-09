import { DataTypes } from 'sequelize';
import sequelize from '../connections/databaseConnection';

import User from './userModel';

const Friends = sequelize.define('friends', {
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
    allowNull: false,
  },
  friendResponseDate: {
    type: DataTypes.DATE,
    default: null,
  },
  response: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
}, {
  timestamps: true,
  paranoid: true,
});

User.belongsToMany(User, { as: 'userId', through: 'friends', foreignKey: 'userId', otherKey: 'friendId' });

export default Friends;
