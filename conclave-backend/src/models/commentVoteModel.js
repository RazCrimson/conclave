import {DataTypes} from 'sequelize';
import {sequelize} from './databaseConnection';


import {user} from "./userModel";
import {comment} from "./commentModel";

export const commentVote = sequelize.define('commentVote', {
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
    allowNull: true
  },
}, {
  timestamps: true,
});

user.hasMany(commentVote);
comment.hasMany(commentVote);
