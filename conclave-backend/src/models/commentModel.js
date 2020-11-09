import { DataTypes } from 'sequelize';
import sequelize from '../connections/databaseConnection';

import User from './userModel';
import Post from './postModel';

const Comment = sequelize.define('comment', {
  commentID: {
    type: DataTypes.UUID,
    default: DataTypes.UUIDV4,
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

User.hasMany(Comment, { foreignKey: 'userID' });
Post.hasMany(Comment, { foreignKey: 'postID' });
Comment.belongsTo(User, { foreignKey: 'userID' });
Comment.belongsTo(Post, { foreignKey: 'postID' });

export default Comment;
