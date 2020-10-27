import {DataTypes} from 'sequelize';
import {sequelize} from '../database/databaseConnection';

import {admin} from './adminModel';

export const channel = sequelize.define('channel', {
  channelID: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  // adminID: {
  //   type: DataTypes.INTEGER.UNSIGNED,
  //   references: {
  //     model: 'admin',
  //     key: 'adminID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  channelName: {
    type: DataTypes.STRING(128),
    allowNull: false
  },
  channelDescription: {
    type: DataTypes.STRING(512),
    allowNull: false
  },
  postCount: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
    allowNull: false
  },
  accountCreation: {
    type: DataTypes.DATE,
    default: DataTypes.NOW,
    allowNull: false

  }
}, {
  timestamps:true,
  paranoid:true
});

admin.hasMany(channel);
