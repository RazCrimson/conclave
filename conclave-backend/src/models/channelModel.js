import { DataTypes } from 'sequelize';
import sequelize from '../connections/databaseConnection';

import Admin from './adminModel';

const Channel = sequelize.define('channel', {
  channelID: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  // adminID: {
  //   type: DataTypes.UUID,
  //   references: {
  //     model: 'admin',
  //     key: 'adminID'
  //   },
  //   onUpdate: 'CASCADE'
  // },
  channelName: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  channelDescription: {
    type: DataTypes.STRING(512),
    allowNull: false,
  },
  postCount: {
    type: DataTypes.INTEGER.UNSIGNED,
    defaultValue: 0,
    allowNull: false,
  },
  accountCreation: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
    allowNull: false,

  },
}, {
  timestamps: true,
  paranoid: true,
});

Admin.hasMany(Channel, { foreignKey: 'adminID' });
Channel.belongsTo(Admin, { foreignKey: 'adminID' });

export default Channel;
