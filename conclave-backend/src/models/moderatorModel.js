import sequelize from '../connections/databaseConnection';

import Admin from './adminModel';
import User from './userModel';

// Added to have comments for all attributes in table
// Can be removed when at least one attribute is directly specified
//
// eslint-disable-next-line object-curly-newline
const Moderator = sequelize.define('moderator', {
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
// Read above comment at the start of the model definition
// eslint-disable-next-line object-curly-newline
}, {
  timestamps: true,
  paranoid: true,
});

Admin.hasMany(Moderator);
Moderator.belongsTo(Admin, { foreignKey: 'adminID' });
Moderator.belongsTo(User, { foreignKey: 'userID', targetKey: 'userID' });

export default Moderator;
