import { DataTypes } from 'sequelize';
import sequelize from '../database/databaseConnection';

import User from './userModel';
import Post from './postModel';

const PostVote = sequelize.define('postVote', {
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
    allowNull: true,
  },
}, {
  timestamps: true,
});

User.hasMany(PostVote);
Post.hasMany(PostVote);

export default PostVote;
