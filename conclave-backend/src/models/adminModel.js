import { DataTypes } from 'sequelize';
import sequelize from '../connections/databaseConnection';

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

export default Admin;
