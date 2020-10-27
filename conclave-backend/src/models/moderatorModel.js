import {sequelize} from '../database/databaseConnection';

import {Admin} from "./adminModel";
import {User} from "./userModel";

export const Moderator = sequelize.define('moderator', {
  // userID: {
  //   type: DataTypes.INTEGER,
  //   primaryKey: true,
  //   references: {
  //     model: 'user',
  //     key: 'userID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  // adminID: {
  //   type: DataTypes.INTEGER.UNSIGNED,
  //   references: {
  //     model: 'Admin',
  //     key: 'adminID'
  //   },
  //   onUpdate: 'CASCADE'
  // }
}, {
  timestamps: true,
  paranoid: true
});

Admin.hasMany(Moderator);
Moderator.belongsTo(User);
