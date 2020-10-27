import {sequelize} from '../database/databaseConnection';

import {admin} from "./adminModel";
import {user} from "./userModel";

export const moderator = sequelize.define('moderator', {
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

admin.hasMany(moderator);
moderator.belongsTo(user);
