import logger from 'morgan';
import express from 'express';

import passport from 'passport';

import './connections/databaseInitializer';

import indexRouter from './routes/index';

const app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use('/api', indexRouter);
app.use('/auth', authRouter);

export default app;
