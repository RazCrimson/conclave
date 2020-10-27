import { DataTypes } from 'sequelize';
import sequelize from '../database/databaseConnection';

import User from './userModel';
import Comment from './commentModel';

const CommentVote = sequelize.define('commentVote', {
  // userID: {
  //   type: DataTypes.INTEGER.UNSIGNED,
  //   references: {
  //     model: 'user',
  //     key: 'userID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  // commentID: {
  //   type: DataTypes.INTEGER.UNSIGNED,
  //   references: {
  //     model: 'comment',
  //     key: 'commentID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  voteState: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
}, { timestamps: true });

User.hasMany(CommentVote);
Comment.hasMany(CommentVote);

export default CommentVote;
