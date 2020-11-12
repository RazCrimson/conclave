import { DataTypes } from 'sequelize';
import sequelize from '../connections/databaseConnection';
import User from './userModel';

const Admin = sequelize.define('admin', {
  adminID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
}, {
  timestamps: true,
  paranoid: true,
});

Admin.belongsTo(User, { foreignKey: 'adminID', targetKey: 'userID' });

export default Admin;
