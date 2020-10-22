import dotenv from 'dotenv';
dotenv.config();
export const welcomeText = process.env.WELCOME_TEXT;

export const dbDialect = process.env.DATABASE_DIALECT;
export const dbHost = process.env.DATABASE_HOST;
export const dbName = process.env.DATABASE_NAME;
export const dbUser = process.env.DATABASE_USER;
export const dbPassword = process.env.DATABASE_PASSWORD;
