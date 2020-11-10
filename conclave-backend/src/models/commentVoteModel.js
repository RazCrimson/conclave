import { DataTypes } from 'sequelize';
import sequelize from '../connections/databaseConnection';

import User from './userModel';
import Comment from './commentModel';

const CommentVote = sequelize.define('commentVote', {
  // userID: {
  //   type: DataTypes.UUID,
  //   references: {
  //     model: 'user',
  //     key: 'userID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  // commentID: {
  //   type: DataTypes.UUID,
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

User.hasMany(CommentVote, { foreignKey: 'userID' });
Comment.hasMany(CommentVote, { foreignKey: 'commentID' });
CommentVote.belongsTo(User, { foreignKey: 'userID' });
CommentVote.belongsTo(Comment, { foreignKey: 'commentID' });

export default CommentVote;
