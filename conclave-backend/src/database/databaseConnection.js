import { Sequelize } from 'sequelize';
import { databaseEnv } from '../config';

const sequelize = new Sequelize(databaseEnv.databaseName, databaseEnv.user, databaseEnv.password, {
  host: databaseEnv.host,
  dialect: databaseEnv.dialect,
  logging: console.log,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

export default sequelize;
