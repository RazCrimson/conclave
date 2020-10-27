import {DataTypes} from 'sequelize';
import {sequelize} from '../database/databaseConnection';

import bcrypt from 'bcrypt';

export const User = sequelize.define('user', {
  userID: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(50),
    unique: true,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  lastOnlineAt: {
    type: DataTypes.DATE,
    default: DataTypes.NOW,
    allowNull: false
  }
}, {
  timestamps: true,
  paranoid: true
});

User.addHook('beforeCreate', async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

User.addHook('beforeUpdate', async (user) => {
  if (user.password.changed())
    user.password = await bcrypt.hash(user.password, 10);
});

User.findByUsernameAndPassword = async (username, unHashedPassword) => {
  return User.findOne({where: {username: username, password: await bcrypt.hash(unHashedPassword, 10)}})
}
