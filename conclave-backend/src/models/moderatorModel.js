import { DataTypes } from 'sequelize';
import sequelize from '../connections/databaseConnection';

import Admin from './adminModel';
import User from './userModel';

// Added to have comments for all attributes in table
// Can be removed when at least one attribute is directly specified
//
// eslint-disable-next-line object-curly-newline
const Moderator = sequelize.define('moderator', {
  moderatorID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  // userID: {
  //   type: DataTypes.UUID,
  //   primaryKey: true,
  //   references: {
  //     model: 'user',
  //     key: 'userID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  // adminID: {
  //   type: DataTypes.UUID,
  //   references: {
  //     model: 'Admin',
  //     key: 'adminID'
  //   },
  //   onUpdate: 'CASCADE'
  // }
// Read above comment at the start of the model definition
// eslint-disable-next-line object-curly-newline
}, {
  timestamps: true,
  paranoid: true,
});

Admin.hasMany(Moderator, { foreignKey: 'adminID' });
Moderator.belongsTo(Admin, { foreignKey: 'adminID' });
Moderator.belongsTo(User, { foreignKey: 'moderatorID', targetKey: 'userID' });

export default Moderator;
