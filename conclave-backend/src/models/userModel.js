import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import sequelize from '../connections/databaseConnection';
import { secrets } from '../config';

const User = sequelize.define('user', {
  userID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  lastOnlineAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,
  },
}, {
  timestamps: true,
  paranoid: true,
});

// bcrypt hooks and functions to update/check password as required
User.addHook('beforeCreate', async (user) => {
  // eslint-disable-next-line no-param-reassign
  user.password = await bcrypt.hash(user.password, 10);
});

User.addHook('beforeUpdate', async (user) => {
  // eslint-disable-next-line no-param-reassign
  if (user.changed('password')) user.password = await bcrypt.hash(user.password, 10);
});

User.findByEmailAndPassword = async (email, unHashedPassword) => {
  const user = await User.findOne({ where: { email } });
  return bcrypt.compare(unHashedPassword, user.password).then((isMatch) => {
    if (isMatch) return user;
    return null;
  });
};

// Instance methods for creating AccessTokens
User.createAccessToken = async (user) => {
  try {
    // const { userID, username } = this;
    return jwt.sign(
      { user: { sub: user.userID, name: user.username } },
      secrets.accessTokenSecret,
      { expiresIn: '60m' },
    );
  } catch (error) {
    console.error(error);
    return null;
  }
};

// Instance methods for creating RefreshTokens in tokenModel.js

export default User;
