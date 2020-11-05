import logger from 'morgan';
import express from 'express';
import session from 'express-session';

import './connections/databaseInitializer';
import sessionConfig from './connections/sessionInitializer';

import indexRouter from './routes/index';

const app = express();

app.use(logger('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));

app.use('/api', indexRouter);

export default app;
