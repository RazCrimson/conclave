import {DataTypes} from 'sequelize';
import {sequelize} from '../database/databaseConnection';

export const Admin = sequelize.define('admin', {
  adminID: {
    type: DataTypes.INTEGER.UNSIGNED,
    autoIncrement: true,
    primaryKey: true
  }
}, {
  timestamps: true,
  paranoid: true
});


