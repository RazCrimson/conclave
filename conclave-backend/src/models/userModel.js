import { DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import sequelize from '../connections/databaseConnection';

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

User.addHook('beforeCreate', async (user) => {
  // eslint-disable-next-line no-param-reassign
  user.password = await bcrypt.hash(user.password, 10);
});

User.addHook('beforeUpdate', async (user) => {
  // eslint-disable-next-line no-param-reassign
  if (user.password.changed()) user.password = await bcrypt.hash(user.password, 10);
});

User.findByUsernameAndPassword = async (username, unHashedPassword) => User.findOne({
  where: {
    username,
    password: await bcrypt.hash(unHashedPassword, 10),
  },
});

export default User;
