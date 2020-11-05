import redis from 'redis';
import redisConnect from 'connect-redis';
import session from 'express-session';
import { v4 as uuid } from 'uuid';

import { sessionStoreEnv } from '../config';

const redisClient = redis.createClient();
const redisStore = redisConnect(session);

const sessionConfig = {
  // eslint-disable-next-line new-cap
  store: new redisStore(
    {
      host: sessionStoreEnv.host,
      port: sessionStoreEnv.port,
      client: redisClient,
    },
  ),
  // eslint-disable-next-line no-unused-vars
  genid: (req) => uuid(),
  secret: sessionStoreEnv.secretToken,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false, maxAge: 259200000 },
};

export default sessionConfig;
