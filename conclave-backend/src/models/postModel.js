import {DataTypes} from 'sequelize';
import {sequelize} from '../database/databaseConnection';

import {user} from "./userModel";
import {channel} from "./channelModel";

export const post = sequelize.define('post', {
  postID: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  // userID: {
  //   type: DataTypes.INTEGER.UNSIGNED,
  //   references: {
  //     model: 'User',
  //     key: 'userID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  // channelID: {
  //   type: DataTypes.INTEGER.UNSIGNED,
  //   references: {
  //     model: 'Channel',
  //     key: 'channelID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  content: {
    type: DataTypes.STRING(5000),
  },
  postType: {
    type: DataTypes.STRING(3),
    allowNull: false
  },
  accountCreation: {
    type: DataTypes.DATE,
    default: DataTypes.NOW,
    allowNull: false
  },
  voteCount: {
    type: DataTypes.INTEGER,
    default: 0,
    allowNull: false
  },
  commentCount: {
    type: DataTypes.INTEGER.UNSIGNED,
    default: 0,
    allowNull: false
  }
}, {
  timestamps: true,
  paranoid: true
});

user.hasMany(post);
channel.hasMany(post);
