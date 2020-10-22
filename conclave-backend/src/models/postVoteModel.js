import {DataTypes} from 'sequelize';
import {sequelize} from './databaseConnection';

import {user} from "./userModel";
import {post} from "./postModel";

export const postVote = sequelize.define('postVote', {
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
  voteState: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
}, {
  timestamps: true,
});

user.hasMany(postVote);
post.hasMany(postVote);
