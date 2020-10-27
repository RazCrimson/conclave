import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';

import './database/databaseInitializer';

import indexRouter from './routes/index';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/api', indexRouter);

export default app;
