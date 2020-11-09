import { DataTypes } from 'sequelize';
import sequelize from '../connections/databaseConnection';

import User from './userModel';
import Channel from './channelModel';

const Post = sequelize.define('post', {
  postID: {
    type: DataTypes.UUID,
    default: DataTypes.UUIDV4,
    primaryKey: true,
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
  content: { type: DataTypes.STRING(5000) },
  postType: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
  accountCreation: {
    type: DataTypes.DATE,
    default: DataTypes.NOW,
    allowNull: false,
  },
  voteCount: {
    type: DataTypes.INTEGER,
    default: 0,
    allowNull: false,
  },
  commentCount: {
    type: DataTypes.INTEGER.UNSIGNED,
    default: 0,
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
