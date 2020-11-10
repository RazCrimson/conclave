import logger from 'morgan';
import express from 'express';
import cookieParser from 'cookie-parser';

import './connections/databaseInitializer';
import './middlewares/passport/passportConfig';

import indexRouter from './routes/index';
import authRouter from './routes/auth';

const app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/api', indexRouter);
app.use('/auth', authRouter);

export default app;
