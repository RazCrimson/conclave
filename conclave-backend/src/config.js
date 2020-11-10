import dotenv from 'dotenv';

dotenv.config();
export const welcomeText = process.env.WELCOME_TEXT;

// Database environment variables
export const databaseEnv = {
  databaseName: process.env.DATABASE_NAME,
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DATABASE_HOST || 'localhost',
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
};

export const secrets = {
  accessTokenSecret: process.env.ACCESS_SECRET_TOKEN,
  refreshTokenSecret: process.env.REFRESH_SECRET_TOKEN,
};
