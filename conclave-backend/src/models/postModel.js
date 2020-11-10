import { DataTypes } from 'sequelize';
import sequelize from '../connections/databaseConnection';

import User from './userModel';
import Channel from './channelModel';

const Post = sequelize.define('post', {
  postID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  // userID: {
  //   type: DataTypes.UUID,
  //   references: {
  //     model: 'User',
  //     key: 'userID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  // channelID: {
  //   type: DataTypes.UUID,
  //   references: {
  //     model: 'Channel',
  //     key: 'channelID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  content: { type: DataTypes.STRING(5000) },
  postType: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  accountCreation: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
  voteCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  commentCount: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
    allowNull: false,
  },
}, {
  timestamps: true,
  paranoid: true,
});

User.hasMany(Post, { foreignKey: 'userID' });
Channel.hasMany(Post, { foreignKey: 'channelID' });
Post.belongsTo(User, { foreignKey: 'userID' });
Post.belongsTo(Channel, { foreignKey: 'channelID' });

export default Post;
