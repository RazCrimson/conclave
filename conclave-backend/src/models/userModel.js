import {DataTypes} from 'sequelize';
import {sequelize} from '../database/databaseConnection';

import {hash} from 'bcrypt';

export const user = sequelize.define('user', {
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

user.addHook('beforeCreate', async (user) => {
  user.password = await hash(user.password, 10);
});

user.addHook('beforeUpdate', async (user) => {
  if (user.password.changed())
    user.password = await hash(user.password, 10);
});

user.findByUsernameAndPassword = async (username, unHashedPassword) => {
  return user.findOne({where: {username: username, password: await hash(unHashedPassword, 10)}})
}
