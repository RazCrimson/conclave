import { DataTypes } from 'sequelize';
import sequelize from '../database/databaseConnection';

import User from './userModel';
import Post from './postModel';

const Comment = sequelize.define('comment', {
  commentID: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true,
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
  content: { type: DataTypes.STRING(5000) },
  voteCount: {
    type: DataTypes.INTEGER,
    default: 0,
    allowNull: false,
  },
}, {
  timestamps: true,
  paranoid: true,
});

User.hasMany(Comment);
Post.hasMany(Comment);

export default Comment;
