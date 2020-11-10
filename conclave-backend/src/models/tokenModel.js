import { DataTypes } from 'sequelize';
import jwt from 'jsonwebtoken';
import sequelize from '../connections/databaseConnection';

import User from './userModel';
import { secrets } from '../config';

const Token = sequelize.define('token', {
  // userID: {
  //   type: DataTypes.UUID,
  //   primaryKey: true,
  //   references: {
  //     model: 'user',
  //     key: 'userID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  token: {
    type: DataTypes.TEXT,
    primaryKey: true,
  },
}, {
  timestamps: true,
  paranoid: true,
});

Token.belongsTo(User, { foreignKey: 'userID' });
User.hasMany(Token, { foreignKey: 'userID' });

// Instance methods for creating RefreshTokens
User.createRefreshToken = async (user) => {
  try {
    // const { userID, username } = this;
    const refreshToken = jwt.sign(
      { user: { sub: user.userID, name: user.username } },
      secrets.refreshTokenSecret,
      { expiresIn: '7d' },
    );
    return Token.create({ userID: user.userID, token: refreshToken }).then(() => refreshToken);
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default Token;
