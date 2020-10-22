import {DataTypes} from 'sequelize';
import {sequelize} from './databaseConnection';

import {user} from "./userModel";
import {post} from "./postModel";

export const comment = sequelize.define('comment', {
  commentID: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  },
  // userID: {
  //   type: DataTypes.INTEGER.UNSIGNED,
  //   references: {
  //     model: 'user',
  //     key: 'userID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  // postID: {
  //   type: DataTypes.INTEGER.UNSIGNED,
  //   references: {
  //     model: 'post',
  //     key: 'postID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  content: {
    type: DataTypes.STRING(5000),
  },
  voteCount: {
    type: DataTypes.INTEGER,
    default: 0,
    allowNull: false
  }
}, {
  timestamps: true,
  paranoid: true
});

user.hasMany(comment);
post.hasMany(comment);
