import dotenv from 'dotenv';

dotenv.config();
export const welcomeText = process.env.WELCOME_TEXT;

// Database environment variables
export const databaseEnv = {
  databaseName: process.env.DATABASE_NAME,
  dialect: process.env.DATABASE_DIALECT,
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
};

export const sessionStoreEnv = {
  secretToken: process.env.SECRET_TOKEN,
  host: process.env.SESSION_STORE_HOST || 'localhost',
  port: process.env.SESSION_STORE_PORT || 6379,
};
